class Persona {
    #nombre;  
    #edad;   

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
        console.log(`Hola, mi nombre es ${this.#nombre} y tengo ${this.#edad} años.`);
    }

    describir() {
        return `Soy ${this.#nombre} y tengo ${this.#edad} años.`;
    }
}

const persona1 = new Persona("Juan", 19);
persona1.setNombre("Juan");
persona1.setEdad(20);
console.log(`Nombre: ${persona1.getNombre()}`);
console.log(`Edad: ${persona1.getEdad()}`);


persona1.saludar();


class Estudiante extends Persona {
    #grado;

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

    describir() {
        return `Soy ${this.getNombre()}, tengo ${this.getEdad()} años y estoy en el grado ${this.#grado}.`;
    }
}

const estudiante1 = new Estudiante("Bata", 17, "once");
estudiante1.saludar();
estudiante1.estudiar();


console.log(persona1.describir());
console.log(estudiante1.describir());
