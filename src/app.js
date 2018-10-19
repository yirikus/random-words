const main = () => {    
    //city name        
    document.write('<h1>');
    var citySize = randomNumber(7,25);
    document.writeln(cityName(citySize));
    document.write("</h1>")

    //buildings
    document.write('<div class="container">');    
    document.write('<div class="row">');    
    document.write('<div class="col-sm">');    
    document.writeln('<h2>Places of interest:</h2>');

    for (let i = 0; i < citySize; i++) {
        writeRandomSentence(VOCAB.BUILDING_GRAMMAR);   
    }

    document.write("</div>")

    //faith
    document.writeln('<div class="col-sm"><h2 class="title">Faith:</h2>');
    for (let i = 0; i < citySize/3; i++) {
        writeRandomSentence(VOCAB.FAITH_GRAMMAR);   
    }
    document.write("</div>") 

    //people
    document.writeln('<div class="col-sm"><h2 class="title">Famous people:</h2>'); 
    document.write('<ul class="list-group">');  
    for (let i = 0; i < citySize/2; i++) {
        document.write('<li class="list-item">');  
        writeRandomSentence(VOCAB.CHARACTER_GRAMMAR);   
        document.write('</li>');  
    }
    document.write('</ul>'); 
    document.write('</div>');   
    document.write('</div>');  
}

const writeRandomSentence = (grammar) => {
    document.write(
        expandWord(grammar) 
        + "<br/>"
    ); 
}

const cityName = (size) => {
    const name = expandWord(VOCAB.CITY_NAMES_GRAMMAR).toUpperCase();
    const biome = randomWord(VOCAB.BIOME);
    if (size < 10) {
        return name + ", " + biome + " village";
    } else if (size < 20){
        return name + ", " + biome + "city";
    } else {
        return name + ", great " + biome +" city";    
    }    
}

const randomNumber = (from, to) => {
    return Math.floor((Math.random() * to + from));    
}

const randomWord = (array) => {
    var number = Math.floor((Math.random() * array.length));
    return array[number];

}

const expandWord = (array) => {
    let word = randomWord(array);
    let toExpand = word.match(/<([^>]*)>/g);
    
    if (toExpand) {        
        for (let i = 0; i < toExpand.length; i++) {
            let subArrayNames = toExpand[i].replace(/<(.*)>/,"$1");
            let subArray = randomWord(subArrayNames.split("|"));
            if (!subArray) {
                word = word.replace(toExpand[i],"")
            } else {
                if (! VOCAB[subArray]) {
                    throw "cannot expand " + subArray;
                }        
                word = word.replace(toExpand[i], expandWord(VOCAB[subArray]));   
            }  
        }     
    }
    return word;
}

main();