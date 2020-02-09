var fieldRaceFilter = document.getElementById("race-filter");
var fieldGenderFilter = document.getElementById("gender-filter");
var fieldLevelFilter = document.getElementById("level-filter");
var fieldLevelNSFilterForm = document.getElementById("level-ns-filter-form");
var fieldLevelMSFilterForm = document.getElementById("level-ms-filter-form");
var fieldCategoryFilterForm = document.getElementById("form-category");
var fieldAttributeName = document.querySelector("#attribute-name-form");
var fieldShortBackground = document.querySelector("#short-background-form");
var fieldGenderFilterForm = document.getElementById("gender-filter-form");
var fieldRaceFilterForm = document.getElementById("race-filter-form");

var categorySelectedValue = false ;
var raceSelectedValue = false ;
var genderSelectedValue = false ;
var levelNSSelectedValue = false ;
var levelMSSelectedValue = false ;

var characterGenerated ;

function createOptionsInHTML() {
    createSelectionOptionsInHTML( fieldRaceFilter, races );
    createSelectionOptionsInHTML( fieldRaceFilterForm, races );
    createSelectionOptionsInHTML( fieldGenderFilter, genders );
    createSelectionOptionsInHTML( fieldGenderFilterForm, genders );
    createSelectionOptionsInHTML( fieldLevelFilter, levels );
    createSelectionOptionsInHTML( fieldLevelNSFilterForm, levelsNS ) ;
    createSelectionOptionsInHTML( fieldLevelMSFilterForm, levelsMS ) ;
    createSelectionOptionsInHTML( fieldCategoryFilterForm, typeCategories );
    createInputFieldsInHTML( fieldAttributeName, "input", typeCategories );
    createInputFieldsInHTML( fieldShortBackground, "textarea", typeCategories );
}

function createSelectionOptionsInHTML( fieldFilter,  options ) {
    for(index in options)
        fieldFilter.options[fieldFilter.options.length] = new Option(options[index], options[index]);
}

function createInputFieldsInHTML( fieldFilter, elementHTMLType, options )
{
    for(index in options ) {
        var inputCategory = document.createElement( elementHTMLType );
        inputCategory.classList.add("form-control");
        inputCategory.classList.add("tm-select");
        inputCategory.classList.add("form-group");
        inputCategory.required = true;
        
        if ( options[index] != options.NAME )
            inputCategory.classList.add("invisivel");

        inputCategory.setAttribute("type", "text");

        if ( elementHTMLType == "textarea" ) {
            inputCategory.setAttribute("id", options[index].concat("-background").toLowerCase().replace(/\s/g, "-"));
            inputCategory.setAttribute("name", options[index].concat("-background").toLowerCase().replace(/\s/g, "-"));
            inputCategory.setAttribute("rows", "10");
            inputCategory.setAttribute("placeholder", "Exemplo: " + generateAttribute ( generatePossibleValues( "name", races.HUMAN, genders.MAN ) ).background );
        } 
        else {
            inputCategory.setAttribute("id", options[index].toLowerCase().replace(/\s/g, "-"));
            inputCategory.setAttribute("name", options[index].toLowerCase().replace(/\s/g, "-"));
            inputCategory.setAttribute("placeholder", "Exemplo: " + generateAttribute ( generatePossibleValues( "name", races.HUMAN, genders.MAN ) ).name ) ;
        }

        fieldFilter.appendChild(inputCategory);
    }
}

fieldCategoryFilterForm.addEventListener("change", function(e) {
    
    hideElementFields() ;
    categorySelectedValue = e.target.value ;

    if ( e.target.value == typeCategories.NAME ){
        document.getElementById("race-filter-form").classList.remove("invisivel") ;
        document.getElementById("gender-filter-form").classList.remove("invisivel") ;
        setRandomExample( raceSelectedValue, genderSelectedValue );   
    }

    else if ( e.target.value == typeCategories.NATURAL_SKILL ){
        document.getElementById("novo-título").classList.remove("invisivel") ;
        document.getElementById("level-ns-filter-form").classList.remove("invisivel") ;
        setRandomExample( raceSelectedValue, genderSelectedValue, levelNSSelectedValue ); 
    }

    else if ( e.target.value == typeCategories.MYTHICAL_SKILL ){
        document.getElementById("novo-título").classList.remove("invisivel") ;
        document.getElementById("level-ms-filter-form").classList.remove("invisivel") ;
        setRandomExample( raceSelectedValue, genderSelectedValue, levelMSSelectedValue ); 
    }

    else if ( e.target.value == typeCategories.DEED ){
        document.getElementById("gender-filter-form").classList.remove("invisivel") ;
        document.getElementById("level-ns-filter-form").classList.remove("invisivel") ;
        setRandomExample( raceSelectedValue, genderSelectedValue, levelNSSelectedValue ); 
    }

    document.getElementById(e.target.value.toLowerCase().replace(/\s/g, "-")).classList.remove("invisivel") ;
    document.getElementById(e.target.value.concat("-background").toLowerCase().replace(/\s/g, "-")).classList.remove("invisivel") ;
});

