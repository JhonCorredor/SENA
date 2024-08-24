    //Clase y objeto
class persona {
    constructor(nombre, edad) {
        this.nombre = nombre; //Privado
        this.edad = edad; //Privado
    }
    //Encapsulamiento
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }
    getNombre() {
        return this.nombre;
    }
    setEdad(nuevaEdad) {
        if (nuevaEdad >= 0) {
            this.edad = nuevaEdad;
        }
    }
    getEdad() {
        return this.edad;
    }
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
    //Poliformismo
    describir(){
        return `soy ${this.nombre} y tengo ${this.edad} años`;
    }
}
//Herencia
class estudiante extends persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }
    estudiar() {
        return "Estoy estudiando";
    }
    //Poliformismo
    describir(){
        return `soy ${this.nombre}, tengo ${this.edad} años y estoy en ${this.grado} grado`;
    }
}

//Relacion de composicion
class Biblioteca {
    constructor() {
        this.libros = [];
    }

    anadirLibro(nombreLibro) {
      return  this.libros.push(nombreLibro);
    }

    mostrarLibros() {
        if (this.libros.length === 0) {
            return "No hay libros en la biblioteca.";
        }
        return `Lista de libros: ${this.libros.join(", ")}`;
    }
}

class libro extends Biblioteca {
    constructor(autor,titulo,libros) {
        super(libros);
        this.lista = [];
        this.autor = autor;
        this.titulo = titulo;
    }

    anadirDatos(autor, titulo,libros) {
        this.lista.push({'name':this.autor,'titulo':this.titulo,'libro':this.libros});
        return this.lista;
    }
}

//Abstraccion
class FiguraGeometrica {
    constructor(calcularArea) {
        this.calcularArea = calcularArea
    }
}

class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super(calcularArea); 
        this.lado = lado;
    }

    calcularAreaCUA() {
        let area = this.lado * this.lado
        return area;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super(calcularArea); 
        this.radio = radio;
    }

    calcularAreaCIR() {
        return Math.PI * this.radio * this.radio;
    }
}

const persona1 = new persona("Jorge", 17);
const persona2 = new persona("Ingrid", 18);
const estudiante1 = new estudiante("Yerson", 19, 8);
const biblioteca = new Biblioteca();
const calcularArea = new FiguraGeometrica();

//Clase y objeto
console.log(persona1.saludar());
console.log(persona2.saludar());

//Encapsulamiento
persona1.Edad = 18;
console.log(persona1.saludar());
persona2.Nombre = "Yulisa";
console.log(persona2.saludar())
console.log(persona1.Edad);
console.log(persona2.Nombre);

//Herencia
//Poliformismo
console.log(persona1.describir())
console.log(estudiante1.estudiar())
console.log(estudiante1.describir())

//Relacion de compoisicion
console.log(biblioteca.mostrarLibros());
biblioteca.anadirLibro("El Quijote");
console.log(biblioteca.mostrarLibros());
biblioteca.anadirLibro("Cien años de soledad");
console.log(biblioteca.mostrarLibros());

const libros = new libro('lolo','juan','la loca');
console.log(libros.anadirDatos('lolo','juan','la loca'));

//Abstraccion
const cuadrado = new Cuadrado(4);
console.log(`Área del cuadrado: ${cuadrado.calcularAreaCUA()}`);

const circulo = new Circulo(5);
console.log(`Área del círculo: ${circulo.calcularAreaCIR()}`);