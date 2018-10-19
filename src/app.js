const VOCAB = {
BIOME : [
    "Oceanic",
    "Mountain",
    "Mineral",
    "Crystalline",
    "Volcanic",
    "Forest",
    "Glacial",
    "Polar",
    "Fungal",
    "Subterrean",
    "Canyon",
    "Grassland",
    "Desert",
    "Rainforest",
    "Jungle",
    "River",
    "Lake",
    "Swamp",
    "Wetlands",
],
CONDITION : [
    "poor",
    "abandoned",
    "fancy",
    "magical",
    "mage",
    "arcane",
    "alchemyst",    
    "old",
    "cursed",
    "holy",
    "ruined",
    "industrial",
    "subterranean",
    "fungal",    
    "frozen",
    "forest",    
    "botanical",
    "volcanic",
    "luxury"
    
],

MATERIAL : [
    "wooden", 
    "metal",
    "stone",
    "mud",
    "salvaged",
    "bone",
    "glass",
    "grass",
    "ice",

],

SUBJECT : [
    "technology",
    "clock",    
    "fruit",
    "jewel",
    "carpet",
    "meat",
    "sheep",
    "fish",
    "bird",
],

MINERAL : [
    "gold",
    "silver",
    "iron"    
],
//replace with character generator
PERSON : [
    "mage",
    "alchemyst",
    "knight",
    "priest",
    "blacksmith",
    "merchant",
    "rebel",
    "thief",
    "murderer",
    "courtesan",
    "fisherman",
    "teacher",
    "rogue",
    "archer",
    "guard",
    "leader"
],

CITY_PARTS : [
    "gate",
    "church",
    "<SUBJECT|MINERAL> market",
    "house",
    "home of <PERSON>",
    "tower",
    "port",
    "shop",
    "workshop",
    "cemetary",
    "station",
    "garden",
    "park",
    "shrine",
    "fountain",
    "university",
    "<PERSON>'s laboratory",
    "<MINERAL> mine",
    "factory",
    "fortress",
    "monument",
    "farm",
    "storage",
    "guild house", 
    "crypt",
    "slum",
    "alley",
    "wreck",
    "temple",
    "cathedral",
    "cave",
    "castle",
    "road",
    "statue of <SUBJECT|PERSON>",
    "lighthouse",
    "brothel"      
],

EMOTION : [
    "funny",
    "majestic",
    "boring",
    "scary",
    "gloomy",
    "happy"
]
}

ADJ = VOCAB.CONDITION.concat(VOCAB.MATERIAL).concat(VOCAB.SUBJECT).concat(VOCAB.EMOTION);

const main = () => {    
    document.writeln(randomWord(VOCAB.BIOME) + " city <br/><br/>");
    for (var i = 0; i < 30; i++) {
        writeRandomSentence();   
    }    
}

const writeRandomSentence = () => {
    document.write(
        generateWord(ADJ)
        + " " + generateWord(VOCAB.CITY_PARTS) 
        // + " looking " + randomWord(EMOTIONS) 
        + "<br/>"
    ); 
}

const randomWord = (array) => {
    var number = Math.floor((Math.random() * array.length));
    return array[number];

}

const generateWord = (array) => {
    var word = randomWord(array);
    var bonusMatch = word.match(/<(.*)>/);
    if (bonusMatch) {
        var subArray = randomWord(bonusMatch[1].split("|"));
        return generateWord(VOCAB[subArray]);
    } else {
        return word;
    }
}

main();

/*
Grammar

H house
C condtion
S subject
M material

H -> Ch | CSh | CMSh
C -> c
S -> s
M -> m
*/