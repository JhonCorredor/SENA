class Persona{
    constructor(nombre,edad){
        this._nombre = nombre
        this._edad = edad
        let privado_edad = edad
        this.mostrarEdad= function(){
            return privado_edad
        }
        let privado_nombre = nombre
        this.mostrarNombre = function(){
            return  privado_nombre
        }
    }
    
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }




    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad
    }
}


const persona1 = new Persona("juan","20")
console.log(persona1)
persona1.nombre = "yerson"
persona1.edad = "19"

console.log(persona1)
console.log(persona1.mostrarEdad())
console.log(persona1.mostrarNombre())