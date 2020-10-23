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

VOCAB.FLOWER_F= [
    "růže",
    "lilie",
    "slunečnice",
    "sedmikráska",
    "kopretina",
    "levandule"
]

VOCAB.FLOWER_M= [
    "karafiát",
    "tulipán",
    "narcis",
    "jetel",
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
    "osudu",
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
    "exoticкými knedlíky",
    "exotickým ovocem",
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

VOCAB.LOCATION_2 = [
    "[TARGETLOC_M_2|TARGETLOC_S_2|TARGETLOC_F_2]"
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

VOCAB.ITEM_M_4 = ["[ITEM_M]"];
VOCAB.ITEM_M = [
    "deník [PROFESSION_M_2|PROFESSION_F_2]",
    "[METAL_ML][_M] klíč",
    "kotel [ABSTRACT_2]",
    "elixír [ABSTRACT_2]",
    "náhrobek",
    "koberec",
    "svitek",
    "[METAL_ML][_M] šperk",
    "[METAL_ML][_M] svícen",
    "[METAL_ML][_M] prsten [ABSTRACT_2|ELEMENT_2]",
    "[METAL_ML][_M] amulet [ABSTRACT_2]",
    "[METAL_ML][_M] hrnec",
    "[METAL_ML][_M] kotel",
];

VOCAB.ITEM_F_4=[
    "knihu [ABSTRACT_2]",
    "nádobu [ABSTRACT_2]",
    "[METAL_ML][_F_4] schránku",
    "mapu",
    "[METAL_ML][_F_4] truhlici",
    "[ANIMAL_ADJ] sošku",
    "[INSTRUMENT_F_4]"
]

VOCAB.ITEM_S_4 = ["[ITEM_S]"];

VOCAB.ITEM_S=[
    "[METAL_ML][_S] zrcadlo",
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
    "[RACE_JR]mi lidmi",
    "bohem [GOD_ASPECT_2|ANIMAL_2_MN]",
    "uctívači boha [GOD_ASPECT_2|ANIMAL_2_MN]",
    "královstvím [CITY_NAME_GRAMMAR]",
];

VOCAB.ENEMY_2_MN=[
    "nemrtvých",
    "nemrtvých [ANIMAL_2_MN]"
]

VOCAB.SHIP_CONTENTS=[
    "s nákladem exotického ovoce",
    "vezoucí mrtvé z boje s [TARGET_ENEMY_7]",
]

VOCAB.FRUIT_S = [
    "zelí",
    "pomelo",
    "jablko",
    "konopí",
    "liči",
];

VOCAB.FRUIT_M = [
    "meloun",
    "banán",
    "kedluben",
    "okurek",
    "chřest",
    "křen",
    "zázvor",
    "angrešt",
];

VOCAB.FRUIT_F = [
    "broskev",
    "brambora",
    "hruška",
    "mrkev",
    "kapusta",
    "pomeranč",
    "mandarinka",
    "tykev",
    "kedlubna",
    "dýně",
    "okurka",
    "borůvka",
    "bluma",
];



VOCAB.SECRET_STASH_6 = [
    "v převráceném člunu",
    "ve ztroskotané lodi",
    "v zatopené jeskyni",
    "v zatopeném kanálu",
    "v dutém stromu",
    "v podpalubí [BUILDING_TRAIT][_F_2] lodi",
    "v podpalubí ztroskotan[_F_2] lodi",
    "v kopici slizu",
    "v břiše zahynuté [ANIMAL_F_2|CREATURE_F_2]",
    "v břiše zahynutého [ANIMAL_M_2|CREATURE_M_2]",
];

VOCAB.UNEXPECTED_DISCOVERY = [
    "živého [PROFESSION_M_4|ANIMAL_M_4]",
    "živého [ANIMAL_MUTANT]-[ANIMAL_M_4]",
    "živé [ANIMAL_S]",
    "živé [ANIMAL_MUTANT]-[ANIMAL_S]",
    "[TRAIT_ML][_M_4] [PROFESSION_M_4|ANIMAL_M_4]",
    "živou [ANIMAL_MUTANT]-[ANIMAL_F_4]",
    "živou [PROFESSION_F_4|ANIMAL_F_4] ",
    "[TRAIT_ML][_F_4] [PROFESSION_F_4|ANIMAL_F_4]",
    "[WEIRD_STUFF]"
]

VOCAB.WEIRD_STUFF = [
    "klíče, o kterých nikdo neví k čemu jsou",
    "zrezivělé lžíce",
    "neumyté nádobí",
    "nefunkční čarodějné předměty",
    "magické předměty k ničemu",
    "kapusty, které nikdo nežere",
    "umělecká díla, která nikdo nechce",
    "alchymistické serepetičky",
    "lovecké trofeje",
    "nechutně velké množství peněz",
    "zabavené drogy",
    "návykové substance",
    "exotické knedlíky",
    "exotické ovoce",
    "zbytky od večeře",
    "barely se svěcenou vodou",
    "ukradené předměty",
    "zbraně z dob války",
    "zbytečné medaile",
    "smrduté ryby",
    "voodoo panenky",
    "kořínky podivných vlastností",
    "odpuzovače [ANIMAL_2_MN]",
    "halucinogenní lektvary",
    "lektvary [ABSTRACT_2]",
    "oplzlé sošky",
    "prsteny s očima",
    "prsteny vypadající jako [BODY_PART]",
    "jadeitové sošky [ANIMAL_2_MN]",
    "svíčky ve tvaru [ANIMAL_2_MN]",
    "potřeby pro rituály",
    "potřeby pro vyvolání démónů",
    "sušená netopýří křídla",
    "podivnosti z cicích zemí",
]

VOCAB.STORED_STUFF = [
    "[WEIRD_STUFF]",
    "[WEIRD_STUFF]",
    "[WEIRD_STUFF]",
    "[WEIRD_STUFF]",
    "[WEIRD_STUFF]",
    "[WEIRD_STUFF]",
    "[WEIRD_STUFF]",
    "[WEIRD_STUFF]",
    "[WEIRD_STUFF]",
    "lidé pokousaní [ANIMAL_7_MN]",
    "lidé podvedení falešným [PROFESSION_M_7]",
    "lidé podvedení falešným [PROFESSION_F_7]",
    "otroci",
    "podivně světélkující [ANIMAL_MN]",
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

VOCAB.ARTEFACT_M_4 = [
    "[ARTEFACT_CONDITION]ý [WEAPON_M_4] [ABSTRACT_2]",
    "[ARTEFACT_CONDITION]ý [ITEM_M_4]",

]

VOCAB.ARTEFACT_F_4 = [
    "[ARTEFACT_CONDITION][_F_4] [ITEM_F_4]",
    "[ARTEFACT_CONDITION][_F_4] [WEAPON_F_4] [ABSTRACT_2]",
]

VOCAB.ARTEFACT_S_4 = [
    "[ARTEFACT_CONDITION][_S_4] [WEAPON_S_4] [ABSTRACT_2]",
    "[ARTEFACT_CONDITION][_S_4] [ITEM_S_4]",
]