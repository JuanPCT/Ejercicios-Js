
let number = 5;

const intervalID = setInterval(imprimir, 1000, number);

let index = 1;
function imprimir(number)
{
    console.log(index); 
    index++;
    if (index>number) {
        clearInterval(intervalID);
    }
}