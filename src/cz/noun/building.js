VOCAB.PERSON = [
    "[TRAIT|] [PROFESSION]"
];

VOCAB.PUB_NAME = [
    "<span class='brown name'>[PUB_NAME_PART]</span>"
];

VOCAB.PUB_NAME_PART = [
    "U [ITEM_CONDITION_ML][_M_2] [INSTRUMENT_M_2|ITEM_M_2]",
    "U [ITEM_CONDITION_ML][_F_2] [INSTRUMENT_F_2|ITEM_F_2]",
    "U [ADJ_ACTIV_JR]ho [INSTRUMENT_M_2]",
    "U [ADJ_ACTIV_JR] [INSTRUMENT_F_2]",
    "[COLOR][_F] [FLOWER_F]",
    "[COLOR][_M] [FLOWER_M]",
    "[COLOR|MATERIAL_ML][_S] [FRUIT_S]",
    "[COLOR|MATERIAL_ML][_M] [FRUIT_M]",
    "[COLOR|MATERIAL_ML][_F] [FRUIT_F]",
    "U [COLOR|METAL_ML][_S_2] slunce",
    "U [COLOR|METAL_ML][_F_2] hvězdy",
    "U [COLOR|METAL_ML][_M_2] měsíce",
    "U [ADJ:TRAIT:_M_2] [HUMANOID_M_2|ANIMAL_M_2|CREATURE_M_2]",
    "U [ADJ:TRAIT:_F_2] [HUMANOID_F_2|ANIMAL_F_2|CREATURE_F_2]",
    "U [ADJ_ACTIV_JR] [HUMANOID_F_2|ANIMAL_F_2|CREATURE_F_2]",
    "U [ADJ_ACTIV_JR]ho [HUMANOID_M_2|ANIMAL_M_2|CREATURE_M_2]",
];

VOCAB.SHIP_NAME = [
    "zhouba [ANIMAL_2_MN|HUMANOID_MN_2|CREATURE_MN_2]",
    "[COLOR|METAL_ML][_S] slunce",
    "[COLOR|METAL_ML][_F] hvězda",
    "[COLOR|METAL_ML][_M] měsíc",
    "[COLOR][_F] [FLOWER_F]",
    "[COLOR][_M] [FLOWER_M]",
    "[COLOR|METAL_ML][_M] vítr",
    "[COLOR|METAL_ML][_F] bouře",
    "[ANIMAL_ADJ] hostina",
    "[ANIMAL_ADJ] pomsta",
    "[ANIMAL_ADJ] zhouba",
    "[NAMES_F]",
    "mořský [ANIMAL_M]",
    "mořská [ANIMAL_F]",
    "[ADJ:TRAIT:_M] [ANIMAL_M]",
    "[ADJ:TRAIT:_F] [ANIMAL_F]"
]

VOCAB.LEGENDARY_BUILDING = [
    "vstup do tunelů vyhloubených obřím červem",
    "dračí jeskyně",
    "laboratoř s děsivými experimenty",
];

VOCAB.LEGENDARY_LOCATION = [
    "ve starostově paláci",
    "v čarodějné věži",
    "v místní katedrále",
    "pod místním hřbitovem",
    "pod ruinami za městem",
    "v přístavu pod hladinou moře",
];

VOCAB.BUILDING_M = [
    "kostel [SWARMING:_M|HOUSING:_M]",
    "dům [SWARMING:_M|HOUSING:_M|BUILDING_DECOR:_M]",
    "[METAL_ML][_M] důl",
    "přístav [SWARMING:_M]",
    "hostinec [PUB_NAME]",
    "přístav [SWARMING:_M]",
    "nevěstinec [SWARMING:_M|HOUSING:_M]",
    "nevěstinec [BROTHEL_FEATURE]",
    "obchod s [FOOD_7|ANIMAL_7_MN]",
    "obchod s [ANIMAL_ADJ]mi [ANIMAL_BODY_PART_MN_7]",
    "obchod s [FOOD_7] [SWARMING:_M]",
    "obchod prodávající [WEIRD_STUFF]",
    "dům [PROFESSION_M_2|PROFESSION_F_2]",
    "dům [ADJ:TRAIT:_F_2] [PROFESSION_F_2|PROFESSION_M_2]",
    "menhir z meteorovitého kamene popsaný [ADJ:ORIGIN:_S_7] písmem",
    "menhir z [ADJ:CELESTIAL:_M_2]  kamene popsaný [ADJ:ORIGIN:_S_7] písmem",
    "menhir z [ADJ:CELESTIAL:_M_2]  kamene postavený [RACE_JR|ORIGIN_JR]mi lidmi",
    "menhir z [ADJ:CELESTIAL:_M_2] kamene postavený [RACE_JR]mi lidmi",
];

