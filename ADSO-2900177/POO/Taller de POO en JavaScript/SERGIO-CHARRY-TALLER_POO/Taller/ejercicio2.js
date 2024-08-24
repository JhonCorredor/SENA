class persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  }
}

const persona1 = new persona("sergio", 22);
persona1.saludar();
