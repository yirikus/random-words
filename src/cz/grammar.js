var VOCAB = {
 
BUILDING_GRAMMAR : [
    "[BUILDING_PART:_M|BUILDING_PART:_F|BUILDING_PART:_S]",
],

BUILDING_PART : [

    "[ADJ:SIZE:$1$] [ADJ:CONDITION:$1$] [BUILDING$1$]",
    //"[ADJ:CONDITION:$1$] [BUILDING$1$] [BUILDING_STATE_GRAMMAR:$1$]",
    //"[ADJ:SIZE:$1$] [BUILDING$1$] [BUILDING_STATE_GRAMMAR:$1$]",
    // "[SIZE|] [CONDITION] [MATERIAL] [BUILDING]",
    // "[SIZE|] [CONDITION] [AREA]",
    // "[CONDITION] [BUILDING] [BUILDING_STATE_GRAMMAR|]",
],

FAITH_GRAMMAR: [
    "[GODNAME], [ADJ:APPEARENCE_CHAR:_M|ADJ:TRAIT:_M] [ADJ:RACE:_M|] bůh [GOD_ASPECT_2]",
    "[GODNAME], [ADJ:APPEARENCE_CHAR:_M|ADJ:TRAIT:_M] [ADJ:RACE:_M|] pán [GOD_ASPECT_2]",
    "[GODNAME], [ADJ:APPEARENCE_CHAR:_M|ADJ:TRAIT:_M] [ADJ:RACE:_M|] strážce [BIOME_2_MN]",
    "[GODNAME], [ADJ:APPEARENCE_CHAR:_F|ADJ:TRAIT:_F] [ADJ:RACE:_F|] strážkyně [BIOME_2_MN]",
    "[GODNAME], [ADJ:APPEARENCE_CHAR:_M|ADJ:TRAIT:_M] [ADJ:RACE:_M|] ochránce [ANIMAL_2_MN]",
    "[GODNAME], [ADJ:APPEARENCE_CHAR:_F|ADJ:TRAIT:_F] [ADJ:RACE:_F|] bohyně [GOD_ASPECT_2]",
],

CHARACTER_GRAMMAR: [
    "[NAMES_M|NAMES_M2], [ADJ:TRAIT:_M] [ADJ:RACE:_M] [PROFESSION_M]",
    "[NAMES_F], [ADJ:TRAIT:_F] [ADJ:RACE:_F] [PROFESSION_F]",
    "[NAMES_M|NAMES_M2], [ADJ:RACE:_M] [PROFESSION_M] [CLOTHES_6|WEAPON_7]",
    "[NAMES_F], [ADJ:RACE:_F] [PROFESSION_F] [CLOTHES_6|WEAPON_7]",
    "[NAMES_M|NAMES_M2], [ADJ:TRAIT:_M] [PROFESSION_M] [CLOTHES_6|WEAPON_7]",
    "[NAMES_F], [ADJ:TRAIT:_F] [PROFESSION_F] [CLOTHES_6|WEAPON_7]",
    "[NAMES_M|NAMES_M2], [PROFESSION_M] a mistr v [ACTIVITY]",
    "[NAMES_F], [PROFESSION_F] a mystrině v [ACTIVITY]",
    // "[NAMES_1|NAMES_2|NAMES_3], the [TRAIT|TRAIT|RACE|] [PROFESSION] [CLOTHES_GRAMMAR], [WEAPON_GRAMMAR]",
    // "[NAMES_1|NAMES_2|NAMES_3], the [TRAIT|TRAIT|] [RACE] [PROFESSION] [CLOTHES_GRAMMAR]",
    // "[NAMES_1|NAMES_2|NAMES_3], the [TRAIT|TRAIT|] [PROFESSION|ANIMAL] killer",
],

MONSTER_GRAMMAR: [
    "[ADJ:TRAIT:_M] [ADJ:RACE:_M|] [ADJ:MATERIAL:_M] golem [CLOTHES_6|WEAPON_7|]",
    "[ADJ:TRAIT:_F] [ADJ:RACE:_F|] [ANIMAL_F] [FEATURE_7]",
    "[ADJ:TRAIT:_M] [ADJ:RACE:_M|] [ANIMAL_M|HUMANOID_M] [FEATURE_7]"
    // "[TRAIT|CONDITION] [ELEMENT|MATERIAL|FOOD] golem that looks [TRAIT]"
],

CITY_NAME_GRAMMAR: [
    "[CITY_NAME_START][CITY_NAME_MID|][CITY_NAME_END]",
    "[CITY_NAME_START][CITY_NAME_MID|][CITY_NAME_END]",
    "[CITY_NAME_START][CITY_NAME_MID|][CITY_NAME_END]",
],

CITY_DESC_GRAMMAR: [
    ", [COMMUNITY] ve [BIOME_6_E]",
    ", [COMMUNITY] v [BIOME_6]",
    ", [COMMUNITY] u [BIOME_2_MN]",
    ", [COMMUNITY] [BIOME_ATYP]"
],

STORY_GRAMMAR: [        
    "[PROFESSION_M|PROFESSION_F] [VERB]",
    "[STORY_PAST_GRAMAMR]",
],

STORY_PAST_GRAMAMR: [
    "[PROFESSION_M] [VERB_PAST:_VM]",
    "[PROFESSION_F] [VERB_PAST:_VF]",
    "[PROFESSION_S] [VERB_PAST:_VS]"
],

MAIN_STORY_GRAMMAR: [        
    "[PROFESSION_M] [CHARACTER_STORY:_M]",
    "[PROFESSION_F] [CHARACTER_STORY:_F]",
    "Před [BUILDING_M_7|BUILDING_S_7|BUILDING_F_7] byl nalezen [ADJ:TRAIT:_M] [ANIMAL_M|PROFESSION_M].",
    "Před [BUILDING_M_7|BUILDING_S_7|BUILDING_F_7] byla nalezena [ADJ:TRAIT:_F] [ANIMAL_F|PROFESSION_F].",
    "[ADJ:POWER:_M] [CREATURE_M|HUMANOID_M] přetrhl pouta a blíží se k městu.",
    "[ADJ:POWER:_M] [CREATURE_M|HUMANOID_M] hledá [ARTEFACT_4], ukrytý někde ve městě.",
    "[ADJ:POWER:_M] [CREATURE_M|HUMANOID_M] hledá [ARTEFACT_4], ukrytý někde v [BIOME_6]."
    //"[PROFESSION_M] [VERBS:VERB_PAST:_M]",
    //"[PROFESSION_F] [VERBS:VERB_PAST:_F]"
],

CHARACTER_STORY: [
    "je nezvěstn[$1$], stopy vedou do [APPEARENCE_ML][$1$_2] [TARGETLOC$1$_2].",
    "je nalezen[$1$] mrtv[$1$] u [TARGETLOC$1$_2], kolem jsou stopy [ANIMAL_2_MN]."
],

FLAVOR_STORY_GRAMMAR: [        
    "[PROFESSION_M|PROFESSION_F] [VERB]",
    //"[PROFESSION_M] [VERBS:VERB_PAST:_M]",
    //"[PROFESSION_F] [VERBS:VERB_PAST:_F]"
],

};