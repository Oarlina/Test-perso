let one = document.getElementById("one"); 
let two = document.getElementById("two"); 
let three = document.getElementById("three"); 
let four = document.getElementById("four");
let five = document.getElementById("five"); 
let six = document.getElementById("six"); 
let seven = document.getElementById("seven"); 
let height = document.getElementById("height"); 
let nine = document.getElementById("nine"); 

let message = document.getElementById("message");
let numberTour = document.getElementById("numberTour");
let play = document.getElementById("play");
play.innerHTML = "Joueur 1"; // je met a jour la valeur quand je lance la premiere fois la page
let nombre = 1;
numberTour.innerHTML = nombre; // je met le nombre de tour a 1 quand je lance la premiere fois la page

// function qui affiche une croix sur la case cocher
function cases(numb) {
    let num = document.getElementById(numb); // je recupere la case qui a ete cocher
    if (num.innerHTML == ""){ // si la case est vide alors
        if (nombre %2 != 0) // si nombre est impair alors c'est au tour du joueur 1
        {
            play.innerHTML = "Joueur 1";
            num.innerHTML = "X";
        }else { // sinon c'est au tour du joueur 2
            play.innerHTML = "Joueur 2";
            num.innerHTML = "O";
        }
        message.innerHTML =""; // enleve le messag apres avoir "reparer" le message
        numberTour.innerHTML= nombre++; // j'augmente le nombre et l'affiche en meme temps 
        // je teste si la partie est gagner
        if (one.innerHTML == five.innerHTML && five.innerHTML == nine.innerHTML && nine.innerHTML!=""){ 
            message.innerHTML = one.innerHTML + " gagne";
        }else if (one.innerHTML == two.innerHTML && two.innerHTML == three.innerHTML && three.innerHTML!=""){
            message.innerHTML = one.innerHTML + " gagne";
        }else if(four.innerHTML == five.innerHTML && five.innerHTML== six.innerHTML && six.innerHTML!=""){
            message.innerHTML = four.innerHTML + " gagne";
        }else if (seven.innerHTML == height.innerHTML && height.innerHTML == nine.innerHTML && nine.innerHTML!=""){
            message.innerHTML = seven.innerHTML + " gagne";
        }else if (three.innerHTML == five.innerHTML && five.innerHTML == seven.innerHTML && seven.innerHTML!=""){
            message.innerHTML = three.innerHTML + " gagne";
        }else if (one.innerHTML == four.innerHTML && four.innerHTML == seven.innerHTML && one.innerHTML!=""){
            message.innerHTML = one.innerHTML + " gagne";
        }else if (two.innerHTML == five.innerHTML && five.innerHTML== height.innerHTML && two.innerHTML!=""){
            message.innerHTML = two.innerHTML + " gagne";
        }else if (three.innerHTML == six.innerHTML && six.innerHTML == nine.innerHTML && three.innerHTML!=""){
            message.innerHTML = three.innerHTML + " gagne";
        }
    }else if (nombre >9){ // si la case n'est pas vide alors je regarde si je suis au 9eme tour
        message.innerHTML = "Personne n'a gagner. Recommencer!"
    }else{ // sinon sa veux dire qu'elle n'est pas vide et que l'on peut placer l'element dans une autre case
        message.innerHTML = "Cliquer ailleurs";
    }
}

// fonction qui reinitialise la partie en vidant toutes les cases, le message et en mettant le nombre de tour à 1
function cancel(){
    one.innerHTML = "";
    two.innerHTML = "";
    three.innerHTML = "";
    four.innerHTML = "";
    five.innerHTML = "";
    six.innerHTML = "";
    seven.innerHTML = "";
    height.innerHTML = "";
    nine.innerHTML = "";
    message.innerHTML = "";
    play.innerHTML = "Joueur 1";
    nombre = 1;
    numberTour.innerHTML = nombre;
}