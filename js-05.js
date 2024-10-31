

// ------------------------------- Ejercicio 1 - User profile -----------------------------------
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }  


function Welcome(name, age, listMovies) {


    const phrases = ["de mis favoritas", "obra maestra del cine", "unica de su genero"];     
    name = "Alberto";
    age = 23;
    listMovies = ["Scary Movie", "Your name", "Pokemon"];

    console.log("Hola " + name + " yo tambien tengo " + age + " años")

    for (let i = 0; i < listMovies.length; i++){

        console.log("La pelicula: " + listMovies[i] + " es una " + phrases[getRandomIntInclusive(0,2)]);

    }
}

Welcome();


// ------------------------------- Ejercicio 2 - Highest number ---------------------------


function bubbleSort (list) {
    
    let temp, n;
    
    temp = 0;
    n = list.length;

    for (let i = 0; i < n ; i++){
        for (let j = 0; j < n - 1; j++ ){

            if(list[j] < list[j+1]){

                temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }

    console.log(list);
}

bubbleSort([5,3,7,8,10,43,32]);


// ------------------------------- Ejercicio 3 - Alarm ----------------------------

function alarm(){
    
        console.log("Se acabo el tiempo programado");

}

let time = 1;
setTimeout(alarm, time*1000);

// ------------------------------- Ejercicio 4 - Palindrome -------------------------------

let str = "Matemáticas";

function normalizeText (text) {

    textNorm = text.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    textNorm = textNorm.replace(/[^\w\s]|_/g, "");
    textNorm = textNorm.replace(/ /g, "");   
    return textNorm.toLowerCase();
    
}

function palindrome (text) {

    let inverText;

    text = normalizeText(text)
    inverText = text.split("");
    inverText = inverText.reverse();
    inverText = inverText.join("");

    if (text === inverText){

        return ("El texto: " + text + " si es un palindromo");
    } else {

        return ("El texto: " + text + " no es un palindromo");
    }

     
}

console.log(palindrome("maria"));
// -------------------------------- Ejercicio 5 - Factorial -----------------------------

function factorial(num, numAcum = 1) {

    if (num >= 1){
        if (numAcum === undefined){
            
            numAcum = num;
            num--;
            console.log(num, numAcum);
            factorial(num, numAcum);

        } else {

            numAcum = numAcum * num;
            num--;
            console.log(num, numAcum)
            factorial(num, numAcum);

        }
    } else {
        
        console.log(numAcum);

    }
}

factorial(5);


// -------------------------------- Ejercicio 6 - Flat array ---------------------------

function flatArray(arrayMultidimension){

    //console.log(arrayMultidimension.flatMap((element) => element).flat(arrayMultidimension.length)); 
    //console.log(arrayMultidimension.flat(arrayMultidimension.length + 1))

}

function flatArray2(arrayMultidimension){

    const arrayFlat = [];

    arrayMultidimension = arrayMultidimension.join();
    arrayMultidimension = arrayMultidimension.split(",");
    arrayMultidimension.forEach(element => {
        arrayFlat.push(parseInt(element));
    });
    console.log(arrayFlat);
    
}

flatArray2([1, [2, 3, [4, 5, [6], [7]]]]);