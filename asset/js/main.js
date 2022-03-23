// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
// e quali dei numeri da indovinare sono stati individuati.

// seleziono id dall html per visualizzare i numeri random
let numRandom = document.getElementById("num_random_pc");

// seleziono il bottone per far partite tutto
let button = document.getElementById("btn");

// seleziono id per riprodurre il risultato finale
let output = document.getElementById("output");

// creo la variabile per raccogliere i numeri random
let numRandomArray = [];

// creo una cariabile per raccogliere i numeri dal prompt
let numUserArray = [];

// crep una variabile per indicare il numero minimo random
let minN = 1;

// creo una variabile pr indicare il numero massimo random
let maxN = 100;

// fisso la costante per indicare la quantità di numeri da inserire
const numFix = 5;

// creato una funzione per convalidare o meno l'elemento inserito dall utente dal prompt
function check(user, n, m) { // check input valido
    if(isNaN(user) === true){
      return false
    }
    if(user < n || user > m){
      return false
    }
    return true
  }

//funzione per generare numeri random
function numeroRandom(min, max) {
    let numeroPc = (Math.floor(Math.random() * max) + min );
    return numeroPc;
}

// evento al click che fa partire il programma di memorizzazione numeri
button.addEventListener('click', function () {

    // disabilito il tasto cosi non si possono accavallare piu click
    document.getElementById('btn').disabled = true;
    
    // riporto le array dei numeri random e dei numeri inseriti dall utente
    // vuote cosi ogni volta che riparte la funzione si azzera
    // svuoto anche id in html dell output
    numRandomArray = [];
    numUserArray = [];
    output.innerHTML = '';

    //riempiamo l array dei numeri random
    while (numRandomArray.length < numFix) {

        //genero il numero random
        let numRandomPc = numeroRandom(minN, maxN);
        console.log(!numRandomArray.includes(numRandomPc));
        // creo la condizione per pushare i numeri 
        if (!numRandomArray.includes(numRandomPc)) {
            numRandomArray.push(numeroRandom(minN, maxN));
        }
    }

    console.log(numRandomArray);

    // stampa dei 5 numeri random in html
    numRandom.innerHTML = `i numeri da memorizzare sono: ${numRandomArray}`;

    // inseriamo il timeout per dare il tempo all utente tramite prompt
    // di imserire 5 numeri, uno alla volta, cercando di ricordare quelli random
    setTimeout(() => {

        // svuoto il div che contiene la stampa dei numeri random
        numRandom.innerHTML = ``;

        // applico il ciclo while 
        let i = 0;
        while ( i < numFix ) {

            let inputNum = parseInt(prompt('inserisci un numero da 1 a 100'));

            // se il numero inserito dall utente ha superato il check
            if ( check(inputNum, minN, maxN) ){

                // se il numero avuto dal prompt è incluso nell'array dei numeri random, va avanti, salvando il numero pushandolo
                if (numRandomArray.includes(inputNum)) {
                    numUserArray.push(inputNum);
                } 

                // ripete il ciclo
                i++   

            } else {

                // se l'input inserito dall utente non ha superato il check
                // allora sbuca un allert, che permette poi di ripetere il ciclo non contandolo
                alert('hai perso tempo! devi inserire numeri tra 1 e 100, pirla!');

            }                          
            
        }

        console.log(numUserArray);

        // dopo aver inserito i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
        alert('Hai indovinato: ' + numUserArray.length + ' numeri!');
        alert('I numeri generati erano: ' + numRandomArray);
        alert('I numeri indovinati sono: ' + numUserArray);

        numRandom.innerHTML = `i numeri da memorizzare erano: ${numRandomArray}`;

        output.innerHTML = `hai indovinato ${numUserArray.length} numeri! ossia: ${numUserArray}`;
        
        // riabilito il tasto della funzione al click
        document.getElementById('btn').disabled = false;

    }, 5000 );

})

// ho gettato un tampone, sangue e lacrime, ma ce l'ho fatta! AAH :D