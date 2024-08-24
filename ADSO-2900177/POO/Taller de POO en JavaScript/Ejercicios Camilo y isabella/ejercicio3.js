class persona3{
    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad; 
    }

    get nombre(){
        return this._nombre;
    }

    get edad(){
        return this._edad;
    }
    saludar(){
        return `hola mi nombre es ${this.nombre} y tengo  ${this.edad}  años `
    }
}

const observar = new persona3("juan",5)
console.log(observar.saludar())
