var fieldRaceFilter = document.getElementById("race-filter");
var fieldGenderFilter = document.getElementById("gender-filter");
var fieldLevelFilter = document.getElementById("level-filter");
var BTGenerator = document.getElementById("bt-generator");

BTGenerator.addEventListener("click", function(event) {
    event.preventDefault();
    character = [] ;
    generateCharacter( ) ;
});

function generateCharacter( ){
    character.race = fieldRaceFilter.options[fieldRaceFilter.selectedIndex].text ;
    character.gender = fieldGenderFilter.options[fieldGenderFilter.selectedIndex].text ;
    character.level = fieldLevelFilter.options[fieldLevelFilter.selectedIndex].text ;

    character.background = "" ;
    generatedNameValue = generateAttribute (generatePossibleValues( "name", character.race, character.gender )) ;
    character.name = generatedNameValue.name ;

    if ( character.level == levels.NOOB || character.level == levels.CHAMPION || character.level == levels.EXPERIENT ){
        generatedDeedValue = generateAttribute (generatePossibleValues( "deed", null, character.gender, character.level )) ;
        character.deed = generatedDeedValue.deed ;
        
        generatedNaturalSkillValue = generateAttribute (generatePossibleValues( "naturalSkill", null, null, character.level )) ;
        character.naturalSkill = generatedNaturalSkillValue.naturalSkill ;
        if ( generatedNaturalSkillValue.deed )
            character.deed = generatedNaturalSkillValue.deed ;
        
        character.background = character.background.concat( generatedNameValue.background, ". " , generatedDeedValue.background, ". " ,
            generatedNaturalSkillValue.background, ". " ) ;
    }
     
    else if ( character.level == levels.LEGEND || character.level == levels.EPIC || character.level == levels.LESSER_GOD ){
        generatedMythicalSkillValue = generateAttribute (generatePossibleValues( "mythicalSkill", null, null, character.level )) ;
        character.mythicalSkill = generatedMythicalSkillValue.mythicalSkill ;
        character.deed = generatedMythicalSkillValue.deed ;

        character.background = character.background.concat( generatedNameValue.background, ". " , generatedMythicalSkillValue.background, ". " ) ;
    }

    character.background = correctorBackground( character.background, character.gender, character.name ) ;
    character.deed = correctorDeed( character.deed, character.gender ) ;

    setCharacterInHTML( character ) ;
}

function generatePossibleValues( valueSearch, race, gender, level ){
    
    var valuesPossible = [] ;
    for ( index in characters ) {
        if ( valueSearch == "name" && characters[index].race == race && characters[index].gender == gender && characters[index].name )
            valuesPossible.push( characters[index] ) ;
            
        else if ( valueSearch == "deed" && characters[index].gender == gender && characters[index].level == level && characters[index].deed )
            valuesPossible.push( characters[index] ) ;

        else if ( valueSearch == "naturalSkill" && characters[index].level == level && characters[index].naturalSkill )
            valuesPossible.push( characters[index] ) ;

        else if ( valueSearch == "mythicalSkill" && characters[index].level == level && characters[index].mythicalSkill )
            valuesPossible.push( characters[index] )
    }

    return valuesPossible ;
}

function generateAttribute( possibleNames ){
    for ( index in possibleNames )
        return possibleNames [ Math.floor(Math.random() * possibleNames.length ) ] ;
}

function correctorBackground( background, gender, name ){
    var definiteArticle, personalPronoun ;
    if ( gender == genders.MAN ) {
        definiteArticle = "o";
        personalPronoun = "e";
    }

    if ( gender == genders.WOMAN ) {
        definiteArticle = "a";
        personalPronoun = "a";
    }

    background = background.split("!nome").join(name) ;
    background = background.split("!sexoAO").join(definiteArticle) ;
    background = background.split("!sexoAE").join(personalPronoun) ;
    background = background.split("!sexoAO").join(definiteArticle) ;
    background = background.split("!sexoAE").join(personalPronoun) ;
    background = background.split("..").join(". ") ;
    background = background.split(",.").join(". ") ;

    return background ;
}

function correctorDeed( deed, gender ){
    var definiteArticle, personalPronoun ;
    if ( gender == genders.MAN ) {
        definiteArticle = "o";
        personalPronoun = "e";
    }

    if ( gender == genders.WOMAN ) {
        definiteArticle = "a";
        personalPronoun = "a";
    }

    deed = deed.split("!sexoAO").join(definiteArticle) ;
    deed = deed.split("!sexoAE").join(personalPronoun) ;

    return deed ;
}

function setCharacterInHTML( character ){
    document.getElementById("character-name").textContent = character.name ;
    document.getElementById("character-deed").textContent = character.deed ;
    document.getElementById("character-race").textContent = character.race ;
    if ( character.naturalSkill ) 
        document.getElementById("character-skill").textContent = character.naturalSkill ;
    else
        document.getElementById("character-skill").textContent = character.mythicalSkill ;

    document.getElementById("character-background").textContent = character.background ;
}