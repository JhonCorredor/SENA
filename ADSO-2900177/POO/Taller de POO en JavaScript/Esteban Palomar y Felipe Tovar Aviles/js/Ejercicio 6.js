/**
 * POO - Constructores Múltiples (Simulación)
 * Autores: Ruben Felipe Tovar Aviles y Esteban Palomar Murcia
 * Fehca: 22 de agosto del 2024
 */

class libro {
    #nombre
    #autor
    
    constructor(nombre="No hay libro en este campo", autor="No se ha encontrado un autor"){
        this.#nombre = nombre;
        this.#autor = autor;
    }

    // metodo get para nombre del libro y autor 
    getNombre(){
        return this.#nombre;
    }
    getAutor(){
        return this.#autor;
    }

    // metodo set para nombre del libro y autor
    setNombre(nuevoNombre){
        return this.#nombre = nuevoNombre;
    }
    setAutor(nuevoAutor){
        return this.#autor=nuevoAutor;
    }

    // Mostrar la el libro
    mostrarLibro(){
        return "Libro: "+ this.#nombre + " -- Autor: " + this.#autor; 
    }
}

class bibioteca{
    #libros

    constructor(){
        this.#libros = [];
    }

    // metodo get para libros
    getLibros(){
        return this.#libros;
    }

    // metodo para añadir los libros a la lista
    agregarLibro(libro){
        return this.#libros.push(libro);
    }

    // metodo para mostrar la lista de libros
    listaLibros(){
        console.log("Los libros de la lista son: ")

        // mostrar tabla
        for (let iterar=0; iterar < this.#libros.length; iterar++){
            console.log((iterar+1.) + ". " + this.#libros[iterar].mostrarLibro());
        }
    }
}

const bibioteca1 = new bibioteca();

const libro1 = new libro("Don Quijote", "Miguel de Servantes");
const libro2 = new libro("La Biblia");
const libro3 = new libro();
const libro4 = new libro("Leer es Resistir", "Mario Mendoza");

// agregar los libros a la biblioteca
bibioteca1.agregarLibro(libro1);
bibioteca1.agregarLibro(libro2);
bibioteca1.agregarLibro(libro3);
bibioteca1.agregarLibro(libro4);

// mostrar biblioteca por consola
console.log(bibioteca1.listaLibros())

