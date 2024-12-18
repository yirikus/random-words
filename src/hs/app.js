


const main = () => {
    writePreferences();
    writeGeneratedWords();
}

const writeGeneratedWords = () => {
    GrammarExpander.setContext('brief');
    writeElement('cardBrief', generateWord(VOCAB.BRIEF));
    GrammarExpander.setContext('card');
    writeElement('cardName', generateWord(VOCAB.CARD_NAME));
    GrammarExpander.setContext('attributes');
    //writeElement('cardClass', generateWord(VOCAB.CLASS_GRAMMAR));
    writeElement('cardRace', generateWord(VOCAB.RACE_GRAMMAR));

    writeElement('version', version);
}

main();