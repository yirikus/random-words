const VOCAB = {
    //ADJ = VOCAB.CONDITION.concat(VOCAB.MATERIAL).concat(VOCAB.SUBJECT).concat(VOCAB.EMOTION);
BUILDING_GRAMMAR : [
    "<CONDITION> <BUILDING>",
    "<CONDITION> <MATERIAL> <BUILDING>",
    "<CONDITION> <AREA>",
    "<CONDITION> <BUILDING> looking <EMOTION>",

],

FAITH_GRAMMAR: [
    "mother of gods",
    "father of gods",
    "<TRAIT|> <RACE|> god of <ELEMENT|ANIMAL|SUBJECT|BIOME>",
    "<TRAIT|> <RACE|> goddess of <ELEMENT|ANIMAL|SUBJECT|BIOME>",
    "<RACE|> guardian of <ANIMAL|SUBJECT|BIOME>",
    "<TRAIT> <RACE|> bestower of healing",
    "<TRAIT|> <RACE|> gatekeeper of <BIOME>",

],

CHARACTER: [

],

RACE: [
    "reptilian",
    "fungal",
    "undead",
    "skeletal",
    "coral",
    "draconian",
    "desert",
    "feline",
    "treant",
    "stone",
    "<ELEMENT> elemental",
    "vampiric",
    "demonic",
    "aquatic",
    "amphibian",
    "elven"
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
    "Ocean",
],
CONDITION : [
    "poor",
    "abandoned",
    "fancy",
    "magical",
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
    "luxury",
    "sexy",
    "exciting"    
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

ANIMAL: [
    "sheep",
    "fish",
    "bird",    
    "horse"
],

SUBJECT : [
    "technology",
    "clock",    
    "fruit",
    "jewel",
    "carpet",
    "magical items",
    "meat"
],

SCIENCE: [
    "theology",
    "technology"   
],

MAGIC: [
    "abjuration",
    "conjuration",
    "divination",
    "enchantment",
    "evocation",
    "illustion",
    "necromancy",
    "transmutation",

],

ELEMENT: [
    "thunder",
    "ice",
    "fire",
    "water",
],

ABSTRACT: [
    "war",
    "fear",
    "chaos",
    "love",
    "indulgence",
    "appetites",
    "hunger",
    "prosperity",
    "technology",
    "death",
    "harvest",
    "hunt",    
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

AREA: [
    "cemetary",
    "park",
    "garden",
    "slum",
    "alley",
    "cave",
    "road",
],

BUILDING : [
    "gate",
    "church",
    "<SUBJECT|MINERAL> market",
    "house",
    "home of a <PERSON>",
    "<PROFESSION|SUBJECT|ANIMAL|> tower",
    "port",
    "<ANIMAL|SUBJECT> shop",
    "workshop",    
    "station",   
    "shrine",
    "fountain",
    "university of <SCIENCE|MAGIC>",
    "<PERSON>'s laboratory",
    "<MINERAL> mine",
    "factory",
    "fortress",
    "monument",
    "<ANIMAL|> farm",
    "storage",
    "guild house", 
    "crypt",
    "wreck",
    "temple",
    "cathedral",    
    "castle",    
    "statue of a <SUBJECT|PERSON>",
    "lighthouse",
    "pub",
    "hotel",
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
        writeRandomSentence(VOCAB.BUILDING_GRAMMAR);   
    } 
    document.writeln("<hr/> Faith: <br/><br/>");
    for (let i = 0; i < 7; i++) {
        writeRandomSentence(VOCAB.FAITH_GRAMMAR);   
    }     
}

const writeRandomSentence = (grammar) => {
    document.write(
        expandWord(grammar) 
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