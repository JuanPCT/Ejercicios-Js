
class Alumno{

    constructor(nombre,nota){
        this.nombre = nombre;
        this.nota = nota;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setNota(nota){
        this.nota = nota;
    }

    getNombre(){
        return this.nombre;
    }

    getNota(){
        return this.nota;
    }

    aprobo(){
        if (this.nota >= 3) {
            return "aprobo"
        }else{
            return "reprobo"
        }
    }

    resultados(){
        return "El alumno "+this.getNombre+" tuvo la nota "+this.getNota+" por lo tanto "+this.aprobo();
    }
    
}