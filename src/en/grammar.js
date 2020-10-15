var VOCAB = {

    BUILDING_GRAMMAR : [

        "[SIZE|] [CONDITION] [BUILDING]",
        "[SIZE|] [CONDITION] [MATERIAL] [BUILDING]",
        "[SIZE|] [CONDITION] [AREA]",
        "[CONDITION] [BUILDING] [BUILDING_STATE_GRAMMAR|]",
    ],

    BUILDING_STATE_GRAMMAR : [
        "looking [EMOTION]",
        "swarming with [ANIMALS]",
    ],

    MAIN_GRAMMAR: [],

    FAITH_GRAMMAR: [
        "[GODNAME], mother of [CONDITION|] [ELEMENT|RACE] gods",
        "[GODNAME], father of [CONDITION|] [ELEMENT|RACE] gods",
        "[GODNAME], [TRAIT|] [RACE|] god of [ANIMAL|SUBJECT]",
        "[GODNAME], [TRAIT|] [RACE|] goddess of [ANIMAL|SUBJECT]",
        "[GODNAME], [RACE|] guardian of [ANIMAL|SUBJECT]",
        "[GODNAME], [TRAIT|] [RACE|] god of the [ELEMENT|BIOME]",
        "[GODNAME], [TRAIT|] [RACE|] goddess of the [ELEMENT|BIOME]",
        "[GODNAME], [RACE|] guardian of the [BIOME]",
        "[GODNAME], [TRAIT] [RACE|] bestower of healing",
        "[GODNAME], [TRAIT|] [RACE|] gatekeeper of the [BIOME]",

    ],

    CHAR_NAME_GRAMMAR:[
        "[NAMES_M|NAMES_M2|NAMES_F]"
    ],

    CHARACTER_GRAMMAR: [
        "[CHAR_NAME_GRAMMAR], the [TRAIT|EMOTION|] [RACE] [*PROFESSION] [CLOTHES_GRAMMAR]",
        "[CHAR_NAME_GRAMMAR], the [TRAIT|EMOTION|RACE|] [*PROFESSION] [WEAPON_GRAMMAR]",
        "[CHAR_NAME_GRAMMAR], the [TRAIT|EMOTION|RACE|] [*PROFESSION] who is expert on [SKILL]",
        "[CHAR_NAME_GRAMMAR], the [TRAIT|EMOTION|RACE|] [*PROFESSION] [CLOTHES_GRAMMAR], [WEAPON_GRAMMAR]",
        "[CHAR_NAME_GRAMMAR], the [TRAIT|EMOTION|] [RACE] [*PROFESSION] [CLOTHES_GRAMMAR]",
        "[CHAR_NAME_GRAMMAR], the [TRAIT|EMOTION|] [RACE] [*PROFESSION] with [ANIMAL_BODY_PART]",
        "[CHAR_NAME_GRAMMAR], the [TRAIT|EMOTION|] [*PROFESSION|ANIMAL] killer",
    ],

    MONSTER_GRAMMAR: [
        "[TRAIT|CONDITION] [ELEMENT|MATERIAL|FOOD] golem that looks [EMOTION]",
        "[TRAIT|CONDITION] [MATERIAL|FOOD] construct",
        "[TRAIT|CONDITION] [CREATURE] that looks [EMOTION]",
        "[TRAIT|CONDITION] [CREATURE|ANIMAL]",
        "[TRAIT|CONDITION] [HUMANOID] [WEAPON_GRAMMAR]",
        "[ANIMAL]-[ANIMAL] with [ANIMALISTIC_FEATURE]",
        "[COLOR] [ANIMAL]-[ANIMAL] with [ANIMALISTIC_FEATURE]",
    ],

    TECHNO_MONSTER_GRAMMAR: [
        "[COLOR] [ANIMAL]-[ANIMAL] with [TECHNO_FEATURE]",
    ],

    CLOTHES_GRAMMAR: [
        "wearing [HEAD]",
        "in [BODY]",
        "with [FEATURE]",
    ],

    CITY_NAME_GRAMMAR: [
        "[CITY_NAME_START][CITY_NAME_MID|][CITY_NAME_END]",
        "[CITY_NAME_START][CITY_NAME_MID|][CITY_NAME_END2]",
    ],

    CITY_DESC_GRAMMAR: [
        ", [CONDITION] [BIOME] [COMMUNITY]",
        ", [CONDITION] [BIOME] [COMMUNITY]",
        ", [CONDITION] [COMMUNITY]",
        ", [PURPOSE] [COMMUNITY]",
        ", [SIZE] [COMMUNITY]",
        ", [SIZE] [BIOME] [COMMUNITY]"
    ],

    WEAPON_GRAMMAR: [
        "holding [TOOL|WEAPON|ANIMAL_BODY_PART]",
        "armed with [CONDITION|] [MINERAL|] [WEAPON]",
        "skillful with [CONDITION|] [WEAPON|INSTRUMENT]",
    ],

    STORY_GRAMMAR: [
        "[*PROFESSION] [VERB]",
    ],

    MAIN_STORY_GRAMMAR: [
        "[*PROFESSION] [VERB]",
    ],

};