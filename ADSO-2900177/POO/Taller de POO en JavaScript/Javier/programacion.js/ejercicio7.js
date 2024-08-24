class biblioteca {
constructor() {
    this.lista_libro = [];
}
ingreso_libros(libros){
    this.lista_libro.push(libros)
}
mostrar(){
    return this.lista_libro
}
}

const libros1 =  new biblioteca()
libros1.ingreso_libros("cien años de soledad")
libros1.ingreso_libros("don quijote")
libros1.ingreso_libros("la sirenita")
console.log(libros1.mostrar())