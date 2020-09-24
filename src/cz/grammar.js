var VOCAB = {
 
BUILDING_GRAMMAR : [

    "<ADJ:SIZE:_M|> <ADJ:CONDITION:_M> <BUILDING_M>",
    "<ADJ:SIZE:_S|> <ADJ:CONDITION:_S> <BUILDING_S>",
    "<ADJ:SIZE:_F|> <ADJ:CONDITION:_F> <BUILDING_F>",
    // "<SIZE|> <CONDITION> <MATERIAL> <BUILDING>",
    // "<SIZE|> <CONDITION> <AREA>",
    // "<CONDITION> <BUILDING> <BUILDING_STATE_GRAMMAR|>",
],

BUILDING_STATE_GRAMMAR : [
    "looking <EMOTION>",
    "swarming with <ANIMALS>",
],

FAITH_GRAMMAR: [
    "<GODNAME>, bůh <ELEMENT_2>", 
    "<GODNAME>, strážce <ELEMENT_2|BIOME_2_MN>", 
    "<GODNAME>, bohyně <ELEMENT_2>", 
    // "mother of <CONDITION|> <ELEMENT|RACE> gods",
    // "father of <CONDITION|> <ELEMENT|RACE> gods",
    // "<TRAIT|> <RACE|> god of <ANIMAL|SUBJECT>",
    // "<TRAIT|> <RACE|> goddess of <ANIMAL|SUBJECT>",
    // "<RACE|> guardian of <ANIMAL|SUBJECT>",
    // "<TRAIT|> <RACE|> god of the <ELEMENT|BIOME>",
    // "<TRAIT|> <RACE|> goddess of the <ELEMENT|BIOME>",
    // "<RACE|> guardian of the <BIOME>",
    // "<TRAIT> <RACE|> bestower of healing",
    // "<TRAIT|> <RACE|> gatekeeper of the <BIOME>",

],

CHARACTER_GRAMMAR: [
    "?"
    // "<NAMES_1|NAMES_2|NAMES_3>, the <TRAIT|EMOTION|> <RACE> <PROFESSION> <CLOTHES_GRAMMAR>",
    // "<NAMES_1|NAMES_2|NAMES_3>, the <TRAIT|EMOTION|RACE|> <PROFESSION> <WEAPON_GRAMMAR>",    
    // "<NAMES_1|NAMES_2|NAMES_3>, the <TRAIT|EMOTION|RACE|> <PROFESSION> evil twin <CLOTHES_GRAMMAR>",
    // "<NAMES_1|NAMES_2|NAMES_3>, the <TRAIT|EMOTION|RACE|> <PROFESSION> <CLOTHES_GRAMMAR>, <WEAPON_GRAMMAR>",
    // "<NAMES_1|NAMES_2|NAMES_3>, the <TRAIT|EMOTION|> <RACE> <PROFESSION> <CLOTHES_GRAMMAR>",
    // "<NAMES_1|NAMES_2|NAMES_3>, the <TRAIT|EMOTION|> <PROFESSION|ANIMAL> killer",
],

MONSTER_GRAMMAR: [
    "?"
    // "<TRAIT|CONDITION> <ELEMENT|MATERIAL|FOOD> golem that looks <EMOTION>"
],

CLOTHES_GRAMMAR: [
    "?"
    // "wearing <HEAD>",
    // "in <BODY>",
    // "with <FEATURE>",
],

CITY_NAMES_GRAMMAR: [
    "?"
//    "<CITY_NAME_PART>",
//    "<WORD> <CITY_NAME_PART|>",
//    "<WORD>-<CITY_NAME_PART>",
],

CITY_NAME_PART: [
    "?"
    // "<WORD><CITY_NAME_END>",  
    // "<CONSONANT><VOWEL><CITY_NAME_MID|><CITY_NAME_END> ",
    // "<WORD><CITY_NAME_END>",  
],

WORD: [
    "?"
    // "<CONSONANT><VOWEL>",
    // "<CITY_NAME_MID>",
    // "<CITY_NAME_MID><CITY_NAME_MID>",
    // "<CONSONANT><VOWEL><CITY_NAME_MID><CONSONANT><VOWEL>",
    // "<CONSONANT><VOWEL><CONSONANT><VOWEL>",
    // "<CONSONANT><VOWEL><CITY_NAME_PAIR>",
    // "<CONSONANT><VOWEL><CITY_NAME_PAIR><CITY_NAME_PAIR2>",
    // "<CONSONANT><VOWEL><CITY_NAME_PAIR><CITY_NAME_PAIR2><CONSONANT><VOWEL>",
    // "<CONSONANT><VOWEL><CONSONANT><VOWEL><CONSONANT><VOWEL>",
],

WEAPON_GRAMMAR: [    
    "?"
    // "holding <TOOL|WEAPON|BODY_PART>",
    // "armed with <CONDITION|> <MINERAL|> <WEAPON>",
    // "skillful with <CONDITION|> <WEAPON|INSTRUMENT>", 
],

STORY_GRAMMAR: [    
    "?"
    // "<PROFESSION> <VERB>",    
],

};