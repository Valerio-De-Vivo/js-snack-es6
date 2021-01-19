let parola1 = prompt('parola 1');
let parola2 = prompt('parola 2');

if (parola2.length > parola1.length) {
    document.getElementById('stampa').innerHTML = 
    `
    <h1> ${parola2} </h1>
    `;
} else if (parola1.length > parola2.length) {
    document.getElementById('stampa').innerHTML = 
    `
    <h1> ${parola1} </h1>
    `;
} else {
    document.getElementById('stampa').innerHTML = 
    `
    <h1> ${parola1} </h1>
    <h1> ${parola2} </h1>
    `;
}