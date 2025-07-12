//simon says

// generiamo un'array con i numeri casuali 
const   simonSays = () => {
// array di numeri da estrarre a caso
  let numbers = [];

  //avviamo un ciclo perchè ci servono 5 numeri
  for (let i=0 ; i<5 ; i++){
    // console.log(`estrazione del numero in posizione ${i+1}...`)               //debug
    //nuovo numero estratto
    let insertion = Math.floor(Math.random()*30 + 1);
    // console.log(`il numero estratto è ${insertion}...`)      //debug
    // console.log(isPresent(numbers,insertion));               //debug
    if(numbers.length==0){
    // console.log(`l'array è vuoto pertanto lo inseriamo`);
    numbers[i]=insertion;
    }
    else if( isPresent(numbers,insertion)!==true){
      //se il numero non è presente
      numbers[i]=insertion;
      // console.log(`il numero ${insertion} è stato inserito nell'array...`)    //debug
    }
    else if (isPresent(numbers,insertion)===true){
      // se viene trovato semplicemente decrementiamo l'indice i per reinserire il numero
      i--;
      console.log(`il numero ${insertion} non è stato inserito nell'array...`) //debug
    }
    
    console.log(`array a fine estrazione =  ${numbers} ...`) //debug

  }
  return numbers;
}
//creiamo una funzione dove come parametri diamo un array di numeri  e un numero
//controlliamo se il numero è presente nell'array restituendo un booleano 
const isPresent = (array,number)=>{
  //variabile di controllo
  let found=false;
  
  console.log(`array ${array} [${array.length}]- number ${number}`)
  
  for (let x=0 ; x<array.length ; x++){
    // console.log(`x =  ${x} array.length-1 =${array.length}`) //debug
    if (number===array[x]){
      found=true;
    }
    
  }
  
  return found;
}



//corpo principale programma

const simonNumbers=simonSays();

console.log(`ecco i numeri di Simon ${simonNumbers} `) //debug

//acquisisco tutte le componenti del dom che vogliamo manipolare

let countdown = document.getElementById("countdown");
console.log(document.getElementById("numbers-list"));
let answersForm = document.getElementById("numbers-form");
let message = document.getElementById("message");


// console.log(isPresent(array=[1,2,3,4,5],5)); //debug 





