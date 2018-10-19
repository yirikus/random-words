var VOCAB = {
 
BUILDING_GRAMMAR : [

    "<CONDITION> <BUILDING>",
    "<CONDITION> <MATERIAL> <BUILDING>",
    "<CONDITION> <AREA>",
    "<CONDITION> <BUILDING> looking <EMOTION>",

],

FAITH_GRAMMAR: [
    "mother of <CONDITION|> <ELEMENT|RACE> gods",
    "father of <CONDITION|> <ELEMENT|RACE> gods",
    "<TRAIT|> <RACE|> god of <ANIMAL|SUBJECT>",
    "<TRAIT|> <RACE|> goddess of <ANIMAL|SUBJECT>",
    "<RACE|> guardian of <ANIMAL|SUBJECT>",
    "<TRAIT|> <RACE|> god of the <ELEMENT|BIOME>",
    "<TRAIT|> <RACE|> goddess of the <ELEMENT|BIOME>",
    "<RACE|> guardian of the <BIOME>",
    "<TRAIT> <RACE|> bestower of healing",
    "<TRAIT|> <RACE|> gatekeeper of the <BIOME>",

],

CHARACTER_GRAMMAR: [
    "<TRAIT|EMOTION|> <RACE> <PROFESSION> <CLOTHES_GRAMMAR>",
    "<TRAIT|EMOTION|RACE|> <PROFESSION> <WEAPON_GRAMMAR>",    
    "<TRAIT|EMOTION|RACE|> <PROFESSION> evil twin <CLOTHES_GRAMMAR>",
    "<TRAIT|EMOTION|RACE|> <PROFESSION> <CLOTHES_GRAMMAR>, <WEAPON_GRAMMAR>",
    "<TRAIT|EMOTION|> <RACE> <PROFESSION> <CLOTHES_GRAMMAR>",
    "<TRAIT|EMOTION|> <PROFESSION|ANIMAL> killer",
],

CLOTHES_GRAMMAR: [
    "wearing <HEAD>",
    "in <BODY>",
    "with <FEATURE>",
],

WEAPON_GRAMMAR: [    
    "holding <TOOL|WEAPON|BODY_PART>",
    "armed with <CONDITION|> <MINERAL|> <WEAPON>",
    "skillful with <CONDITION|> <WEAPON|INSTRUMENT>", 
],

}