
//corpo principale programma
alert("clicca ok per iniziare");
//richiamiamo la funzione per avere il set di 5 numeri in un array
const simonNumbers=simonSays();
//stampiamo i numeri in pagina 
spawn(simonNumbers); 
//avviamo il countdown usando set interval

//acquisisco tutte le componenti del dom che vogliamo manipolare


let message = document.getElementById("message");

// console.log(isPresent(array=[1,2,3,4,5],5)); //debug 
//evochiamo la funzione per mostrare il countdown e al suo interno evochiamo la funzione play per modificare quello che si può vedere all'interno della pagina
showCountdown();




