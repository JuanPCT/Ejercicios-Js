const array1 = [3, 7, 8, 4, 6, 10, 7, 7, 11];

const busqueda = (arreglo) => {
    let variable = 0;
    let contador = 0;
    let cuenta = 0;
    arreglo.map(p => {
        cuenta = 0
        arreglo.map(x => {
            if (p == x) { cuenta++ }
        })
        if (cuenta > contador) {
            contador = cuenta;
            variable = p;
        }
    });
    console.log(`valor mas repetido:${variable}, numero de veces contada: ${contador}`)

}

busqueda(array1);
