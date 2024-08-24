//Sergio - Charry

class Persona {
  constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
  }
}

const persona1 = new Persona("sergio", 22);
console.log(`Nombre: ${persona1.nombre}, Edad: ${persona1.edad}`);
