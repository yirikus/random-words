var Utils = {
    randomNumber: (from, to) => {
        return Math.floor((Math.random() * to + from));    
    },

    chooseRandomFrom: (array) => {
        return array[Utils.randomNumber(0, array.length)];
    },
    /**
    * Get the URL parameters
    * source: https://css-tricks.com/snippets/javascript/get-url-variables/
    * @param  {String} url The URL
    * @return {Object}     The URL parameters
    */
    getParams: (url) => {
        if (!url) {
            url = window.location.href;
        }
        var params = {};
        var parser = document.createElement('a');
        parser.href = url;
        var query = parser.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    }
}