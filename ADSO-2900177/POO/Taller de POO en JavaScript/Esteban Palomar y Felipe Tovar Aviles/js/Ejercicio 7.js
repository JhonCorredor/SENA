/**
 * POO - Relaciones de composición
 * Autores: Ruben Felipe Tovar Aviles y Esteban Palomar Murcia
 * Fehca: 22 de agosto del 2024
 */

class libro {
    
    #nombre
    
    constructor(nombre){
        this.#nombre = nombre;
    }

    // metodo get para nombre del libro
    getNombre(){
        return this.#nombre;
    }

    // metodo set para nombre del libro
    setNombre(nuevoNombre){
        return this.#nombre = nuevoNombre;
    }

    // Mostrar la el libro
    mostrarLibro(){
        return "Libro: "+ this.#nombre; 
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
        for(let iterar; iterar < this.#libros.length; iterar++){
            console.log((iterar+1.) + ". " + this.#libros[iterar].mostrarLibro())
        }
        this.#libros.forEach((libro,iterar) => {
            console.log((iterar+1.) + ". " +libro.mostrarLibro());
        });
    }
}

const bibioteca1 = new bibioteca();

const libro1 = new libro("Don Quijote");
const libro2 = new libro("La Biblia");
const libro3 = new libro("Historia de dos ciudades");
const libro4 = new libro("Leer es Resistir");

// agregar los libros a la biblioteca
bibioteca1.agregarLibro(libro1);
bibioteca1.agregarLibro(libro2);
bibioteca1.agregarLibro(libro3);
bibioteca1.agregarLibro(libro4);

// mostrar biblioteca por consola
console.log(bibioteca1.listaLibros())

