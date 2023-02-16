
class Persona{

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

    setEdad(edad){
        this.edad = edad;
    }

    getEdad(){
        return this.edad;
    }

    esMayorDeEdad(){
        if(this.edad>=18){
            return " es mayor de edad";
        }else{
            return " es menor de edad";
        }
    }

    mostrarDatos(){
        return "La Persona del nombre "+this.getNombre()+this.esMayorDeEdad();
    }
}

const persona = new Persona("Juan", 19);
console.log(persona.mostrarDatos());