class Biblioteca{
    _libros = [];

    constructor(libros){
        this._libros = libros;
    }

    addLibros(libro){
        this._libros.push(libro);
    }

    mostrarLibro(){
        let infoLibros = "";
        this._libros.forEach((infLibro)=>{
            infoLibros += `================\n`
            infoLibros += `titulo del libro: ${infLibro._titulo}\n`;
            infoLibros += `Autor del libro: ${infLibro._autor}\n`;
        });
        return infoLibros;
    }
}

class Libro{
    _titulo;
    _autor;

    constructor(titulo, autor){
        this._titulo = titulo;
        this._autor = autor;
    }
}

// sistema de libros
let libro1 = new Libro('Cronicas de una muerte anunciada', 'Gabriel garcia Marquez');
let libro2 = new Libro('La vida de Natalia', 'Natalia Osorio');
let libro3 = new Libro('La tia julia', 'Maria vargas llosa');
let libro4 = new Libro('Hecha de estrellas', 'Ashley');

let libroAdd = new Libro('La vida de Jesus', 'Jesus Carvajal')

let listLibros = [
    libro1,
    libro2,
    libro3,
    libro4,
];

let biblioteca = new Biblioteca(listLibros);

console.log('====== Biblioteca con 4 libros ======')
console.log(biblioteca.mostrarLibro());


console.log(`Se agrego el libro\n`)
biblioteca.addLibros(libroAdd);

console.log('====== Biblioteca con 5 libros ======')
console.log(biblioteca.mostrarLibro());

