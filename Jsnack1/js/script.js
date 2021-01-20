const bici = [
    {
        nome: 'bici1',
        peso: 23
    },
    {
        nome: 'bici2',
        peso: 45
    },
    {
        nome: 'bici3',
        peso: 10
    }
]

//.destructuring

const [biciOne, biciTwo, biciThree] = bici; 

let peso1 = biciOne.peso;
let peso2 = biciTwo.peso;
let peso3 = biciThree.peso;

//.ricerca e stampa del numero minimo

const pesi = [peso1, peso2, peso3];

const min = Math.min(...pesi);

document.getElementById('stampa').innerHTML = 
`
    <h1> Il peso minore è ${min} </h1>
`
;