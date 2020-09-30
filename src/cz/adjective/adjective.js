VOCAB.POWER_ML = [
    "mocn",
    "prastar",
    "nekontrolovateln",
    "vychytral",
    "hrůzostrašn",
    "nebezpečn",
    "vznešen",
    "zuřiv",
    "hlučn",
    "svůdn",
    "podl",

]
VOCAB.TRAIT_ML = [
    "nudn",
    "strašideln",
    "podezřel",
    "vesel",        
    "optimistick",
    "charismatick",
    "vyrovnan",
    "žárliv",    
    "osaměl",    
    "důvěřiv",
    "nedůvěřiv",    
    "bezmocn",
    "smutn",
    "zmaten",
    "zavržen",
    "vyhnan",
    "opuštěn",
    "vystrašen",
    "směšn",
    "ustaran",
    "nevinn",
    "hloup",
    "odvážn",
    "nedbal",    
    "chud",
    "bohat",
    "zručn",
    "nešikovn",
    "věčně opil",
    "závisl",
    "trapn",
    "[POWER_ML]"
    
];

VOCAB.CELESTIAL_ML = [
    "hvězdn",
    "vesmírn",
    "meteoritov",
]

VOCAB.CELESTIAL_JR = [
    "měsíční",
    "sluneční",
]


VOCAB.TRAIT_JR = [
    "legrační",
   // "majestátní",    
    "agresivní",
    "depresivní",
    "tolerantní",
    "létající",
];

VOCAB.APPEARENCE_B_ML= [
    "popsaný neznámým písmem"
]

VOCAB.APPEARENCE_ML = [
    "oškliv",
    "nechutn",    
    "začarovan",
    "[SIZE_ML]"
];
VOCAB.APPEARENCE_JR = [
    "[SIZE_JR]"
];

VOCAB.APPEARENCE_CHAR_ML = [
    "oškliv",
    "přitažliv",
    "křehk",
    "nechutn",
    "nahat",
    "zjizven",
    "potetovan",
    "tlust",
    "štíhl",
    "mlad", 
    "vyhubl",
    "špinav", 
    "krásn",  
    "[SIZE_ML]"
];
VOCAB.APPEARENCE_CHAR_JR = [
    "[SIZE_JR]",
    "bioluminiscentní",
    "atraktivní"
];

VOCAB.RACE_ML = [
    "nemrtv",
    "plísňov",
    "stromov",    
    "démonick",
    "obojživeln",
    "pekeln"
];

VOCAB.RACE_JR = [    
    "pouštní",
    "[ANIMAL_ADJ]",
    "elementální",
    "upíří",
    "vodní",
    "elfí"
];

VOCAB.ANIMAL_ADJ=[
    "kočičí",
    "medvědí",
    "ještěří",
    "dračí",
    "soví",
    "krabí",
    "vlčí"
]



VOCAB.MATERIAL_ML = [
    "dřevěnn",     
    "kamenn",
    "železn",
    "ocelov",
    "kostěnn",
    "skleněnn",
    "ledov",
    "[METAL_ML]",
];

//VOCAB.MATERIAL_JR = [];

VOCAB.METAL_ML = [
    "zlat",
    "stříbrn",
    "bronzov",
    "platinov",
    "železn",   
];
//VOCAB.METAL_JR = [];

//VOCAB.GEM_JR = [];
VOCAB.GEM_ML = [
    "emeraldov",
    "rubínov",
    "ametystov",
    "diamantov",
    "topazov" 
];


//VOCAB.MINERAL_JR = [];

//mlady
VOCAB._F= ["á"];
VOCAB._F_2= ["é"];
VOCAB._F_3= ["é"];
VOCAB._F_4= ["ou"];
VOCAB._F_6= ["é"];
VOCAB._F_7= ["ou"];

VOCAB._S= ["é"];
VOCAB._S_2= ["ého"];
VOCAB._S_3= ["ému"];
VOCAB._S_4= ["é"];
VOCAB._S_6= ["ém"];
VOCAB._S_7= ["ým"];

VOCAB._M= ["ý"];
VOCAB._M_2= ["ého"];
VOCAB._M_3= ["ému"];
VOCAB._M_4= ["ého"]; // živonost D: mladého kraba vs mladý špark
VOCAB._M_6= ["ém"];
VOCAB._M_7= ["ým"];
//jarni
VOCAB._JAR_F_7= [""];

VOCAB._JAR_S_2= ["ho"];
VOCAB._JAR_S_3= ["mu"];
VOCAB._JAR_S_6= ["m"];
VOCAB._JAR_S_7= ["m"];

VOCAB._JAR_M_2= ["ho"];
VOCAB._JAR_M_3= ["mu"];
VOCAB._JAR_M_4= ["ho"];
VOCAB._JAR_M_6= ["m"];
VOCAB._JAR_M_7= ["m"];


VOCAB._MN= [ "ých"];
VOCAB._MN_4= ["é"];

/**
 * $1 = vocab name (adjectives)
 * $2 = vocab name _M,_F,_S
 */
VOCAB.ADJ = [
    "[$1$_JR][_JAR$2$]",
    "[$1$_ML][$2$]",
    "[$1$_ML][$2$]",
    "[$1$_ML][$2$]",
]

VOCAB.SIZE_JR = [
    "miniaturní",
    "monstrózní",
    "majestátní"
];

VOCAB.SIZE_ML = [
        "velk",
        "mal",
        "vysok",
        "nízk",
        "úzk",
        "širok",
    ]

VOCAB.CONDITION_JR = [
    "nóbl",
    "luxusní",
];

VOCAB.CONDITION_ML = [
    "uboh",
    //"spiky",
    "opuštěn",    
    "křehk",
    //"arcane",
    "prastar",   
    "star",
    "proklet",
    "zasvěcen",
    "svat",
    "zničen",          
    "zmrzl",       
    "znesvěcen",
    "slavn",
    "zarostl",    
];

VOCAB.PROPERTY_ML = [
    "magick",
];
VOCAB.PROPERTY_JR = [
    ""
];

VOCAB.LOCATION = [
    "underground",  
    "forest",
]

VOCAB.ORIGIN_ML = [
    'neznám',
    'podivn',
    'mimozemsk',
    'vesmírn',
    'seversk',    
    "horsk",    
]

VOCAB.ORIGIN_JR = [
    "cizí",
    'západní',
    "východní",
    "jižní",
    "jezerní",
    "lesní",
    "pouštní",
    "původní",
]

VOCAB.PURPOSE = [
    "botanical",
];