VOCAB.BROTHEL_FEATURE = [
    "s exotickým představením",
    "s exotickým personálem",
    "pro [HUMANOID_MN_4|PROFESSION_MN_4]",
    "bohatou klientelu",
    "s dlouhou historií",
    "ovládaný kultem boha [*GODNAME]"
]

VOCAB.BUILDING_F = [
    "[MATERIAL_ML][_F] brána [BUILDING_DECOR:_F]",
    "[MATERIAL_ML][_F] brána [BUILDING_DECOR:_F]",
    "dílna [SWARMING:_F|HOUSING:_F]",
    "věž [SWARMING:_F|HOUSING:_F]",
    "svatyně [SWARMING:_F|HOUSING:_F|BUILDING_DECOR:_F] zasvěcená bohu [*GODNAME]",
    "fontána [BUILDING_DECOR:_F]",
    "hospoda [*PUB_NAME]",
    "[MATERIAL_ML|METAL_ML][_F] socha [ANIMAL_2]",
    "továrna [SWARMING:_F|HOUSING:_F]",
    "pevnost [SWARMING:_F|HOUSING:_F]",
    "[METAL_ML][_F] socha [ANIMAL_F_2|ANIMAL_M_2|ANIMAL_S_2]",
];

VOCAB.BUILDING_DECOR = [
    "s [ANIMAL_ADJ] sochou",
    "s [ANIMAL_ADJ]mi sochami",
    "lemovan[$1$] [ANIMAL_ADJ]mi sochami",
    "se zlatým pruhem",
    "popsan[$1$] prastarým písmem",
    "popsan[$1$] [ADJ:ORIGIN:_S_7] písmem",
    "s vytesanou [ANIMAL_ADJ] hlavou",
]

VOCAB.BUILDING_F_4 = [
    "[MATERIAL_ML][_F_2] bránu",
    "dílna",
    "věže",
    "svatyně",
    "fontány",
    "továrny",
    "pevnosti",
    "[METAL_ML][_F] socha [ANIMAL_F_2|ANIMAL_M_2|ANIMAL_S_2]",
];


VOCAB.BUILDING_F_7 = [
    "[MATERIAL_ML][_F] bránou",
    "dílnou",
    "věží [SWARMING:_F_7|HOUSING:_F_7]",
    "svatyní [SWARMING:_F_7|HOUSING:_F_7]",
    "fontánou",
    "továrnou [SWARMING:_F_7|HOUSING:_F_7]",
    "pevností [SWARMING:_F_7|HOUSING:_F_7]",
];


VOCAB.SWARMING = [
    "zamořen[$1$] [ANIMAL_7_MN]",
];

VOCAB.HOUSING = [
    "obývan[$1$] [PROFESSION_MN_7]",
];


VOCAB.BUILDING_M_4 = [
    "kostela",
    "domu",
    "[METAL_ML][_M] dolu",
    "přístavu",
    "nevěstince",
    "obchod s [FOOD_7]",
    "domu [PROFESSION_M_2|PROFESSION_F_2]",
    "domu [ADJ:TRAIT:_F_2] [PROFESSION_F_2|PROFESSION_M_2|]",
    "menhiru z meteorovitého kamene popsaný [ADJ:ORIGIN:_S_7] písmem",
    "menhiru z [ADJ:ELEMENT:_M_2] kamene popsaný [ADJ:ORIGIN:_S_7] písmem",
    "menhiru z [ADJ:ELEMENT:_M_2] kamene postavený [RACE_JR|ORIGIN_JR]mi lidmi",
    "menhiru z [ADJ:ELEMENT:_M_2] kamene postavený [RACE_JR]mi lidmi",
];

//The Primeval Rock: A strange glyphed meteorite from which ruled a terrible race of shapeshifting savages.

VOCAB.BUILDING_7 = [
    "[BUILDING_M_7|BUILDING_F_7|BUILDING_S_7]"
]

