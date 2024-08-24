
class Persona { //Define una clase Persona con los atributos nombre y edad.
    #nombre;  //Modifica la clase Persona para que los atributos nombre y edad sean privados.
    #edad;   //Modifica la clase Persona para que los atributos nombre y edad sean privados.


    //punto 3 Implementa métodos públicos para acceder y modificar estos atributos. y Usa estos métodos para modificar e imprimir los atributos de persona1.
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }


    getNombre() {
        return this.#nombre;
    }

    getEdad() {
        return this.#edad;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setEdad(edad) {
        this.#edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.#nombre} y tengo ${this.#edad} años.`);//punto 2 Extiende la clase Persona para que incluya un método saludar() que imprima un saludo personalizado en la consola.
    }

    describir() {
        return `Soy ${this.#nombre} y tengo ${this.#edad} años.`;
    }
}

// punto 2 Invoca el método saludar() desde el objeto persona1.
const persona1 = new Persona("Juan", 19);
persona1.setNombre("Juan");
persona1.setEdad(20);
console.log(`Nombre: ${persona1.getNombre()}`);
console.log(`Edad: ${persona1.getEdad()}`);


persona1.saludar();

//punto 4 Crea una clase Estudiante que herede de Persona.
class Estudiante extends Persona {
    #grado;
//punto 4 Agrega un atributo adicional grado y un método estudiar() que imprima el mensaje “Estoy estudiando”.
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.#grado = grado;
    }

    estudiar() {
        console.log("Estoy estudiando");
    }

    getGrado() {
        return this.#grado;
    }

    setGrado(grado) {
        this.#grado = grado;
    }
// punto 5 Añade un método describir() en Persona que imprima una descripción genérica.
    describir() {
        return `Soy ${this.getNombre()}, tengo ${this.getEdad()} años y estoy en el grado ${this.#grado}.`;
    }
}
// ounto 4 Crea un objeto estudiante1 y demuestra la funcionalidad de herencia y los métodos específicos de Estudiante.
// punto 5 Sobrescribe el método describir() en Estudiante para que incluya la información de grado.
const estudiante1 = new Estudiante("Bata", 17, "once");
estudiante1.saludar();
estudiante1.estudiar();


console.log(persona1.describir());
console.log(estudiante1.describir());