fieldRaceFilterForm.addEventListener("change", function(e) {
    raceSelectedValue = e.target.value ;
    setRandomExample( e.target.value, genderSelectedValue );
});

fieldGenderFilterForm.addEventListener("change", function(e) {
    genderSelectedValue = e.target.value ;
    setRandomExample( raceSelectedValue, e.target.value, levelNSSelectedValue );
});

fieldLevelNSFilterForm.addEventListener("change", function(e) {
    levelNSSelectedValue = e.target.value ;
    setRandomExample( raceSelectedValue, genderSelectedValue, e.target.value );
});

fieldLevelMSFilterForm.addEventListener("change", function(e) {
    levelMSSelectedValue = e.target.value ;
    setRandomExample( raceSelectedValue, genderSelectedValue, e.target.value );
});

function setRandomExample( race, gender, level ){
    if ( categorySelectedValue == typeCategories.NAME || !categorySelectedValue ) {
        characterGenerated = generateAttribute ( generatePossibleValues( "name", raceSelectedValue ? race : races.HUMAN, genderSelectedValue ? gender : genders.MAN ) ) ;
        document.getElementById("novo-nome").setAttribute("placeholder", "Nome de Exemplo: " + characterGenerated.name ) ;
        document.getElementById("novo-nome-background").setAttribute("placeholder", "Background de Exemplo: " + characterGenerated.background ) ;
    }
    else if ( categorySelectedValue == typeCategories.MYTHICAL_SKILL ) {
        characterGenerated = generateAttribute ( generatePossibleValues( "mythicalSkill", null, null, levelMSSelectedValue ? level : levels.LEGEND ) ) ;
        document.getElementById("nova-habilidade-mítica").setAttribute("placeholder", "Nome de Exemplo: " + characterGenerated.mythicalSkill ) ;
        document.getElementById("novo-título").setAttribute("placeholder", "Título de Exemplo: " +  characterGenerated.deed ) ;
        document.getElementById("nova-habilidade-mítica-background").setAttribute("placeholder", "Background de Exemplo: " + characterGenerated.background ) ;
    }
    else if ( categorySelectedValue == typeCategories.NATURAL_SKILL ) {
        characterGenerated = generateAttribute ( generatePossibleValues( "naturalSkill", null, null, levelNSSelectedValue ? level : levels.NOOB ) ) ;
        document.getElementById("nova-habilidade-natural").setAttribute("placeholder", "Nome de Exemplo: " + characterGenerated.naturalSkill ) ;
        document.getElementById("novo-título").setAttribute("placeholder", characterGenerated.deed ? "Título de Exemplo: " + characterGenerated.deed + " (OPCIONAL)" : "Título: (OPCIONAL)" ) ;
        document.getElementById("nova-habilidade-natural-background").setAttribute("placeholder", "Background de Exemplo: " + characterGenerated.background ) ;
    }
    else if ( categorySelectedValue == typeCategories.DEED ) {
        characterGenerated = generateAttribute ( generatePossibleValues( "deed", null, genderSelectedValue ? gender : genders.MAN, levelNSSelectedValue ? level : levels.NOOB ) ) ;
        document.getElementById("novo-título").setAttribute("placeholder", "Título de Exemplo: " + characterGenerated.deed ) ;
        document.getElementById("novo-título-background").setAttribute("placeholder", "Background de Exemplo: " + characterGenerated.background ) ;
    }
}

function hideElementFields(){

    document.getElementById("race-filter-form").classList.add("invisivel") ;
    document.getElementById("gender-filter-form").classList.add("invisivel") ;
    document.getElementById("level-ns-filter-form").classList.add("invisivel") ;
    document.getElementById("level-ms-filter-form").classList.add("invisivel") ;
    document.getElementById("novo-título").setAttribute("placeholder",  "Insira um novo título" ) ;

    for(index in typeCategories ) {
        document.getElementById(typeCategories[index].toLowerCase().replace(/\s/g, "-")).classList.add("invisivel") ;
        document.getElementById(typeCategories[index].concat("-background").toLowerCase().replace(/\s/g, "-")).classList.add("invisivel") ;
    }
}