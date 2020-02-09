var fieldAddAttribute = document.getElementById("add-attribute") ;
var fieldAddForm = document.getElementById("add-form") ;
var isValidateForm = true ;

fieldAddAttribute.addEventListener("click", function(event) {
    event.preventDefault();
    character = [] ;
    createCharacter() ;
});

function createCharacter( ) {
    if ( categorySelectedValue == typeCategories.NAME || !categorySelectedValue ) {
        if ( validateForm( "novo-nome", "attribute-name-form" ) && 
            validateForm( "novo-nome-background", "short-background-form" ) ) {
            character.name = document.getElementById("novo-nome").value;
            character.race = raceSelectedValue ? raceSelectedValue : races.HUMAN;
            character.gender = genderSelectedValue ? genderSelectedValue : genders.MAN
            character.background = document.getElementById("novo-nome-background").value;
        }
    }
    else if ( categorySelectedValue == typeCategories.MYTHICAL_SKILL ) {
        if  ( validateForm( "nova-habilidade-mítica" , "attribute-name-form") && 
            validateForm( "novo-título", "attribute-name-form" ) &&
            validateForm( "nova-habilidade-mítica-background", "short-background-form" ) ){
            character.mythicalSkill = document.getElementById("nova-habilidade-mítica").value;
            character.level = levelMSSelectedValue ? levelMSSelectedValue : levels.LEGEND
            character.deed = document.getElementById("novo-título").value;
            character.background = document.getElementById("nova-habilidade-mítica-background").value;
        }
        
    }
    else if ( categorySelectedValue == typeCategories.NATURAL_SKILL ) {
        if  ( validateForm( "nova-habilidade-natural", "attribute-name-form" ) && 
            validateForm( "nova-habilidade-natural-background", "short-background-form" ) ) {
            character.naturalSkill = document.getElementById("nova-habilidade-natural").value;
            character.level = levelNSSelectedValue ? levelNSSelectedValue : levels.NOOB
            if ( document.getElementById("novo-título").value )
                character.deed = document.getElementById("novo-título").value;
            character.background = document.getElementById("nova-habilidade-natural-background").value;
        }
    }
    else if ( categorySelectedValue == typeCategories.DEED ) {
        if  ( validateForm( "novo-título", "attribute-name-form" ) && 
            validateForm( "novo-título-background", "short-background-form" ) ) {
            character.gender = genderSelectedValue ? genderSelectedValue : genders.MAN
            character.level = levelNSSelectedValue ? levelNSSelectedValue : levels.NOOB
            character.deed = document.getElementById("novo-título").value;
            character.background = document.getElementById("novo-título-background").value;
        }
    }    
    if ( isValidateForm ) createCompleted() ;
}

function validateForm( idElementInput, idFormControl ) {
    var elementInput = document.getElementById(idElementInput);
    var formControl = document.getElementById(idFormControl);
    if ( !elementInput.value ) {
        formControl.classList.add("error");
        isValidateForm = false ;
        return false ;
    }
    else
        formControl.classList.remove("error");
        isValidateForm = true ;
        return true ;
}

function createCompleted() {
    characters.push(character) ;
    alert( " Valor adicionado ao gerador com sucesso " ) ;
    character = [];
    fieldAddForm.reset();
}