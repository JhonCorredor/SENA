//Definición de clases y objetos

class persona{
    constructor (nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }
    mostrar (){
        return `nombre:${this.nombre} edad:${this.edad}`
    }
}
var persona1 = new persona("jair",24)
console.log(persona1.mostrar())

// //Metodos de clases

class personal{
    constructor (nombre1,edad1){
        this.nombre1=nombre1
        this.edad1=edad1
    }
    mostrar1 (){
        return `nombre:${this.nombre1} edad:${this.edad1}`      
    }
    saludar(){
        return `Hola Buenos dias ${this.nombre1}`
    }
}
var persona2 = new personal("jair",24)
console.log(persona2.mostrar1())
console.log(persona2.saludar())

//Encapsulamiento 

class Persona {
    nombre3;
    edad3;
    constructor(nombre, edad) {
      this.nombre3 = nombre;
      this.edad3 = edad;
    }
    getNombre() {
      return this.nombre3;
    }
    getEdad() {
      return this.edad3;
    }
    setNombre(nombre) {
      this.nombre3 = nombre;
    }
  
    setEdad(edad) {
      this.edad3 = edad;
    }
  }
  const persona3 = new Persona('Carlos', 40);
  console.log(persona3.getNombre()); 
  console.log(persona3.getEdad()); 
  persona3.setNombre('María');
  persona3.setEdad(35);
  console.log(persona3.getNombre());
  console.log(persona3.getEdad());
  

// Herencia

class Personaq{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
}
class estudiante0 extends Personaq{
    constructor(grado,nombre,edad){
        super(nombre,edad)
        this.grado = grado
    }
    estudiar(){
        return "Estoy estudiando"
    }
}

const estudiante1 = new estudiante0("octavo","andres","120")
console.log(estudiante1)
console.log(estudiante1.estudiar())

// Polimorfismo

class Persona4 {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    describir() {
      console.log(`Soy una persona y me llamo ${this.nombre}`);
    }
  }
  class Estudiante1 extends Persona4 {
    constructor(nombre, edad, grado) {
      super(nombre, edad);
      this.grado = grado;
    }
    describir() {
      console.log(`Soy un estudiante de ${this.grado} y me llamo ${this.nombre}`);
    }
  }
  
  const personar = new Persona4('Luis', 30);
  const estudiante = new Estudiante1('Ana', 22, 'Tercer Año');
  
  personar.describir();
  estudiante.describir();
  
// Constructores Multiples

class Libro1 {
    constructor(titulo = 'Desconocido', autor = 'Anónimo') {
      this.titulo = titulo;
      this.autor = autor;
    }
  
    detalles() {
      console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
  }
  
  const libro1 = new Libro1();
  const libro2 = new Libro1('Hamlet', 'William shakespiare');
  
  libro1.detalles();
  libro2.detalles();

//  Relaciones de Composición

class Libro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
  }
  
  class Biblioteca {
    constructor() {
      this.libros = [];
    }
  
    añadirLibro(libro) {
      this.libros.push(libro);
    }
  
    mostrarLibros() {
      this.libros.forEach(libro => console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`));
    }
  }
  const libro3 = new Libro('Don Quijote', 'Miguel de Cervantes');
  const libro4 = new Libro('Hamlet', 'William Shakespeare');
  
  const biblioteca = new Biblioteca();
  biblioteca.añadirLibro(libro1);
  biblioteca.añadirLibro(libro2);
  biblioteca.mostrarLibros();
  
// Abstracción

class FiguraGeometrica {
    calcularArea() {
      throw new Error('Este método debe ser implementado por una subclase');
    }
  }
  
  class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
      super();
      this.lado = lado;
    }
  
    calcularArea() {
      return this.lado * this.lado;
    }
  }
  
  class Circulo extends FiguraGeometrica {
    constructor(radio) {
      super();
      this.radio = radio;
    }
  
    calcularArea() {
      return Math.PI * this.radio * this.radio;
    }
  }
  
  const cuadrado = new Cuadrado(4);
  const circulo = new Circulo(3);
  
  console.log(`Área del cuadrado: ${cuadrado.calcularArea()}`);
  console.log(`Área del círculo: ${circulo.calcularArea()}`);
  