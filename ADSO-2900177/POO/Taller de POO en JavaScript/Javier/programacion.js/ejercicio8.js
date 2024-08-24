
class fijuraGeometrica {
constructor(lado,radio) {
    this.lado = lado
    this.radio = radio
}
calcularArea(){}
}

class cuadrado extends fijuraGeometrica{
constructor(lado="No contiene ningun numero por lo tanto no se puede implementar el area de cuadrado"){
    super()
    this.lado = lado
}
calcularArea(){
    return "tu area del cuadrado es: "+(this.lado*this.lado);
}
}
class circulo extends fijuraGeometrica{
constructor(radio="No contiene ningun numero por lo tanto no se puede implementar el area de circulo"){
    super()
    this.radio = radio
}
calcularArea(){
    return "tu area del circulo es: " +(Math.PI*this.radio**2);
}

}
const cuadrado1 = new cuadrado(10)
const cuadrado2 = new cuadrado()
console.log(cuadrado1.calcularArea())
console.log(cuadrado2)
const circulo1 = new circulo(21)
const circulo2 = new circulo()
console.log(circulo1.calcularArea())
console.log(circulo2)