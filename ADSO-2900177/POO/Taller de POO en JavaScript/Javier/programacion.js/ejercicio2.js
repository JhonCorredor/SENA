class Persona{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
        return "hola "+this.nombre
    }
}


const persona1 = new Persona("juan","20")
console.log(persona1.saludar())