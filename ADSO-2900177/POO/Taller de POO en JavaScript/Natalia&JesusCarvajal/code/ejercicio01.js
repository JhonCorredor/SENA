class Persona{
    #_nombre;
    #_edad;

    constructor(nombre,edad){
        this.#_nombre = nombre;
        this.#_edad = edad;
    }

    getEdad(){
        return this.#_edad;
    }
    
    getNombre(){
        return this.#_nombre;
    }

    setNombre(nombre){
        this.#_nombre = nombre;
    }

    setEdad(edad){
        this.#_edad = edad;
    }


    saludar(){
        return `Hola, ¿como estas ${this.#_nombre}?`;
    }

    describir(){
        return `Hola en este mensaje describimos`;
    }

}

class Estudiantes extends Persona{
    _grado;

    constructor(_grado){
        super('Jhon', 45);
        this._grado = _grado;
    }


    describir(){
        return `Yo ${this.getNombre()} estoy en el grado (${this._grado})`;
    }

    estudiar(){
        return `Estoy estudiando`;
    }
}

// instancia del la clase persona
let personal = new Persona('Jesus', 18);  // inicializar valores de las propiedades constructor
// instancia del la clase Estudiantes
let estudiantel = new Estudiantes(8); // inicializar valores de las propiedades constructor

// metodo publico para obtener la edad : class Pesona
console.log(personal.getEdad())
// metodo publico para obtener la Nombre : class Pesona
console.log(personal.getNombre())

// metodo publico para modificar la propiedad de nombre : class Persona
personal.setNombre('Natalia');

// metodo publico para modificar la propiedad de edad : class Persona
personal.setEdad(23);

// metodo publico para obtener la edad : class Pesona
console.log(personal.getEdad())
// metodo publico para obtener la Nombre : class Pesona
console.log(personal.getNombre())

// ejemplo de herencia Estudiantes - Persona
console.log(estudiantel.getNombre())
// metodo publico para obtener la edad : class Estudiantes
console.log(estudiantel.estudiar())
// metodo publico : class Persona
console.log(personal.describir())
// Ejemplo de sobre escribir un metodo de la clase Persona
console.log(estudiantel.describir())

