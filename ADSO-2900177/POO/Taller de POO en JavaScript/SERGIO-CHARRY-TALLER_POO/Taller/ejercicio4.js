class persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
      console.log(`¡Hola!, soy ${this.nombre} y tengo ${this.edad} años`);
    }
  }


class estudiante extends persona {
    constructor(nombre,edad,grado){
        super(nombre,edad);
        this.grado = grado;
    }

    estudiar(){
        console.log('Estoy estudiando');
    }
}

const estudiante1 = new estudiante('sergio',22,'6to grado');

estudiante1.saludar();
estudiante1.estudiar();
  