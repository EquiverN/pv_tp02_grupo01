function promedio(sumaTotal, cantidad) {
    if (cantidad != 0) {
        return sumaTotal / cantidad
    } else {
        return "Error"
    }

}






function main() {
    let sumaTotal = 0

    for (let index = 0; index < 3; index++) {
        let num = parseInt(prompt("Ingrese el valor del numero "))
       sumaTotal += num
    }

    alert("El promedio de los numeros ingresados es: " + promedio(sumaTotal, 3))

}
main()

