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

simonSays();
