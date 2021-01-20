
const numeri = [1,2,3,4,5,6,7,8,9,10];

const [minimo, massimo] = range();


//.stampa numeri compresi
numeri.filter((element, index) => {
    if (index>= minimo-1 && index< massimo) {
        console.log(element);
    }
});



//!funzioni

function range(){
    let min = parseInt(prompt('Inserisci il numero minimo compreso tra 1 e 10'));
    while (min < 1 || min >10) {
        min = parseInt(prompt('Inserisci il numero minimo compreso tra 1 e 10'));
    }
    let max = parseInt(prompt('Inserisci il numero massimo compreso tra 1 e 10'));
    while (max < 1 || max >10) {
        max = parseInt(prompt('Inserisci il numero massimo compreso tra 1 e 10'));
    }
    
    const massimo = Math.max(min, max);
    const minimo = Math.min(min, max);

    return [minimo, massimo]
  }


