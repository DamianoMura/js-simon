//simon says

// generiamo un'array con i numeri casuali 
const   simonSays = () => {
// array di numeri da estrarre a caso
  let numbers = [];

  //avviamo un ciclo perchè ci servono 5 numeri
  for (let i=0 ; i<5 ; i++){
    // console.log(`estrazione del numero in posizione ${i+1}...`)               //debug
    //nuovo numero estratto
    let insertion = Math.floor(Math.random()*50 + 1);
    console.log(`il numero estratto è ${insertion}...`)      //debug
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
    
    console.log(`nuovo array =  ${numbers} ...`) //debug

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
    //* qui ho fatto un'errore di valutazione mettendo array.length-1 inizialmente, quindi non mi prendeva l'ultimo elemento dell'array dando la possibilità di inserire un altro numero uguale in ultima posizione, perchè sarebbe sfuggita al controllo mantenendo found su false
    if (number===array[x]){
      found=true;
    }
    
  }
  
  return found;
}


//inizializziamo un'arrow function per stampare i numeri di simon nella pagina
const spawn = (array) => {
  let numbersList = document.getElementById("numbers-list");
  //considerato che numbers-list è un tag ul unstyled quindi ci si aspetta  una lista orizzontale, creeremo al suo interno un li con il valore del   numero detto da simon
  for (let i = 0 ; i < array.length ; i++){
    let number=document.createElement('li');
    number.innerText=array[i];
    numbersList.appendChild(number);
  }
}

//scriviamo una funzione per eseguire il countdown e stampare man mano il numero di secondi mancanti
function startGame(){
  let time=30; //da ri cambiare in 30 secondi per la consegna 
  let countdown = document.getElementById("countdown");
  //stampiamo time dentro il tag di id countdown facendolo così partire da 30
  countdown.innerText=time;
  //prendiamo il valore identificativo di interval mentre inizializziamo la funzione set interval così da poter interrompere l'intervallo quando arriviamo a 0
  const interval = setInterval(function(){
      time--;
                                            // debug
      countdown.innerText=time;
      if(time===0){
        console.log("time===0 eliminiamo l'intervallo")  // debug
        clearInterval(interval);
        play();
      }
  },1000);
 


}

//scriviamo una funzione per togliere i numeri di Simon dalla pagina e dare il form di acquisizione
function play(){
  
  //prendiamo il div principale e selezioniamo tutti i suoi fiall'interno di mainDiv
  let mainDiv = document.getElementsByClassName("vh-100").item(0).children;
  // console.log(mainDiv);     //debug
  //il primo figlio di mainDiv sarà il div id countdown
  console.log(mainDiv.item(0));     //debug
  mainDiv.item(0).classList.add("d-none");
  //il secondo figlio è instructions
  console.log(mainDiv.item(1));     //debug
  mainDiv.item(1).innerText="Inserisci tutti i numeri che riescricordare, non importa l'ordine";
  //il terzo figlio è la lista non ordinata dei numeri dettiSimon
  console.log(mainDiv.item(2));     //debug
  mainDiv.item(2).classList.add("d-none");
  //il quarto figlio è il nostro form
  console.log(mainDiv.item(3).classList);     //debug
  mainDiv.item(3).className="d-flex";
}  

function insertNumbers(simonNumbers){
  
  let myNumbers=[];
  let rememberedNumbers=[];
  let message = document.getElementById('message');
  let button=document.querySelector('.btn')
  //prendiamo tutti i campi input con classe .form-control
  let inputs=document.querySelectorAll('.form-control')
  
  console.log("message")                                   //debug   
  console.log(message)                                   //debug   
  console.log("button")                                   //debug   
  console.log(button)                                   //debug   
  console.log("inputs")                                   //debug   
  console.log(inputs.item(0).classList)  
  
  button.addEventListener('click',function(event){
    event.preventDefault();
    console.log(myNumbers);
      for(let i=0; i<inputs.length ; i++){
    // ogni volta che il button viene cliccato svuotiamo l'array per evitare bug 
    myNumbers.pop();
    //resettiamo le classi dei campi input  
    console.log(`reset inputs.item(${i}).classList`)
    console.log(inputs.item(i).classList)
    inputs.item(i).className="form-control"
  }
//validazione degli input dopo aver prevenuto il refresh della pagina
//scorriamo gli input per verificarne la proprietà value
for(let i=0; i< inputs.length ; i++){

 if(isNaN(parseInt(inputs.item(i).value))) {
    inputs.item(i).classList.add("bg-danger")
    console.log(inputs.item(i))
     message.innerHTML=`<br>i campi in rosso non sono validi`
  }
  else{
    
    console.log(isPresent(myNumbers,parseInt(inputs.item(i).value)))  // debug

    if (isPresent(myNumbers,parseInt(inputs.item(i).value))){
      if(inputs.item(i).classList.length>1){
        inputs.item(i).classList.pop()
        message.innerHTML=`<br> i campi in rosso non sono validi`
      }
      
    }
    else{
      myNumbers.push(parseInt(inputs.item(i).value))
      if(inputs.item(i).classList.length>1){
        inputs.item(i).classList.pop()
        
      }
      
    }
    
  }                                  //debug   
  
}
//controlliamo se abbiamo tutti i numer validi per proseguire
console.log(simonNumbers)

console.log(myNumbers)
if(myNumbers.length===simonNumbers.length){
  
  //disabilitiamo il bottone
  button.classList.replace("d-block","d-none")
  //controlliamo quanti ne abbiamo ricordato
  for(let i=0; i<myNumbers.length ; i++){  
    if (isPresent(simonNumbers,myNumbers[i])){
    rememberedNumbers.push(myNumbers[i])
  }
  
  
  if(rememberedNumbers.length>0){
    message.innerText=`<br> hai ricordato ${rememberedNumbers.length} numeri : ${rememberedNumbers}`;

  }
  else{
    message.innerText="<br>non hai ricordato alcun numero";
  }
}
}
  })
}