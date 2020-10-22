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
    "[$1][$2]"
];
VOCAB.NOUN_S = [    
    "[$1_MESTO$2][_MESTO$2$3]",
    "[$1_KURE$2][_KURE$2$3]",
    "[$1_MORE$2][_MORE$2$3]",
    "[$1_STAV$2][_STAV$2$3]",
]
VOCAB.NOUN_F = [    
    "[$1][$2]"
];

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
    "[ELEMENT_F_2|ABSTRACT_2|ABSTRACT_2_E]",
    "[ELEMENT_2_S_E|ABSTRACT_2|ABSTRACT_2_E]",
    "[ELEMENT_M_2|ABSTRACT_2|ABSTRACT_2_E]",
];

VOCAB.ELEMENT_M_2 = [
    "blesku",
    "ledu",
    "ohně",
    "vzduchu",
    "měsíce",
];

VOCAB.ELEMENT_F_2 = [
    "vody",
    "krve",
    "hvězdy",
    "země",
    "temnoty",
    "nicoty",
];

VOCAB.ELEMENT_S_2 = [
];

VOCAB.ELEMENT_2_S_E = [
    "slunce",
    "světla",
];

VOCAB.FLOWER= [
    "růže",
    "karafiát",
    "tulipán",
    "lilie",
    "narcis",
    "slunečnice",
    "jetel",
    "sedmikráska",
    "kopretina",
    "levandule"
]

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

VOCAB.FOOD_7 = [
    "masem z [ANIMAL_2_MN]",
    "pšenicí",
    "rajčaty",
    "rýží", 
    "pečivem",
    "pivem",
    "vínem",   
];

VOCAB.DRINK_2 = [
    "piva",
    "vína", 
    "tvrdého alkoholu",
    "džusu",    
    "vody z latríny",
    "vody",
];

VOCAB.FOOD_2 = [
    "masa z [ANIMAL_2_MN]",
    "steaků z [ANIMAL_2_MN]",
    "párků z [ANIMAL_2_MN]",
    "hamburgerů z [ANIMAL_2_MN]",
    "knedlíků",
    "polívky",
    "banánů",
    "jablek",
    "pšenice",
    "rajčat",
    "rýže", 
    "pečiva", 
];

VOCAB.FOOD_4 = [
    "maso z [ANIMAL_2_MN]",
    "pšenici",
    "rajčata",
    "exotické knedlíky",
    "rýži", 
    "pečivo",
    "pivo",
    "víno",   
];



VOCAB.TARGETLOC_M_2 = [    
    "skalního města",    
    "lesa",
    "mokřadu",
    "vstupu do podzemí"
];

VOCAB.TARGETLOC_F_2 = [    
    "kanalizace",
    "džungle",
    "jeskyně",
    "řeky",
    "jezera",
    "bažiny",
];

VOCAB.TARGETLOC_S_2 = [    
    "podzemí",
    "jezera",
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

VOCAB.BIOME_6_E = [    
    "skále"
];

VOCAB.BIOME_ATYP = [    
    "na ostrově",
    "na poušti",
    "u jezera [CITY_NAME_GRAMMAR|]",
    "u řeky [CITY_NAME_GRAMMAR|]"
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

VOCAB.INSTRUMENT_M_2 = [
    "bubnu",
    "trombónu",
    "klarinetu",
    "rohu",

];

VOCAB.INSTRUMENT_F_2 = [
    "harfy",
    "loutny",
    "kytary",
    "trumpety",
    "píšťaly",
    "banja",
    "basy",
    "rumba koule",
];

VOCAB.INSTRUMENT_F_4 = [
    "harfu",
    "loutnu",
    "píšťalu",
    "banjo",
    "rumba kouli",
]

VOCAB.ITEM_F_2 = [
    "nádoby",
    "schránky",
    "truhlice",
    "sošky",
    "[INSTRUMENT_F_2]"
]

VOCAB.ITEM_M_2 = [
    "koberce",
    "šperku",
    "svícnu",
    "amuletu",
    "hrnce",
    "kotle",
]

VOCAB.ITEM_F_4 = [
    "nádobu",
    "schránku",
    "truhlici",
    "sošku",
    "[INSTRUMENT_F_4]"
]

VOCAB.ITEM_M_4 = [
    "náhrobek",
    "koberec",
    "šperk",
    "svícen",
    "amulet",
    "hrnec",
    "kotel",
]

VOCAB.ITEM_S_4 = [

]

VOCAB.ACTIVITY=[
    "čůrání",
    "jezení [FOOD_2]",
    "pití [DRINK_2]",
    "házení [WEAPON_7]",
    "rozbíjení [FURNITURE_MN_2]",
    "sekání polínek",
    "vaření",
    "běhání",
    "zpívání",
    "hraní na [INSTRUMENT_F_4]",
    "skákání",
    "jezdění na [BIG_ANIMAL_6]",
    "okrádání [PROFESSION_MN_2]",
    "svádění [PROFESSION_MN_2]",
    "vaření [FOOD_2]",
]

VOCAB.FURNITURE_MN_2 = [
    "židlí",
    "klavírů",
    "barových židliček",
    "stolů",
    "postelí",
    "skříní",
    "šatních skříní",
]

VOCAB.FURNITURE_M_4 = [
    "stůl",
    "bar",
    "klavír"
]

VOCAB.FURNITURE_F_4 = [
    "židli",
    "barovou židličku",
    "stoličku",
    "pohovku",
    "postel",
    "vzácnou vázu dynastie [GODNAME_P1|GODNAME_P2]"
]

VOCAB.FURNITURE_S_4 = [
    "piano",
    "mistrně vyřezávané křeslo",
    "staré křeslo",    
]

VOCAB.DISASTER_3 = [
    "přemnožení [ANIMAL_2_MN]",
    "válce s [TARGET_ENEMY_7]",
    "epidemii [ANIMAL_ADJ]ho moru",
    "požáru",
    "nečekanému útoku [ENEMY_2_MN]",
    "probuzení tisíc let mrtvých [PROFESSION_MN_2]"
];

VOCAB.TARGET_ENEMY_7 = [
    "s [RACE_JR]mi lidmi",
    "s bohem [GOD_ASPECT_2|ANIMAL_2_MN]",
    "s uctívači boha [GOD_ASPECT_2|ANIMAL_2_MN]",
    "s královstvím [CITY_NAME_GRAMMAR]",
];

VOCAB.ENEMY_2_MN=[
    "nemrtvých",
    "nemrtvých [ANIMAL_2_MN]"
]

VOCAB.EVENT = [
    "předávání státních vyznamenání",
    "závody [ANIMAL_2_MN]",
    "turnaj v [ACTIVITY]"
]

VOCAB.BODY_PART_7 = [
    "hlavou",
    "nohou",
    "rukou",
    "zadkem",
    "kolenem",
    "loktem",
    "zády",
    "břichem",
    "pěstí",
];

VOCAB.ANIMAL_BODY_PART_MN_7 = [
    "hlavami",
    "nohami",
    "pařáty",
    "zadky",
    "kožkami",
    "očima",
    "ocasy",
];

VOCAB.ARTEFACT_4 = [
    "[ITEM_M_4] [ABSTRACT_2]",
    "[METAL_ML][_F_4] [ITEM_F_4] [ABSTRACT_2]",
    "[METAL_ML]ý [ITEM_M_4] [ABSTRACT_2]"
   // "[ADJ:METAL:_S_4][ITEM_S_4] [ABSTRACT_2]",

]