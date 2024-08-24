class Libro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
  }
  
  class Biblioteca {
    libros = [];
  
    constructor() {
      this.libros = [];
    }
  
    ingresarLibros(libro) {
      this.libros.push(libro);
    }
  
    verLibros() {
      this.libros.forEach((libro) => {
        console.log(`Título: ${libro.titulo}`);
        console.log(`Autor: ${libro.autor}`);
      });
    }
  }
  
  const Persona1 = new Libro("Memoria de mis putas tristes", "Gabriel Garcia Marquez");
  const Persona2 = new Libro("El cuervo", "Edgar Allan Poe");
  const Persona3 = new Libro("La biblia de los caídos", "Fernando Trujillo Sanz");
  
  const BibliotecaPer = new Biblioteca();
  
  BibliotecaPer.ingresarLibros(Persona1);
  BibliotecaPer.ingresarLibros(Persona2);
  BibliotecaPer.ingresarLibros(Persona3);
  
  BibliotecaPer.verLibros();
  