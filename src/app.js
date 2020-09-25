const version = '25.9.2020, 10:17';
const main = () => {    
    //city name        
    document.write('<h1>');
    document.writeln(cityName());
    document.write('<small class="text-muted">');
    document.writeln(cityDesc());
    document.write('</small>');
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
    document.write('<div>last update ' + version + ' </div>');
}

const writeList = (grammar, count) => {
    document.write('<ul class="list-group">'); 
    for (let i = 0; i < count; i++) {
        document.write('<li class="list-item">');  
        document.write(generateWord(grammar));         
        document.write('</li>'); 
    }
    document.write('</ul>'); 
}

const generateWord = (grammar) => {
    let word = GrammarExpander.expandWord(grammar);
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const cityName = () => {
    return GrammarExpander.expandWord(VOCAB.CITY_NAME_GRAMMAR).toUpperCase();    
}

const cityDesc = () => {
    return GrammarExpander.expandWord(VOCAB.CITY_DESC_GRAMMAR).toUpperCase();    
}

main();