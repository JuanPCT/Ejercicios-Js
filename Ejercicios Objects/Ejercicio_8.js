
class Calculadora{
    constructor(valor1,valor2){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    suma(){
        return (parseFloat(this.valor1)+parseFloat(this.valor2));
    }

    resta(){
        return (parseFloat(this.valor1)-parseFloat(this.valor2));
    }

    multiplicacion(){
        return (parseFloat(this.valor1)*parseFloat(this.valor2));
    }

    division(){
        return (parseFloat(this.valor1)/parseFloat(this.valor2));
    }
}

let x = (prompt("Ingrese el valor 1"));
let y = (prompt("Ingrese el valor 2"));

const calculadora = new Calculadora(x,y);

console.log(calculadora.suma());
console.log(calculadora.resta());
console.log(calculadora.multiplicacion());
console.log(calculadora.division());