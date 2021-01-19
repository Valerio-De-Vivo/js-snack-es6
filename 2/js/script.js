const numeri = [1,2,3,4,5,6,7,8,9,10];

console.log(numeri);

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 != 0) {
        document.getElementById('red').innerHTML += `<h1> ${numeri[i]} </h1>`;
    } else {
        document.getElementById('green').innerHTML += `<h1> ${numeri[i]} </h1>`;
    }
    
}

