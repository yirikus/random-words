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

    BRIEF: [
        "[*RACE] is fishing by a pond in the [AREA].",
        "[*RACE] just caught a fish too big for him to handle.",
        "[*PROFESSION=Necromancer] [*RACE] is raising his army of undead minions.",
        "A [*PROFESSION=Messenger] [*RACE] is is ruinning with battle orders.",
        "[*PROFESSION] is reading a book.",
        "[*RACE] is charging!",
        "[*PROFESSION=Lookout] is perched on a high place trying to spot enemies. <b>Tip! </b>Try to come up with an interesting location!",
        "[*RACE] is punching his chest hard while roaring. He/she must have done something extraordinary!",
        " Were-[*ANIMAL] is lurking around [AREA]. <span class='hidden'>[*RACE=beast]</span>",
        "[*RACE] is riding on the [ANIMAL]",
        "Baby [*RACE] "
    ],

    HUMAN: [ "[HUMANOID_CARD]" ],
    CENTAUR: [ "[HUMANOID_CARD]" ],
    ELEMENTAL: [ "[ELEMENT_ADJ] [ELEMENTALS]" ],
    ORC: [ "[HUMANOID_CARD]" ],
    GOBLIN: [ "[HUMANOID_CARD]" ],
    TAUREN: [ "[HUMANOID_CARD]" ],
    BEAST: [ "[BEAST_ADJ] [ANIMAL]" ],
    MURLOC: [
        "[*PROFESSION] [MURLOC_NAME]",
        "murloc [*PROFESSION]",
        "redgill [*PROFESSION]"
    ],

    HUMANOID_CARD: [
        // [COMPLEX_PROFESSION]
        "[ADJECTIVE|LOCATION] [*PROFESSION]"
    ],
};