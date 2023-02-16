
class Cuenta{

    constructor(titular){
        this.titular = titular;
    }

    constructor(titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;
    }

    getTitular(){
        return this.titular;
    }

    getCantidad(){
        return this.cantidad;
    }

    setTitular(titular){
        this.titular = titular;
    }

    setCantidad(cantidad){
        this.cantidad = cantidad;
    }

    ingresar(cantidad){
        if(cantidad >= 0)
            this.cantidad += cantidad;
    }

    retirar(cantidad){
        if(this.cantidad - cantidad < 0){
            this.cantidad = 0;
        }
        else{
            this.cantidad -= cantidad;
            
        }
        return this.cantidad;
    }
}