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
    console.log(`x =  ${x} array.length =${array.length}`) //debug * qui ho fatto un'errore di valutazione mettendo array.length-1 inizialmente, quindi non mi prendeva l'ultimo elemento dell'array dando la possibilità di inserire un altro numero uguale in ultima posizione, perchè sarebbe sfuggita al controllo mantenendo found su false
    if (number===array[x]){
      found=true;
    }
    
  }
  
  return found;
}


//inizializziamo un'arrow function per stampare i numeri di simon nella pagina
const spawn = (array) => {
let numbersList = document.getElementById("numbers-list");
//considerato che numbers-list è un tag ul unstyled quindi ci si aspetta una lista orizzontale, creeremo al suo interno un li con il valore del numero detto da simon
for (let i = 0 ; i < array.length ; i++){
  let number=document.createElement('li');
  number.innerText=array[i];
  numbersList.appendChild(number);
}
}

//scriviamo una funzione per eseguire il countdown e stampare man mano il numero di secondi mancanti
function showCountdown(){
  
  let countdown = document.getElementById("countdown");
  let time=1; //da ri cambiare in 30 secondi per la consegna 
  //stampiamo time dentro il tag di id countdown facendolo così partire da 30
  countdown.innerText=time;
  //prendiamo il valore identificativo di interval mentre inizializziamo la funzione set interval così da poter interrompere l'intervallo quando arriviamo a 0
  
  const interval = setInterval(function(){
    
      time--;
      countdown.innerText=time;
      console.log(`siamo all'interno di showCountdown time: ${countdown.innerText} interval:${interval}`)                                          // debug
      if(time===0){
          clearInterval(interval);
          play();
      }
  },1000);

    


}

//scriviamo una funzione per togliere i numeri di Simon dalla pagina e dare il form di acquisizione
function play(){
  console.log("time===0 eliminiamo l'intervallo")
          //prendiamo il div principale e selezioniamo tutti i suoi figli all'interno di mainDiv
          let mainDiv = document.getElementsByClassName("vh-100").item(0).children;
          // console.log(mainDiv);     //debug
          //il primo figlio di mainDiv sarà il div id countdown
          console.log(mainDiv.item(0).classList);     //debug
          mainDiv.item(0).classList.add("d-none");
          //il secondo figlio è instructions
          console.log(mainDiv.item(1));     //debug
          mainDiv.item(1).innerText="Inserisci tutti i numeri che riesci a ricordare, non importa l'ordine";
          //il terzo figlio è la lista non ordinata dei numeri detti da Simon
          console.log(mainDiv.item(2));     //debug
          mainDiv.item(2).classList.add("d-none");
          //il quarto figlio è il nostro form
          console.log(mainDiv.item(3).classList);     //debug
          mainDiv.item(3).className="d-flex";


}  
