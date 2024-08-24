class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    detalle() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
}


class Biblioteca extends Libro{
    constructor(titulo, autor) {
        super(titulo, autor);
        this.libros = [];
    }

    añadir(libro) {
        this.libros.push(libro);
    }

    mostrarLibros() {
        this.libros.forEach((libro) => {
            libro.detalle()
        });
    }
}


const libro1 = new Libro('Cien años de soledad','Garcias Marquez');
const libro2 = new Libro('1984','George Orwell');
const libro3 = new Libro('Orgullo y prejuicio','Jane Austen');


const biblioteca = new Biblioteca();
biblioteca.añadir(libro1);
biblioteca.añadir(libro2);
biblioteca.añadir(libro3);


biblioteca.mostrarLibros();

