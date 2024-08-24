class persona2{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad; 
    }

    saludar(){
        return `hola mi nombre es ${this.nombre} y tengo  ${this.edad}  años `
    }
}

const Ver = new persona2("juan",5)
console.log(Ver.saludar())