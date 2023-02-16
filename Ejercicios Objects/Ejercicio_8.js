
class Calculadora{
    constructor(valor1,valor2){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    suma(){
        return this.valor1+this.valor2;
    }

    resta(){
        return this.valor1-this.valor2;
    }

    multiplicacion(){
        return this.valor1*this.valor2;
    }

    division(){
        return this.valor1/this.valor2;
    }
}

const x = prompt("Ingrese el valor 1","");
const y = prompt("Ingrese el valor 2","");

const calculadora = new Calculadora(x,y);

console.log(calculadora.suma());
console.log(calculadora.resta());
console.log(calculadora.multiplicacion());
console.log(calculadora.division());