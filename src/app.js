const main = () => {    
    //city name        
    document.write('<h1>');
    var citySize = Utils.randomNumber(7,25);
    document.writeln(cityName(citySize));
    document.write("</h1>")

    //story
    document.write('<emphasis>');    
    writeList(VOCAB.STORY_GRAMMAR, 5); 
    document.write("</emphasis>")

    //buildings
    document.write('<div class="container">');    
    document.write('<div class="row">');    
    document.write('<div class="col-sm">');    
    document.writeln('<h2>Places of interest:</h2>');

    writeList(VOCAB.BUILDING_GRAMMAR, 8); 
    document.write("</div>")

    //faith
    document.writeln('<div class="col-sm"><h2 class="title">Faith:</h2>');
    writeList(VOCAB.FAITH_GRAMMAR, 3); 
    document.write("</div>") 

    //people
    document.writeln('<div class="col-sm"><h2 class="title">Famous people:</h2>'); 
                 
    writeList(VOCAB.CHARACTER_GRAMMAR, 5);   
    
    document.write('</div>');   
    document.write('</div>');  

    document.writeln('<div class="col-sm"><h2 class="title">Monsters: </h2>'); 
                 
    writeList(VOCAB.MONSTER_GRAMMAR, 5);  
    
    document.write('</div>');   
    document.write('</div>');  
}

const writeList = (grammar, count) => {
    document.write('<ul class="list-group">'); 
    for (let i = 0; i < count; i++) {
        document.write('<li class="list-item">');  
        document.write(GrammarExpander.expandWord(grammar)); 
        document.write('</li>'); 
    }
    document.write('</ul>'); 
}

const cityName = (size) => {
    const name = GrammarExpander.expandWord(VOCAB.CITY_NAMES_GRAMMAR).toUpperCase();
    const biome = Utils.chooseRandomFrom(VOCAB.BIOME);
    if (size < 10) {
        return name + ", " + biome + " village";
    } else if (size < 20){
        return name + ", " + biome + "city";
    } else {
        return name + ", great " + biome +" city";    
    }    
}

main();