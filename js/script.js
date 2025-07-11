//simon says

// generiamo un'array con i numeri casuali 
const simonSays = () => {
// array di numeri da estrarre a caso
  let numbers = [];

  //avviamo un ciclo perchè ci servono 5 numeri
  for (let i=0 ; i<5 ; i++){
  console.log(`estrazione del numero in posizione ${i+1}...`) //debug
  //nuovo numero estratto
  let insertion = Math.floor(Math.random()*30 + 1);
  console.log(`il numero estratto è ${insertion}...`)         //debug
  }
}
//creiamo una funzione dove come parametri diamo un array di numeri  e un numero
//controlliamo se il numero è presente nell'array restituendo un booleano 
const isPresent = (array,number) => {
  //variabile di controllo
let found=false;
  for (let x=0 ; x<array.length-1 ; x++){
  if (number===array[x]){
   found=true;
  }
}
return found;
}
//corpo principale programma

simonSays();


