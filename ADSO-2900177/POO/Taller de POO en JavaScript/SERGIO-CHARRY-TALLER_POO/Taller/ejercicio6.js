class Libro {
    constructor(titulo,autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    detalle(){
        console.log(`Titulo: ${this.titulo} autor: ${this.autor}`);
    }

}
const libro1 = new Libro('Cien años de soledad','Garcias Marquez');
const libro2 = new Libro('1984','George Orwell');
const libro3 = new Libro('Orgullo y prejuicio','Jane Austen');

libro1.detalle();
libro2.detalle();
libro3.detalle();