const numeri = [1,2,3,4,5,6,7,8,9,10];

const minimo = parseInt(prompt('Inserisci il numero minimo compreso tra 1 e 10'));
const massimo = parseInt(prompt('Inserisci il numero massimo compreso tra 1 e 10'));

numeri.filter((element, index) => {
    if (index>= minimo-1 && index< massimo) {
        console.log(element);
    }
});


