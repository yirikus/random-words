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

main();