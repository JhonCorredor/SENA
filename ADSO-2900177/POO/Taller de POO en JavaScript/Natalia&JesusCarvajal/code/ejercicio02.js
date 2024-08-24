class Libro{
    _titulo = 'Cronicas de una muerte anunciada';
    _autor = 'Gabriel Garcia Marquez';

    constructor(titulo = this._titulo, autor = this._autor){
        this._titulo = titulo;
        this._autor = autor;
    }
}


let objetLibro = new Libro();

console.log(objetLibro._titulo);
console.log(objetLibro._autor);


objetLibro._autor = 'Natalia';
objetLibro._titulo = 'Los pescados';


console.log(objetLibro._titulo);
console.log(objetLibro._autor);