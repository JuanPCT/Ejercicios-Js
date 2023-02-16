
class Agenda{
    constructor(){
        this.contactos = [];
    }

    añadirContacto(nombre,telefono,email){
        this.contactos.push(new Contacto(nombre,telefono,email));
    }

    listaDeContactos(){
        this.contactos.map(contacto => {
            console.log(contacto.toString());
        })
    }

    buscarContacto(nombre){
        this.contactos.map(contacto => {
            if (contacto.nombre == nombre) {
                return contacto;
            }
        })
        return "El contacto no esta registrado";
    }

    editarContacto(nombre, contacto){
        let contactoOrig = this.buscarContacto(nombre);
        if(typeof contactoOrig === 'object'){
            this.contactos.splice(this.contactos.indexOf(contactoOrig)-1,1);
            this.contactos.push(contacto);
        }
    }
}

class Contacto{
    constructor(nombre,telefono,email){
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }

    toString(){
        return "Nombre: "+this.nombre+" Telefono: "+this.telefono+" Email: "+this.email;
    }
}