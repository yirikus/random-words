
/**
 * split expandable element to vocabulary names
 * ie. [A|B] to ['A','B']
 * @param {*} expandable 
 */
const getVocabNames = (expandable) => expandable.replace(/\[(.*)\]/, "$1").split("|");
const initContext = () => {
   return {
       currentContext: 'default',
       vocabNames: {
           /*  example:
           'PROFESSION': {
                   'blacksmith': []
               }
           } */
       }
   };
}

var context = initContext();

const resetContext = () => {
    context = initContext();
}

/**
 * Choose on of possible vocabularies from given expandable element
 * example choose A,B or nothing from [A|B|]
 * @param {*} expandable expandable element [...]
 */
const getVocabName = (expandable) => {
    let vocabNames = getVocabNames(expandable);
    return Utils.chooseRandomFrom(vocabNames).split(':');
}

const addToContext = (vocabName, word) => {
    if (!context.vocabNames[vocabName]) {
        context.vocabNames[vocabName] = {};
    }
    if (!context.vocabNames[vocabName][word]) {
        context.vocabNames[vocabName][word] = [];
    }
    context.vocabNames[vocabName][word].push(context.currentContext);
}

const setContext = (contextName) => {
    context.currentContext = contextName;
}

const useFromContext = (vocabName) => {
    let words = context.vocabNames[vocabName];
    for (let word in words) {
        if (words[word].indexOf(context.currentContext) < 0) {
            addToContext(vocabName, word);
            return word;
        }
    }
    return null;
}

function usesContext(vocabName) {
    return vocabName.indexOf('*') === 0;
}

function useParamsWithContext(vocabNameAndParams) {
    for (let i = 1; i < vocabNameAndParams.length; i++) {
        if (usesContext(vocabNameAndParams[i])) {
            let paramVocabName = vocabNameAndParams[i].substr(1);
            let word = useFromContext(paramVocabName);
            if (!word) {
                word = expandWord(getVocabulary(paramVocabName, '*' + paramVocabName));
            }
            addToContext(paramVocabName, word);
        }
    }
}

/**
 * If vocabName contains equality sign '=', this value is used and stored to context
 * @param vocabName
 * @returns {*|string} the used value
 */
function useValue(vocabName) {
    let vocabNameAndValue = vocabName.split('=');
    addToContext(vocabNameAndValue[0], vocabNameAndValue[1]);
    return vocabNameAndValue[1];
}

/**
 * Replace one expandable element in a word
 * @param {*} word word that consists of exapandable elements ie [A][B][C]
 * @param {*} expandable string contained in word that should be raplaced with word
 *      from dictionary, ie [A|B|]
 */
const replaceExapandableWord = (word, expandable) => {
    //example with params: //<ADJ:SIZE:_M>
    let vocabNameAndParams = getVocabName(expandable);
    let vocabName = vocabNameAndParams[0];
    let useContext = false;
    if (!vocabName) {
        // empty option, ie <> or second option in <A|>
        return word.replace(expandable, "");
    } else {
        if (usesContext(vocabName)) {
            vocabName = vocabName.substr(1);
            useContext = true;
        }
        useParamsWithContext(vocabNameAndParams);
        if (useContext) {
            // '=' sets given vocabulary to given value
            // example: [*PROFESSION=necromancer] will set profession to 'necromancer' and set it to context
            if (vocabName.indexOf('=') >= 0) {
                let value = useValue(vocabName);
                return word.replace(expandable, value);
            } else {
                let fromContext = useFromContext(vocabName);
                if (fromContext) {
                    return word.replace(expandable, fromContext);
                }
            }
        }

        let replaceWith = expandWord(getVocabulary(vocabName, word), vocabNameAndParams.slice(1));
        let expandedWord = word.replace(expandable, replaceWith);
        if (useContext) {
            addToContext(vocabName, replaceWith);
        }
        return expandedWord;
    }
}

function getVocabulary(vocabName, sentence) {
    let vocabulary = VOCAB[vocabName.toUpperCase()];
    if (!vocabulary) {
        console.warn("cannot expand " + vocabName + " in sentence " + sentence);
        vocabulary = '';
    }
    return vocabulary;
}

/**
 * Applies params to a word
 * example: [ADJ:SIZE:_M] -> [$1$_ML][$2$]
 * result: [SIZE_M][_M]
 * @param {*} word
 * @param {*} params
 */
const applyParams = (word, params) => {

    if (!word || word.indexOf('$') < 0) {
        return word;
    }
    if (params) {
        for (let i = 0; i < params.length; i++) {
            word = word.replace(new RegExp('\\$' + (i + 1) + '\\$', 'g'), params[i].toUpperCase());
        }
    }
    return word;
}

/**
 * Replace exapandable elements with words from given vocabulary
 * Function is recursive
 * @param {*} vocabulary array of words, words can contain expandable elements
 * @param {[]} params list of params
 */
const expandWord = (vocabulary, params) => {
    let word = Utils.chooseRandomFrom(vocabulary) || '';
    word = applyParams(word, params);
    let expandables = word.match(/\[([^\]]*)\]/g);

    if (expandables) {
        for (let i = 0; i < expandables.length; i++) {
            word = replaceExapandableWord(word, expandables[i]);
        }
    }
    return word;
}

GrammarExpander = {
    expandWord,
    setContext
}