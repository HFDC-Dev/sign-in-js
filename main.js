// Validation email 

const username = document.getElementById("username");
const emailLabel = document.getElementById("email-label");
const emailError = document.getElementById("email-error");

// Condition mot de passe

const myPassword = document.getElementById("pass");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");


// Validation du mail quand le RegEx est respecté

function validateEmail() {
    emailLabel.style.bottom = "45px";

    if (!username.value.match(/^[A-Za-z\._\-0-9]*[@][a-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Veuillez entrer une adresse email valide.";
        return false;
    }

    emailError.innerHTML = "";
    return true;
}


// Lorsque l'utilisateur clique sur le champ du mot de passe, affiche la boite message condition

myPassword.onfocus = function() {
    document.getElementById("msg-pass").style.display = "block"
}

// Lorsque l'utilisateur clique en dehors du champ de mot de passe, masque la boite 

myPassword.onblur = function() {
    document.getElementById("msg-pass").style.display = "none"
}

// Lorsque l'utilisateur commence à taper quelque chose dans le champ mot de passe 

//Lettre minuscule

myPassword.onkeyup = function() {
    // Validation lettres minuscules
    let lowerCaseLetters = /[a-z]/g
    if(myPassword.value.match(lowerCaseLetters)){
        // si le mot de passe contient une lettre minuscule, enlever class "invalid et ajouter la class valid"
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }else {
        // sinon, enlever la class "valid" et ajouter la class "invalid"
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Lettre majuscule

    // Validation lettres majuscules
    let upperCaseLetters = /[A-Z]/g
    if(myPassword.value.match(upperCaseLetters)){
        // si le mot de passe contient une lettre majuscule, enlever class "invalid et ajouter la class valid"
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }else {
        // sinon enlever la class "valid" et ajouter la class "invalid"
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Chiffre

    // Validation d'un chiffre
    let numbers = /[0-9]/g
    if(myPassword.value.match(numbers)){
        // si le mot de passe contient un chiffre, enlever class "invalid et ajouter la class valid"
        number.classList.remove("invalid");
        number.classList.add("valid");
    }else {
        // sinon enlever la class "valid" et ajouter la class "invalid"
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    //8 caractère minimum

    //Validation caractère
    if(myPassword.value.length >= 8){
        // Si le mot de passe contient minimum 8 caractères, enlever la class" invalid et ajouter la class valid"
        length.classList.remove("invalid");
        length.classList.add("valid");
    }else {
        // sinon enlever la class "valid" et ajouter la class "invalid"
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}








