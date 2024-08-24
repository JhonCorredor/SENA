class Persona {
    constructor(nombre, edad) {
      this._nombre = nombre;
      this._edad = edad;
    }
  
    describir() {
      return `Soy una persona llamada ${this._nombre}.`;
    }
  }
  
  class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
      super(nombre, edad);
      this.grado = grado;
    }
  
    describir() {
      return `Soy un estudiante llamado ${this._nombre}, tengo ${this._edad} años y estoy en el grado ${this.grado}.`;
    }
  }
  
  const persona1 = new Persona("Carlos", 30);
  console.log(persona1.describir());
  
  const estudiante1 = new Estudiante("Juan", 15, "Decimo");
  console.log(estudiante1.describir());
  