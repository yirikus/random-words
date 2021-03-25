var VOCAB = {
    CARD_NAME: [ "[NOUN:*RACE]" ],
    NOUN: ["[$1$]"],
    RACE_GRAMMAR: [ "[*RACE]" ],
    CLASS_GRAMMAR: [ "[*CLASS]" ],

    RACE: [
        //"QUILLBOAR",
        "elemental",
        "human",
        "orc",
        "goblin",
        "tauren",
        "beast",
        "murloc",
        "centaur",
        //"treant",
    ],

    HUMAN: [ "[HUMANOID_CARD]" ],
    CENTAUR: [ "[HUMANOID_CARD]" ],
    ELEMENTAL: [ "[ELEMENT_ADJ] [ELEMENTALS]" ],
    ORC: [ "[HUMANOID_CARD]" ],
    GOBLIN: [ "[HUMANOID_CARD]" ],
    TAUREN: [ "[HUMANOID_CARD]" ],
    BEAST: [ "[BEAST_ADJ] [ANIMAL]" ],
    MURLOC: [
        "[PROFESSION] [MURLOC_NAME]",
        "murloc [PROFESSION]",
        "redgill [PROFESSION]"
    ],

    HUMANOID_CARD: [
        "[COMPLEX_PROFESSION]",
        "[ADJECTIVE|LOCATION] [PROFESSION]"
    ],
};