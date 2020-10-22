VOCAB.HEAD = [
    "[ANIMAL|MINERAL] mask",
    "ceremonial headress",
    "ornamental headress",
    "glasses",
    "crown",
    "archaic helmet",
    "[MINERAL] jewelry",
    "[CONDITION] jewelry",
    "[MINERAL] necklace",
    "amulet", 
    "fedora",   
];

VOCAB.ORIGIN = [
    "tribal",
];

VOCAB.ANIMALISTIC_FEATURE = [
    "wings",
    "faery wings",
    "demonic wings",
    "insect wings",
    "angel wings",
    "[LENGTH|BODY_PART_FEATURE] [BODY_PART]",
    "[LENGTH|BODY_PART_FEATURE] protubarances on [BODY_PART]",
    "thorns on the [BODY_PART]",
    "tentacles on the [BODY_PART]",
    "spikes on the [BODY_PART]",
    "sting",
    "twisted horns",
    "twisted tusks",
    "scales",
    "[COLOR] stripes",
    "[COLOR] spots",
    "[COLOR] on [BODY_PART]",
    "[COLOR] [BODY_PART]",
    "fur on [BODY_PART]",
    "no eyes",
    "[NUMBER] eyes",
    "two tails",
    "one eye",
    "six legs",
    "[NUMBER] heads",
    "trunk",
    "long mane",
    "thick fur",
    "camouflage coloring",
    "loab on throat",
    "[COLOR] on throat",
    "[COLOR] around the neck",
    "flat head",
    "shell",
    "protective exoskeleton",
    "thorns over the whole body",
    "membrane for gliding",
    "membrane between toes",
    "tuft on head",
    "blisters over the whole body"
];

VOCAB.FEATURE = [
    "[ORIGIN|ANIMAL] tattoo",
    "external power source",    
    "angel wings",
    "gills",
    "demon wings",
    "tail",
    "claws",
    "shaved head",
    "mohawk",
    "war paint",
    "extreme beard",
    "braid",
    "long hair",
    "[ANIMAL] companion",
    "scars",
    "scales",
    "tentacles",
    "medusa hair",
    "horns",
    "fairy wings",
    "fangs",
    "extreme teeth",
    "feathers",
    "internal power source",
    "dreadlocks",
    "piercings",
    "spines",
    "bandages",
    "demonic companion",
    "antlers",
    "thorns",
    "parasitic infection",
    "satyr legs",
    "backpack",
    "medal",      

];

VOCAB.BODY = [
    "armor",
    "leather armor",
    "leather jacket",
    "dress",
    "top hat",
    "monk robe",
    "robe",
    "corset",    
    "[MINERAL] armor",
    "cape",    
    "chains",
    "swashbuckler's boots",
    "fur",
    "hood",
    "magic shoes",
    "peasant's rags"  

];

VOCAB.ANIMAL_BODY_PART = [
    "[ANIMAL] [BODY_PART]",
];

VOCAB.BODY_PART = [
    "legs",
    "head",
    "eyes",
    "eye",
    "ears",
    "neck",
    "tail",
    "fangs",
    "claws",
    "tusks",
    "horns",
    "back",
    "spine",
    "feelers",
    "pincers",
    "snout",
    "jaw",
    "tentacles"
]

VOCAB.TOOL_VERB = [
 
];

VOCAB.TOOL = [
    "journal",
    "book",
    "book of [ABSTRACT]",
    "wrench", 
    "keys", 
    "scroll",
    "parasol", 
    "cauldron",
    "herbs",
    "flowers",
    "hunting horn",
    "mirror",
    "flag",
    "banner",
    "beverage",
    "elixir",
    "[ANIMAL|] statuette",
    "saw",
    "enchanted fruit",
    "enchanted [FOOD]"

];

VOCAB.INSTRUMENT = [
    "flute",
    "guitar", 
];

VOCAB.THROWABLE_WEAPON = [
    "axe",    
    "sword",
    "hammer",
    "morning star", 
    "ceremonial knife",
    "knife",
    
];
VOCAB.BLUNT_WEAPON = [
    "staff",
    "wand",
    "sceptre",
];

VOCAB.SHARP_WEAPON = [
    "longsword",
    "poleaxe",
    "two swords",
    "dual bladed sword",
];

VOCAB.SHOOTING_WEAPON = [
    "crossbow",
    "bow",
    "dart blower",
    "throwing knives",
    "sling shot",
    "pistol"
];

VOCAB.SPECIAL_WEAPON = [
    "magical gauntlets",
    "whip",                
    "shield",            
    "spellcasting hands",
    "spear",
    "spellbook",
    "grimoire",
]

VOCAB.WEAPON = [
    "[THROWABLE_WEAPON|BLUNT_WEAPON|SHARP_WEAPON|SHOOTING_WEAPON|SPECIAL_WEAPON]"
];

VOCAB.SKILL = [
    "log sawing",
    "[SHARP_WEAPON|BLUNT_WEAPON|THROWABLE_WEAPON] fighting",
    "wrestling",
    "climbing",
    "horse riding",
    "sneaking",
    "stealing",
    "running",
    "parkour",
    "[THROWABLE_WEAPON] throwing",
]