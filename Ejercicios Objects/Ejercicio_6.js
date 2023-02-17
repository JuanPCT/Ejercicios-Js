
class Triangulo{

    constructor(lado1,lado2,lado3){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    ladoMayor(){
        if(this.lado1>=this.lado2&&this.lado1>=this.lado3){
            return "El lado mayor es el lado1 con "+this.lado1+"cm de largo";
        }
        if(this.lado2>=this.lado1&&this.lado2>=this.lado3){
            return "El lado mayor es el lado2 con "+this.lado2+"cm de largo";
        }
        if(this.lado3>=this.lado2&&this.lado3>=this.lado1){
            return "El lado mayor es el lado3 con "+this.lado3+"cm de largo";
        }
    }

    tipo(){
        if(this.lado1==this.lado2||this.lado2==this.lado3||this.lado1==this.lado3){
            return "isoceles";
        }
        if(this.lado1==this.lado2==this.lado3){
            return "equilatero";
        }
        return "escaleno";
    }
}

const triangulo = new Triangulo(3,4,5);
console.log(triangulo.lado1);

console.log(triangulo.ladoMayor());
console.log(triangulo.tipo());