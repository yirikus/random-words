
/**
 * $1: noun
 * $2: plurarity: '_MN' or ''
 * $3: case: number '_1' ...
 * 
 * noun patterns,
 * M:
 * S:
 * Z: zena ruze kost
 */ 
VOCAB.NOUN_M = [    
    "<$1><$2>"
]
VOCAB.NOUN_S = [    
    "<$1_MESTO$2><_MESTO$2$3>",
    "<$1_KURE$2><_KURE$2$3>",
    "<$1_MORE$2><_MORE$2$3>",
    "<$1_STAV$2><_STAV$2$3>",
]
VOCAB.NOUN_F = [    
    "<$1><$2>"
]

// stredni rod
// mesto
VOCAB._MESTO=["o"];
VOCAB._MESTO_2=["a"];
VOCAB._MESTO_3=["u"];
VOCAB._MESTO_4=["o"];
VOCAB._MESTO_6=["u"];
VOCAB._MESTO_7=["em"];
// kure
VOCAB._KURE=["e"];
VOCAB._KURE_2=["e"];
VOCAB._KURE_3=["i"];
VOCAB._KURE_4=["e"];
VOCAB._KURE_6=["i"];
VOCAB._KURE_7=["em"];
//more
VOCAB._MORE=["e"];
VOCAB._MORE_2=["e"];
VOCAB._MORE_3=["i"];
VOCAB._MORE_4=["e"];
VOCAB._MORE_6=["i"];
VOCAB._MORE_7=["em"];

//staveni
VOCAB._STAV_7=["m"];

//stredni rod mn
// mesto mn
VOCAB._MESTO_MN=["a"];
VOCAB._MESTO_MN_3=["ům"];
VOCAB._MESTO_MN_4=["a"];
VOCAB._MESTO_MN_6=["ech"];
VOCAB._MESTO_MN_7=["y"];
// kure mn
VOCAB._KURE_MN=["a"];
VOCAB._KURE_MN_3=["ům"];
VOCAB._KURE_MN_4=["a"];
VOCAB._KURE_MN_6=["ech"];
VOCAB._KURE_MN_7=["y"];
//more mn
VOCAB._MORE_MN=["e"];
VOCAB._MORE_MN_2=["e"];
VOCAB._MORE_MN_3=["i"];
VOCAB._MORE_MN_4=["e"];
VOCAB._MORE_MN_6=["i"];
VOCAB._MORE_MN_7=["em"];

//staveni mn
VOCAB._STAV_MN_3=["m"];
VOCAB._STAV_MN_6=["mich"];
VOCAB._STAV_MN_7=["mi"];

//zensky rod
//zena
//ruze
//pisen
//kost

//zensky rod mn
//zena mn
//ruze mn
//pisen mn
//kost mn

//muzsky rod
//pan
//hrad
//muz
//stroj
//muzsky rod mn


VOCAB.AREA = [
    "cemetary",
    "park",
    "garden",
    "slum",
    "alley",
    "cave",
    "road",
];

VOCAB.MAGIC = [
    "abjuration",
    "conjuration",
    "divination",
    "enchantment",
    "evocation",
    "illustion",
    "necromancy",
    "transmutation",

];

VOCAB.GOD_ASPECT_2 = [
    "<ELEMENT_2|ELEMENT_2_E|ABSTRACT_2|ABSTRACT_2_E>"
];

VOCAB.ELEMENT_2 = [
    "blesku",
    "ledu",
    "ohně",
    "vody",
    "vzduchu",
    "slunce",
    "krve",
    "měsíce",
    "hvězd",
    "země",
    "světla",
    "temnoty",
    "nicoty",

];

VOCAB.ELEMENT_2_E = [
    "slunce",
    "světla",
];

VOCAB.ABSTRACT_2 = [
    "léčení",
    "lásky",    
    "plodnosti",
    "úrody",
    "války",    
    "hladomoru",
    "hladu",
    "chaosu",
    "moru",
    "požitků",
    "touhy",
    "prosperity",
    "vědy",
    "technologie",
    "chtíče",
    "lovu",
    "teologie",
    "filozofie",
    "vítězství"

];
VOCAB.ABSTRACT_2_E = [
    "zdraví",
    "smrti",
    "strachu",
    "smíchu",    
]

VOCAB.FOOD = [
    "<ANIMAL> meat",
    "wheat",
    "rice", 
    "pastry",
    "beer",
    "wine",   
];

VOCAB.VEGETABLE = [
    "tomato",
    ""   
];

VOCAB.CREATURE = [
    "drak",
    "nymfa",
    "stín",
    "gremlin",
    "harpye",

]

VOCAB.ANIMAL_S = [
    "prase", 
    "kuře",
]

VOCAB.ANIMAL_F = [
    "ovce",
    "ryba",
    "krysa",
    "kráva",
    "kočka",
    "liška"
];

VOCAB.ANIMAL_M = [
    "pták",    
    "vlk",       
    "hmyz",
    "had",
    "kanec",
    "kůň",
    "medvěd",
    "netopýr",
];

VOCAB.ANIMAL_2_MN = [
    "ovcí",
    "ryb",
    "ptáků",    
    "koní",
    "vlků",
    "kanců",
    "prasat",
    "kuřat",
    "draků",
    "krys",
    "hmyzu",
    "hadů",
    "netopýrů",
    "krav",
    "koček",
    "medvědů",

];

VOCAB.BIOME_2_MN = [    
    "hor",
    "sopek",
    "lesů",
    "podzemí",
    "pouští",
    "džungle",
    "řek",
    "jezer",
    "bažin",
    "mokřadů",
    "oceánů",
];

VOCAB.BIOME_6 = [    
    "horách",
    "hoře",    
    "lese",
    "pralese",
    "podzemí",
    "kaňonu",
    "bažině",
    "mokřadech",    
];

VOCAB.BIOME_6_Е = [    
    "skále",
];

VOCAB.BIOME_ATYP = [    
    "na ostrově",
    "na poušti",
    "u jezera <CITY_NAME_GRAMMAR|>",
    "u řeky <CITY_NAME_GRAMMAR|>"
];

VOCAB.COMMUNITY = [
    "město",
    "vesnice",
    "osada",
    "velkoměsto",
    "metropole"
]

VOCAB.SCIENCE = [
    "theology",
    "technology"   
];

VOCAB.SUBJECT = [
    "technology",
    "clock",    
    "fruit",
    "jewel",
    "carpet",
    "magical items",
    "meat"
];