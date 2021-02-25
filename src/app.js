const version = '25.02.2021, 15:45 (v26 - shark with human face)';
const main = () => {
    writePreferences();
    writeGeneratedWords();
}

const writeGeneratedWords = () => {
    writeElement('cityName', cityName());
    writeElement('cityDesc', cityDesc());
    writeElement('mainStory', mainStory());
    writeElement('story', story());
    writeElement('buildings', buildings());
    writeElement('faith', faith());
    writeElement('characters', characters());
    writeElement('monsters', monsters());
    writeElement('techno-monsters', technoMonsters());
    writeElement('version', version);
}

const writePreferences = () => {
    let elements = $('.preference');
    for(let i = 0; i < elements.length; i++) {
        if (!VOCAB[elements[i].id]) {
            console.error('Vocabulary ' + VOCAB[elements[i].id] + 'does not exist!');
            continue;
        }
        writeElement(elements[i].id, options(VOCAB[elements[i].id]));
    }
}

const generate = () => {
    resetContext()
    setContext('preferences');
    addPreferencesToContext();
    writeGeneratedWords();
}

const addPreferencesToContext = () => {
    let elements = $('.preference');
    for(let i = 0; i < elements.length; i++) {
        let val = $(elements[i]).val();
        if (val) {
            addToContext(elements[i].id, val);
        }
    }
}

const options = (list) => {
    let opts = list.map(a => '<option>' + a + '</option>');
    return '<option></option>' + opts.join('');
}

const writeElement = (elementId, value) => {
    document.getElementById(elementId).innerHTML = value;
}

const writeList = (grammar, count) => {
    let innerHtml = '<ul class="list-group">';
    for (let i = 0; i < count; i++) {
        innerHtml += '<li class="list-item">';  
        innerHtml += generateWord(grammar);         
        innerHtml += '</li>'; 
    }
    innerHtml += '</ul>'; 
    return innerHtml;
}

const generateWord = (grammar) => {
    let word = GrammarExpander.expandWord(grammar);
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const cityName = () => {
    GrammarExpander.setContext('city');
    return GrammarExpander.expandWord(VOCAB.CITY_NAME_GRAMMAR).toUpperCase();    
}

const cityDesc = () => {
    GrammarExpander.setContext('city');
    return GrammarExpander.expandWord(VOCAB.CITY_DESC_GRAMMAR).toUpperCase();
}

const mainStory = () => {
    GrammarExpander.setContext('story');
    return generateWord(VOCAB.MAIN_STORY_GRAMMAR);    
}

const story = () => {
    GrammarExpander.setContext('story');
    return writeList(VOCAB.STORY_GRAMMAR, 5); 
}

const buildings = () => {
    GrammarExpander.setContext('buildings');
    return writeList(VOCAB.BUILDING_GRAMMAR, 8); 
}

const faith = () => {
    GrammarExpander.setContext('faith');
    return writeList(VOCAB.FAITH_GRAMMAR, 3);
}

const characters = () => {
    GrammarExpander.setContext('characters');
    return writeList(VOCAB.CHARACTER_GRAMMAR, 5);
}

const monsters = () => {
    GrammarExpander.setContext('monsters');
    return writeList(VOCAB.MONSTER_GRAMMAR, 5);
}

const technoMonsters = () => {
    GrammarExpander.setContext('technoMonsters');
    return writeList(VOCAB.TECHNO_MONSTER_GRAMMAR, 5);
}

main();