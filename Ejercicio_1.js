
const lista = [3, 7, 8, 4, 6, 10, 11];
let hayprimo = false;

for (let index = 0; index < lista.length-1; index++) {
    let result = lista[index]+lista[index+1];
    let res = esPrimo(result);
    if (res) {
        console.log("El par ("+lista[index]+","+lista[index+1]+") suma "+result+" que es primo")
        hayprimo = true;
    }
}
if (!hayprimo) {
    console.log("No se encontró ningún par de números consecutivos cuya suma sea un número primo.");    
}



function esPrimo(number){
    for (let index = 2; index < number/2; index++) {
        if(number % index==0){
            return false;
        }        
    }
    return true;
}