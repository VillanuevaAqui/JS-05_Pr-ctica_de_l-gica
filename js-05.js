

// ------------------------------- Ejercicio 1 - User profile -----------------------------------
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }  


function welcome() {


    const phrases = ["de mis favoritas", "obra maestra del cine", "unica de su genero"]; 
    const prhases2 = ["Dime tu pelicula favorita: ", "Tu segunda mejor pelicula: ", "Tu tercera mejor pelicula: "]    
    nameUser = prompt("Como te llamas: ");
    age = parseInt(prompt("Cual es tu edad?"));
    const listMovies = [];

    for (let i = 0; i < 3; i++){

        let movie = prompt(prhases2[i]);
        listMovies.push(movie);

    }

    alert("Hola " + nameUser + " yo tambien tengo " + age + " años")

    for (let i = 0; i < listMovies.length; i++){

        alert("La pelicula: " + listMovies[i] + " es una " + phrases[getRandomIntInclusive(0,2)]);

    }
}


// ------------------------------- Ejercicio 2 - Highest number ---------------------------


function bubbleSort () {
    
    let temp, n;
    n = 10;
    temp = 0;
    const list = [];


    for (let i = 0; i < n; i++){

        let number = prompt("Ingrese el numero: " + (i+1));
        list.push(number);

    }

    for (let i = 0; i < n ; i++){
        for (let j = 0; j < n ; j++ ){

            if(list[j] < list[j+1]){

                temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }

    alert(list);
}



// ------------------------------- Ejercicio 3 - Alarm ----------------------------

function alarm(){
    
        alert("Se acabo el tiempo programado");

}

function callAlarm() {

    let time = prompt("Ingrese el tiempo en segundos: ")
    setTimeout(alarm, time*1000);

}



// ------------------------------- Ejercicio 4 - Palindrome -------------------------------

function normalizeText (text) {

    textNorm = text.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    textNorm = textNorm.replace(/[^\w\s]|_/g, "");
    textNorm = textNorm.replace(/ /g, "");   
    return textNorm.toLowerCase();
    
}

function palindrome () {

    let text = prompt("Ingrese la palabra a analizar")

    let inverText;

    text = normalizeText(text)
    inverText = text.split("");
    inverText = inverText.reverse();
    inverText = inverText.join("");



    if (text === inverText){

        alert("El texto: " + text + " si es un palindromo");
    } else {

        alert("El texto: " + text + " no es un palindromo");
    }

     
}

// -------------------------------- Ejercicio 5 - Factorial -----------------------------

function factorial(num, numAcum = 1) {

    if (num === undefined){

        num = parseInt(prompt("Ingrese el numero factorial"));
        factorial(num);

    }

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
        
        alert("El resultado es: " + numAcum);

    }
}


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
    alert(arrayFlat);
    
}

function callFlatArray (){

    flatArray2([1, [2, 3, [4, 5, [6]]]]);

}



