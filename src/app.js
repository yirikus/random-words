const VOCAB = {
    //ADJ = VOCAB.CONDITION.concat(VOCAB.MATERIAL).concat(VOCAB.SUBJECT).concat(VOCAB.EMOTION);
GRAMMAR : [
    "<CONDITION> <BUILDING>",
    "<CONDITION> <MATERIAL> <BUILDING>",
    "<CONDITION> <BUILDING> looking <EMOTION>",

],    
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

TRAIT: [
    "rich",
    "skillful",
    "average",
    "clumsy",
    "noisy",
    "drunken",
    "poor",
    "angry",
    "optimistic",
    "tolerant",
    "charismatic",
    "dumb",
    "smart",
    "careless",
    "careful",
    "fearless",
    "courageous",    
],

PERSON: [
    "<TRAIT|> <PROFESSION>"
],

PROFESSION : [
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
    "leader",
    "man",
    "woman"
],

BUILDING : [
    "gate",
    "church",
    "<SUBJECT|MINERAL> market",
    "house",
    "home of a <PERSON>",
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
    "statue of a <SUBJECT|PERSON>",
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

const main = () => {    
    document.writeln(randomWord(VOCAB.BIOME) + " city <br/><br/>");
    for (let i = 0; i < 30; i++) {
        writeRandomSentence();   
    }    
}

const writeRandomSentence = () => {
    document.write(
        expandWord(VOCAB.GRAMMAR) 
        + "<br/>"
    ); 
}

const randomWord = (array) => {
    var number = Math.floor((Math.random() * array.length));
    return array[number];

}

const expandWord = (array) => {
    let word = randomWord(array);
    //var bonusMatch = word.match(/<(.*)>/);
    let toExpand = word.match(/<([^>]*)>/g);
    
    if (toExpand) {        
        for (let i = 0; i < toExpand.length; i++) {
            let subArrayNames = toExpand[i].replace(/<(.*)>/,"$1");
            let subArray = randomWord(subArrayNames.split("|"));
            if (!subArray) {
                word = word.replace(toExpand[i],"")
            } else {
                if (! VOCAB[subArray]) {
                    throw "cannot expand " + subArray;
                }        
                word = word.replace(toExpand[i], expandWord(VOCAB[subArray]));   
            }  
        }     
    }
    return word;
}

main();