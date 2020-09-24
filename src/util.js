var Utils = {
    randomNumber: (from, to) => {
        return Math.floor((Math.random() * to + from));    
    },

    chooseRandomFrom: (array) => {
        return array[Utils.randomNumber(0, array.length)];
    }
}