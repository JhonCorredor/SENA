class persona {

    #nombre;
    #edad;
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    getnombre(){return this.#nombre;}
    setnombre(nuevoNombre){this.#nombre = nuevoNombre}

    getedad(){return this.#edad;}
    setedad(nuevoEdad){this.#edad = nuevoEdad}

    saludar() {
      console.log(`Hola, mi nombre es ${this.#nombre} y tengo ${this.#edad} años`);
    }

  }

  const persona1 = new persona('sergio',22);
 
  persona1.saludar();

  console.log(persona1.getnombre());
  persona1.setnombre('charry');
  console.log(persona1.getnombre());

  console.log(persona1.getedad());
  persona1.setedad(29);
  console.log(persona1.getedad());
