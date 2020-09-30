
/**
 * $2 = vocab name _M,_F,_S
 */
VOCAB.VERB_PAST = [
    "se opil[$1$] [VERB_DRUNK:$1$]",
];

VOCAB._VM = [""];
VOCAB._VF = ["a"];
VOCAB._VS = ["o"];

VOCAB.VERB = [
    //adjusted probabilities
    "[VERB_ACTION]",
    "[VERB_ACTION]",
    "[VERB_MYSTERY]",
    "[VERB_MYSTERY]",
    "[VERB_REST]",
    "[VERB_ROMANCE]",
];

VOCAB.VERB_ACTION = [
    //action
    "přináší [ADJ:TRAIT:_F_4] zprávu o [BIOME_6]",
    "pospíchá",
    "se připravuje na válku s [RACE_JR]mi lidmi",
    "se připravuje na válku s bohem [GOD_ASPECT_2|ANIMAL_2_MN]",
    "se připravuje na válku s uctívači boha [GOD_ASPECT_2|ANIMAL_2_MN]",
    "se připravuje na válku s královstvím [CITY_NAME_GRAMMAR]",
    "zápasí s [ADJ:TRAIT:_F_7] [ANIMAL_F_7|CREATURE_F_7]",
    "zápasí s [ADJ:TRAIT:_M_7] [ANIMAL_M_7|CREATURE_M_7]",
    "zápasí s [ADJ:TRAIT:_S_7] [ANIMAL_S_7]",
    "se chystá přepadnout karavanu",
    "zabíjí [ANIMAL_4_MN] v [BIOME_6]",
    "odhalí tajemství [ANIMAL_2_MN]",
    "provádí rituál",    
    //"steals [SUBJECT]",
    "vyvolává démona",
    "soutěží na turnaji",
    "utíká pryč",
    "pronásleduje [ADJ:APPEARENCE_CHAR:_MN_4] [PROFESSION_MN_4]",
    "vede svoje následovníky do bitvy",
    "řeční na náměstí",
    "prodává zakázané substance", //TODO expand substance
    "zpívá smutnou píseň o [BIOME_6]",
    "zpívá smutnou píseň",
    "a [PROFESSION] spolu tančí za soumraku",
    "připravuje plán na zničení světa",
    
    
];

VOCAB.VERB_MYSTERY = [
    //mystery
    "jde na tajné setkání",
    "odemkl tajemnou skříňku",
    "schovává něco ve své tajné skrýši",
    "se schovává ve stínech",
    "uctívá boha [GOD_ASPECT_2|ANIMAL_2_MN]",
];

VOCAB.VERB_REST = [
    "chytá podivné ryby u řeky",
    "hlídá poklad v [BIOME_6]",
    "přijíždí do města",
    "jde na plavbu lodí",
    "jde přes most",
    "dělá něco pod mostem",
    "si užívá vyhlídku",
    "odpočívá na",
    "navštěvuje svaté místo",
    "se snaží prodat [FOOD_4]",
    "učí žáky svému umění",
    "připravuje [FOOD_4]",
    "pracuje na farmě",
    "se stará o [ANIMAL_4_MN]",
];

VOCAB.VERB_ROMANCE = [
    "si užívá s [ADJ:APPEARENCE_CHAR:_F_7] ženou u [BUILDING_2]",
    "si užívá s [ADJ:APPEARENCE_CHAR:_M_7] mužem u [BUILDING_2]",
    "si užívá s [ADJ:APPEARENCE_CHAR:_F_7] [PROFESSION_F_7] u [BUILDING_2]",
    "si užívá s [ADJ:APPEARENCE_CHAR:_M_7] [PROFESSION_M_7] u [BUILDING_2]",
    "svádí atraktivní ženy u [BUILDING_2]",
    "svádí atraktivní muže u [BUILDING_2]",
    "dělá neslušné nabídky [ADJ:APPEARENCE_CHAR:_F_3] ženě",
    "dělá neslušné nabídky [ADJ:APPEARENCE_CHAR:_M_3] muži",
];

VOCAB.VERB_DRUNK = [
    "do bezvědomí a při pádu přaštil[$1$] [BODY_PART_7] o [FURNITURE_M_4] takovou silou až se rozletěl na kousky",
    "do bezvědomí a při pádu přaštil[$1$] [BODY_PART_7] o [FURNITURE_F_4] takovou silou až se rozletěla na kousky",
    "do bezvědomí a při pádu přaštil[$1$] [BODY_PART_7] o [FURNITURE_F_4] takovou silou až se rozletělo na kousky",
    "a začal[$1$] [VERB_INF]",
    "a kousnul[$1$] se do jazyku. Zakrvácel cel[_F_4] [FURNITURE_F_4] ",
    "a kousnul[$1$] se do jazyku. Zakrvácel celý [FURNITURE_M_4] ",
    "a kousnul[$1$] se do jazyku. Zakrvácel cel[_S_4] [FURNITURE_S_4] ",
    "vyhlásil[$1$] soutěž v [ACTIVITY]",
    "a probudil[$1$] se hodinu za městem v příkopě",
    "a probudil[$1$] se v posteli s [ADJ:TRAIT:_M_7] [ANIMAL_M_7|CREATURE_M_7|HUMANOID_M_7|PROFESSION_M_7]",
    "a probudil[$1$] se v posteli s [ADJ:TRAIT:_F_7] [ANIMAL_F_7|CREATURE_F_7|HUMANOID_F_7|PROFESSION_F_7]",
    "a probudil[$1$] se se zlatou medailí na krku. Zřejmě vyhrál[$1$] soutěž v [ACTIVITY]",
    "a zahájil[$1$] zvířecí revoluci osvobozením [ANIMAL_2_MN] z nedaleké farmy.",
    "a začal nekontrolovatelně brečet, protože [ANIMAL_MN] museli umřít, aby on[$1$] mohl jíst steak.",
    "a běhal[$1$] nahatý po městě",
]

VOCAB.VERB_INF = [
    "flirtovat s [ADJ:TRAIT:_M_7] [ANIMAL_M_7|HUMANOID_M_7|PROFESSION_M_7]",
    "flirtovat s [ADJ:TRAIT:_F_7] [ANIMAL_F_7|HUMANOID_F_7|PROFESSION_F_7]",
    "vyprávět [ADJ:TRAIT:_MN_4] příhody z jeho dětství.",
    "vyprávět trapnou příhodu s [ANIMAL_M_7|HUMANOID_M_7|PROFESSION_M_7] a [ANIMAL_M_7|HUMANOID_M_7|PROFESSION_M_7]",
    "zpívat národní hymnu",
]