VOCAB.BUILDING_M_7 = [
    "kostelem",
    "domem",
    "přístavem",
    "obchodem s [FOOD_7]",
    "domem [PROFESSION_2]",
    "domem [ADJ:TRAIT:_F_2] [PROFESSION_F_2]"
];

VOCAB.BUILDING_S = [
    "lázně pro [PROFESSION_MN_4]",
    "tržiště, kde prodávají [STORED_STUFF]",
    "divadlo"
];

VOCAB.BUILDING_2 = [
    "brány",
    "lázní",
    "nemocnice",
    "kostelu",
    "katedrály",
    "radnice",
    "domu",
    "[METAL_ML][_M] dolu",
    "přístavu",
    "nevěstince",
    "obchodu s [FOOD_7]",
    "věže",
    "svatyně",
    "továrny",
    "pevnosti",
]

VOCAB.STRUCTURE_2 = [
    "parku",
    "mostu",
    "fontány",
    "tržiště",
    "[METAL_ML|MATERIAL_ML]é sochy [ANIMAL_F_2|ANIMAL_M_2|ANIMAL_S_2]"
]

VOCAB.BUILDING_S_7 = [
    "lázněmi",
    "tržištěm",    
];

VOCAB.BUILDING = [
    "gate",
    "gate made of [MATERIAL]",
    "church of [FAITH_GRAMMAR]",
    "[SUBJECT|MINERAL] market",
    "house",
    "home of a [TRAIT|] [PROFESSION]",
    "home of a [PROFESSION]",
    "house of [PROFESSION] killer",
    "[PROFESSION|SUBJECT|ANIMAL|] tower",
    "port",
    "[ANIMAL|SUBJECT] shop",
    "workshop",    
    "station",   
    "shrine",
    "fountain",
    "university of [ABSTRACT|MAGIC]",
    "[PROFESSION]'s laboratory",
    "[MINERAL] mine",
    "spa",
    "baths",
    "factory",
    "fortress",
    "monument of [ANIMAL|SUBJECT|ABSTRACT|]",
    "[ANIMAL|] farm",
    "[FOOD|SUBJECT|] storage",
    "guild house", 
    "crypt",
    "wreck",
    "temple",
    "cathedral",    
    "castle",    
    "statue of a [SUBJECT|PERSON|ABSTRACT]",
    "lighthouse",
    "pub",
    "hotel",
    "library",
    "brothel", 
    "distillery",   
    "interdimensional portal", 
];

/*
fantastic locations
The Ziggurats of the Doom Priests: An ancient set of temples where, for centuries, the doom priests sacrificed the populace to their dark gods.

The Dungeon of Fire: A chained prison in the center of a volcano where the worst powers of the multiverse are kept.

The Dam of Kings: A huge dwarven dam with uncovered chambers filled with machines of war.

Stormwatch Tower: A watchtower built around an airship embedded in the side of the mountain.

Castle of the Mad King: The twisted castle of a dark lineage of nobles who devoured their subjects both figuratively and literally.

The Dark Abbey: A ruin of eternal dark worship atop an unhallowed hillside teeming with catacombs.

The Obsidian Enclave: A centuries-old laboratory deep in the caverns below where the darkest magics are practiced.

Earthmote of the Elemental Lords: The ruins of a once-mighty floating embassy of the elemental lords.

The Infernal Machine: A machine that crosses worlds devouring entire civilizations and leaving behind nothing but poisoned ruins.

The Structure in the Ice: A shapeless structure buried under the ice for over a million years recently uncovered by the northern barbarians above.

The Undercity: A city of sin and murder where the only laws are those imposed with a knife.

The Lich's Sanctuary: A chrome orb formed around the sanctuary of an ancient lich once floating deep in the astral plane.

The Fallen Palace of the Celestials: A celestial castle fallen from the heavens during a great war with demonkind now resting atop an inhospitable mountainside.

Pyramid of the Night King: The uncovered tomb of the night king who used the souls of the people to fuel his own dark experiments and build his own twisted legacy.

The Red Keep: A dwarven mining city that uncovered an aeons-old tomb to a dead god whose soul yearns for escape.

The Forgotten Library: A centuries-old library atop a rocky hill filled with vast chambers and forbidden knowledge.

The Theatre of the Mind: A great theater where the illusions of storytelling bleed into reality itself.

The Blighted Evertree: The once-mighty tree of life now corrupted by the nethermancer and his call to another world.
*/