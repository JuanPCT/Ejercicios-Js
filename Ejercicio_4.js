
const lista = [1, 2, 3, 5, 6];

for (let index = 0; index < lista.length; index++) {
    if (lista[index]!=index+1) {
        console.log("El numero faltante es: "+ (index+1));
        return;
    }
    
}