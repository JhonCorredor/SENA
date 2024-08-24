class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }
  
  class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
      super(nombre, edad);
      this.grado = grado;
    }
  
    estudiar() {
      return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años, estoy en el grado ${this.grado}.`;
    }
  }
  
  const estudiante2 = new Estudiante("Juan", 5, "Octavo");
  console.log(estudiante2.estudiar());
  