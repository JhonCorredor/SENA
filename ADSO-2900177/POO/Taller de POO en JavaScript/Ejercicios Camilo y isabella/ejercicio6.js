class Libro {

    constructor(titulo = "El cuervo", autor = "Edgar Allan Poe") {
      this.titulo = titulo;
      this.autor = autor;
    }
  
    Recomendacion() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
    }
  }
  
  const Persona1 = new Libro("100 años de soledad", "Gabo");
  const PersonaNumero2 = new Libro("Gabo");
  const Persona3 = new Libro();
  
  Persona1.Recomendacion();
  PersonaNumero2.Recomendacion();
  Persona3.Recomendacion();
  