class Persona{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    describir(){
    return `nombre de la persona ${this.nombre} y la edad ${this.edad}`
    }
}
class estudiante extends Persona{
    constructor(grado,nombre,edad){
        super(nombre,edad)
        this.grado = grado
    }
    estudiar(){
        return "Estoy estudiando"
    }
    describir(){
        return super.describir() + " "+this.grado
    }
}

const persona1 = new Persona("juan","18")
const estudiante1 = new estudiante("octavo","ricardo","18")

console.log(persona1.describir())
console.log(estudiante1.describir())