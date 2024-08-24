class Persona{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
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
}

const estudiante1 = new estudiante("octavo","andres","120")
console.log(estudiante1)
console.log(estudiante1.estudiar())