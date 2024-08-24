class persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    describir(){
        console.log('soy alto de pelo mono');
    }
    saludar() {
      console.log(`¡Hola!, soy ${this.nombre} y tengo ${this.edad} años`);
    }
  }
  const persona1 = new persona('sergio',20)

class estudiante extends persona {
    constructor(nombre,edad,grado){
        super(nombre,edad);
        this.grado = grado;
    }


    describir(){
        console.log('Analisis y desarrolo de software');
    }
    estudiar(){
        console.log('Estoy estudiando');
    }

}

const estudiante1 = new estudiante('sergio',20,'ADSO');

persona1.describir()
estudiante1.describir()
  