
/**
 * split expandable element to vocabulary names
 * ie. [A|B] to ['A','B']
 * @param {*} expandable 
 */
const getVocabNames = (expandable) => expandable.replace(/\[(.*)\]/, "$1").split("|");
const context = {
    currentContext: 'default',
    vocabNames: {
        /*  example:
        'PROFESSION': {
                'blacksmith': []
            }
        } */
    }
};

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
        if (vocabName.indexOf('*') === 0) {
            vocabName = vocabName.substr(1);
            useContext = true;
        }
        if (useContext) {
            let fromContext = useFromContext(vocabName);
            if (fromContext) {
                return word.replace(expandable, fromContext);
            }
        }
        let replaceWithExpandable = VOCAB[vocabName];
        if (!replaceWithExpandable) {
            console.warn("cannot expand " + vocabName + " in word " + word);
            replaceWithExpandable = "";
        }
        let replaceWith = expandWord(replaceWithExpandable, vocabNameAndParams.slice(1));
        let expandedWord = word.replace(expandable, replaceWith);
        if (useContext) {
            addToContext(vocabName, replaceWith);
        }
        return expandedWord;
    }
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
    for (let i = 0; i < params.length; i++) {
        word = word.replace(new RegExp('\\$' + (i + 1) + '\\$','g'), params[i]);
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