
class Contador{
    constructor(contador){
        this.contador = contador;
    }

    setContador(contador){
        this.contador = contador;
    }

    getContador(){
        return this.contador;
    }

    incrementar(){
        this.contador++;
    }

    decrementar(){
        this.contador--;
    }
}