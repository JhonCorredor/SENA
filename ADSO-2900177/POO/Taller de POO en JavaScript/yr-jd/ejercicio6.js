class libros{
constructor(autor="autor desconocido",titulo="titulo desconocido"){
    this.titulo = titulo
    this.autor = autor
}
libro(autor,titulo){
    this.autor = autor
    this.titulo = titulo
}
mostrar(){
    return `El libro ${this.titulo} fue escrito por ${this.autor}`
}
}

const libro1  = new libros()
const libro2  = new libros("neiva","la llorona")
console.log(libro1.mostrar())
console.log(libro2.mostrar())