var VOCAB = {

    BUILDING_GRAMMAR : [
        "[BUILDING_M|BUILDING_F]",
        "[BUILDING_M|BUILDING_F]",
        "[BUILDING_M|BUILDING_F]",
        "[BUILDING_M|BUILDING_F]",
        "[BUILDING_M|BUILDING_F]",
        "[BUILDING_M|BUILDING_F|BUILDING_S]",
    ],

    FAITH_GRAMMAR: [
        "[*GODNAME], [ADJ:APPEARENCE_CHAR:_M|ADJ:TRAIT:_M] [ADJ:RACE:_M|] bůh [GOD_ASPECT_2]",
        "[*GODNAME], [ADJ:APPEARENCE_CHAR:_M|ADJ:TRAIT:_M] [ADJ:RACE:_M|] pán [GOD_ASPECT_2]",
        "[*GODNAME], [ADJ:APPEARENCE_CHAR:_M|ADJ:TRAIT:_M] [ADJ:RACE:_M|] strážce [BIOME_2_MN]",
        "[*GODNAME], [ADJ:APPEARENCE_CHAR:_F|ADJ:TRAIT:_F] [ADJ:RACE:_F|] strážkyně [BIOME_2_MN]",
        "[*GODNAME], [ADJ:APPEARENCE_CHAR:_M|ADJ:TRAIT:_M] [ADJ:RACE:_M|] ochránce [ANIMAL_2_MN]",
        "[*GODNAME], [ADJ:APPEARENCE_CHAR:_F|ADJ:TRAIT:_F] [ADJ:RACE:_F|] bohyně [GOD_ASPECT_2]",
    ],

    CHARACTER_GRAMMAR: [
        "<b class='blue'>[NAMES_M|NAMES_M2]</b>, [ADJ:TRAIT:_M] [ADJ:RACE:_M] [PROFESSION_M]",
        "<b class='brown'>[NAMES_F]</b>, [ADJ:TRAIT:_F] [ADJ:RACE:_F] [PROFESSION_F]",
        "<b class='blue'>[NAMES_M|NAMES_M2]</b>, [ADJ:RACE:_M] [PROFESSION_M] [CLOTHES_6|WEAPON_7]",
        "<b class='brown'>[NAMES_F]</b>, [ADJ:RACE:_F] [PROFESSION_F] [CLOTHES_6|WEAPON_7]",
        "<b class='blue'>[NAMES_M|NAMES_M2]</b>, [ADJ:TRAIT:_M] [PROFESSION_M] [CLOTHES_6|WEAPON_7]",
        "<b class='brown'>[NAMES_F]</b>, [ADJ:TRAIT:_F] [PROFESSION_F] [CLOTHES_6|WEAPON_7]",
        "<b class='blue'>[NAMES_M|NAMES_M2]</b>, [PROFESSION_M] a mistr v [ACTIVITY]",
        "<b class='brown'>[NAMES_F]</b>, [PROFESSION_F] a mistrině v [ACTIVITY]",
        // "[NAMES_1|NAMES_2|NAMES_3], the [TRAIT|TRAIT|RACE|] [PROFESSION] [CLOTHES_GRAMMAR], [WEAPON_GRAMMAR]",
        // "[NAMES_1|NAMES_2|NAMES_3], the [TRAIT|TRAIT|] [RACE] [PROFESSION] [CLOTHES_GRAMMAR]",
        // "[NAMES_1|NAMES_2|NAMES_3], the [TRAIT|TRAIT|] [PROFESSION|ANIMAL] killer",
    ],

    MONSTER_GRAMMAR: [
        "[ADJ:TRAIT:_M] [ADJ:RACE:_M|] [MATERIAL_ML][_M] golem [CLOTHES_6|WEAPON_7|]",
        "[ADJ:TRAIT:_F] [ADJ:RACE:_F|] [*ANIMAL_F] [FEATURE_7]",
        "[ADJ:TRAIT:_M] [ADJ:RACE:_M|] [*ANIMAL_M|HUMANOID_M] [FEATURE_7]",
        "[APPEARENCE_ANIMAL_ML][_M] <b class='brown'>[ANIMAL_MUTANT]-[*ANIMAL_M]</b> [FEATURE_7]",
        "[APPEARENCE_ANIMAL_ML][_F] <b class='brown'>[ANIMAL_MUTANT]-[*ANIMAL_F]</b> [FEATURE_7]",
        "[APPEARENCE_ANIMAL_ML][_S] <b class='brown'>[ANIMAL_MUTANT]-[ANIMAL_S]</b> [FEATURE_7]",
    ],

    TECHNO_MONSTER_GRAMMAR: [
        "[APPEARENCE_ANIMAL_ML][_M] <b class='blue'>[ANIMAL_MUTANT]-[*ANIMAL_M]</b> [TECHNO_FEATURE_7]",
        "[APPEARENCE_ANIMAL_ML][_F] <b class='blue'>[ANIMAL_MUTANT]-[*ANIMAL_F]</b> [TECHNO_FEATURE_7]",
        "[APPEARENCE_ANIMAL_ML][_S] <b class='blue'>[ANIMAL_MUTANT]-[ANIMAL_S]</b> [TECHNO_FEATURE_7]",
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
        "[PROFESSION_M|PROFESSION_F] [VERB]",
        "[PROFESSION_M|PROFESSION_F] [VERB]",
        "[PROFESSION_M|PROFESSION_F] [VERB]",
        "[PROFESSION_M|PROFESSION_F] [VERB]",
        "[PROFESSION_M|PROFESSION_F] [VERB]",
        "[PROFESSION_M|PROFESSION_F] [VERB]",
        "[PROFESSION_M|PROFESSION_F] [VERB]",
        "[PROFESSION_M|PROFESSION_F] [VERB]",
        "[PROFESSION_M|PROFESSION_F] [VERB]",
        "[PROFESSION_M|PROFESSION_F] [VERB]",
        "[APPEARENCE_ANIMAL_ML][_M] [CREATURE_M|ANIMAL_M] [FEATURE_7] [VERB_SCARED] [PROFESSION_F_4|PROFESSION_M_4].",
        "[APPEARENCE_ANIMAL_ML][_S] [ANIMAL_S] [FEATURE_7] [VERB_SCARED][_VS] [PROFESSION_F_4|PROFESSION_M_4].",
        "[APPEARENCE_ANIMAL_ML][_F] [CREATURE_F|ANIMAL_F] [FEATURE_7] [VERB_SCARED][_VF] [PROFESSION_F_4|PROFESSION_M_4].",
        //STORY_PAST_GRAMAMR
    ],

    STORY_PAST_GRAMAMR: [
        "[PROFESSION_M] [VERB_PAST:_VM:_M]",
        "[PROFESSION_F] [VERB_PAST:_VF:_F]",
          ],

    MAIN_STORY_GRAMMAR: [
        "[PROFESSION_M] [CHARACTER_STORY:_M]",
        "[PROFESSION_F] [CHARACTER_STORY:_F]",
        "Před [BUILDING_M_7|BUILDING_S_7|BUILDING_F_7] byl nalezen [ADJ:TRAIT:_M] [ANIMAL_M|PROFESSION_M].",
        "Před [BUILDING_M_7|BUILDING_S_7|BUILDING_F_7] byla nalezena [ADJ:TRAIT:_F] [ANIMAL_F|PROFESSION_F].",
        "[POWER_ML][_M] [CREATURE_M|HUMANOID_M] přetrhl pouta a blíží se k městu.",
        "[POWER_ML][_M] [CREATURE_M|HUMANOID_M] hledá [ARTEFACT_M_4], ukrytý někde ve městě.",
        "[POWER_ML][_M] [CREATURE_M|HUMANOID_M] hledá [ARTEFACT_F_4], ukrytou někde ve městě.",
        "[POWER_ML][_M] [CREATURE_M|HUMANOID_M] hledá [ARTEFACT_S_4], ukryté někde ve městě.",
        "[POWER_ML][_M] [CREATURE_M|HUMANOID_M] hledá [ARTEFACT_M_4], ukrytý někde v [BIOME_6].",
        "[POWER_ML][_M] [CREATURE_M|HUMANOID_M] hledá [ARTEFACT_F_4], ukrytou někde v [BIOME_6].",
        "[POWER_ML][_M] [CREATURE_M|HUMANOID_M] hledá [ARTEFACT_S_4], ukryté někde v [BIOME_6].",
        "Ve sklepení [BUILDING_2] se nahromadili [STORED_STUFF], v městě prý není dostatek [PROFESSION_MN_2]",
        "Město bylo zamořeno [ANIMAL_7_MN], [SWARM_SOLUTION]",
        "Startosta kvůli [DISASTER_3] odložil [EVENT].",
        "Z města lidé na rychlo odcházejí, protože [LEGENDARY_LOCATION] se prý nachází [LEGENDARY_BUILDING]",
        "V městském přístavu zakotvila loď [HUMANOID_MN_2],[CREW_ACTIVITY_MN]",
        "V městském přístavu zakotvila loď [HUMANOID_MN_2] [SHIP_CONTENTS]",
        "V městském přístavu zakotvila loď [HUMANOID_MN_2] převážející [STORED_STUFF]",
        "Kapitán lodi <b class='name blue'>[SHIP_NAME]</b> prý [CAPTAIN_ACTIVITY]",
        "Skupina [PROFESSION_MN_2] našla [SECRET_STASH_6] [UNEXPECTED_DISCOVERY]"
    ],

    SWARM_SOLUTION: [
        "startosta se rozhodl vypustit [ANIMAL_4_MN]",
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