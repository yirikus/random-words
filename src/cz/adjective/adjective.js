VOCAB.TRAIT_ML = [
    "nudn",
    "strašideln",
    "podezřel",
    "vesel",
    "vznešen",
    "nebezpečn",
    "svůdn",
    "optimistick",
    "charismatick",
    "mocn",
    "vyrovnan",
    "žárliv",    
    "osaměl",
    "hrůzostrašn",
    "důvěřiv",
    "nedůvěřiv",
    "nekontrolovateln",
    "bezmocn",
    "smutn",
    "zmaten",
    "zavržen",
    "vyhnan",
    "opuštěn",
    "vystrašen",
    "směšn",
    "ustaran",
    "nevin",
    "hloup",
    "odvážn",
    "nedbal",
    "vychytral",
    "zuřiv",
    "hlučn",
    "chud",
    "bohat",
    "zručn",
    "nešikovn",
    "věčně opil",
    "závislý"
    
];

VOCAB.TRAIT_JR = [
    "legrační",
    "majestání",    
    "agresivní",
    "depresivní",
    "tolerantní",
];

VOCAB.APPEARENCE_ML = [
    "oškliv",
    "nechutn",
    "křehk",    
    "<SIZE_ML>"
];
VOCAB.APPEARENCE_JR = [
    "<SIZE_JR>"
];

VOCAB.APPEARENCE_CHAR_ML = [
    "oškliv",
    "křehk",
    "nechutn",
    "zjizven",
    "potetovan",
    "tlust",
    "štíhl",
    "mlad",    
    "<SIZE_ML>"
];
VOCAB.APPEARENCE_CHAR_JR = [
    "<SIZE_JR>",
    "bioluminiscentní"
];

VOCAB.RACE_ML = [
    "nemrtv",
    "plísňov",
    "kostěn",
    "stromov",
    "kamenn",
    "démonick",
    "obojživeln",
    "pekeln"
];

VOCAB.RACE_JR = [
    "ještěří",
    "dračí",
    "pouštní",
    "kočičí",
    "elementální",
    //"<ELEMENT> elemental",
    "upíří",
    "vodní",
    "elfí"
];



VOCAB.MATERIAL_ML = [
    "dřevěnn",     
    "kamenn",
    "železn",
    "ocelov",
    "kostěnn",
    "skleněnn",
    "ledov",
    "<METAL_ML>",   
];

VOCAB.MATERIAL_JR = [];

VOCAB.METAL_ML = [
    "zlat",
    "stříbrn",
    "platinov",
    "železn",   
];
VOCAB.METAL_JR = [];

VOCAB.GEM_JR = [];
VOCAB.GEM_ML = [
    "emeraldov",
    "rubínov",
    "ametystov",
    "diamantov",
    "topazov" 
];


VOCAB.MINERAL_JR = [

];

VOCAB._F= ["á"];
VOCAB._F2= ["é"];
VOCAB._F3= ["é"];
VOCAB._F4= ["ou"];
VOCAB._F6= ["é"];
VOCAB._F7= ["ým"];


VOCAB._S= ["é"];
VOCAB._S2= ["ého"];
VOCAB._S3= ["ému"];
VOCAB._S4= ["é"];
VOCAB._S6= ["ém"];
VOCAB._S7= ["ým"];

VOCAB._M= ["ý"];
VOCAB._M2= ["ého"];
VOCAB._M3= ["ému"];
VOCAB._M4= ["ého"];
VOCAB._M6= ["ém"];
VOCAB._M7= ["ým"];


VOCAB._MN= [
    "ých"  
]

VOCAB._MN= [
    "ých"  
]

/**
 * $1 = vocab name (adjectives)
 * $2 = vocab name _M,_F,_S
 */
VOCAB.ADJ = [
    "<$1$_JR>",
    "<$1$_ML><$2$>",
]

VOCAB.SIZE_JR = [
         
];
VOCAB.SIZE_ML = [
        "velk",
        "mal",
        "vysok",
        "krátk",
        "průměrn",
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
    "magick",
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

VOCAB.LOCATION = [
    "underground",  
    "forest",
]

VOCAB.PURPOSE = [
    "botanical",
];
