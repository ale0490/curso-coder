let tamaño1 = "Grande";
let tamaño2 = "Chica";
let peso1 = "2kg";
let peso2 = "1kg";
let precioGrande = 2000;
let precioChica = 1200;
let descuento = 0.9;
let cantidad;
let precioTotal = 0;

class Producto {
    constructor (nombreValor, precioGrande, precioChica){
        this.Nombre = nombreValor;
        this.Grande = precioGrande;
        this.Chica = precioChica;
    }
}

const producto1 = new Producto("Torta Matilda", 2000, 1200)
const producto2 = new Producto("Torta Oreo", 2000, 1200)
const producto3 = new Producto("Torta Flan", 2000, 1200)
const producto4 = new Producto("Torta Frutillas", 2000, 1200)
const producto5 = new Producto("Torta Marquise", 2000, 1200)
const producto6 = new Producto("Torta Selva Negra", 2000, 1200)

const pasteleria = [producto1, producto2, producto3, producto4, producto5, producto6];

function listaProductos() {
    let opcion = prompt ("Estos son nuestros productos. \n ¿Que desea comprar? \n1 - " + pasteleria[0].nombre + "\n2 - " + pasteleria[1].nombre + "\n3 - " + pasteleria[2].nombre + "\n4 - " + pasteleria[3].nombre + "\n5 - " + pasteleria[4].nombre + "\n6 - Salir");
    switch (opcion){
        case "1":
            tamaño();
            break;
        case "2":
            tamaño();
            break;
        case "3":
            tamaño();
            break;
        case "4":
            tamaño();
            break;
        case "5":
            tamaño();
            break;
        case "6":
            break;
        default:
            alert("Opcion Incorrecta");
            listaProductos();
            break;
    }
} 

function confirmar(precio){
    cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
    if (cantidad >= 3) {
        calcularSubTotal(precio, cantidad, descuento)
        }
    else{
        calcularSubTotal(precio,  cantidad, 1)
    }
    agregar();
}

function calcularSubTotal(cantidad, precio, des){
    let subtotal = cantidad * precio * des;
    precioTotal+= subtotal;
    console.log("el subtotal es $ " + subtotal)
}

function calcularTotal(total){
    alert ("El precio de su compra es de : $ " + precioTotal)
    console.log("El precio de su compra es de: $ " + precioTotal)
}

function agregar(){
    let opcion = prompt ("¿Desea agregar algo mas? \n1 - Si \n2 - No");
    switch(opcion){
        case "1":
            listaProductos();
            break;
        case "2":
            calcularTotal();
            break;
        default:
            alert("Opcion Incorrecta");
            agregar();
            break;
    }
}

function grande(precioGrande){
    let opcion = prompt ("El tamaño grande pesa " + peso1 + " y cuesta " + precioGrande + "\n1 - Confirmar \n2 - Cancelar");
    switch(opcion){
        case "1":
            confirmar(precioGrande);
            break;
        case "2":
            menu();
            break;
        default:
            alert("Opcion Incorrecta");
            grande();
            break;
    }
}

function chica(precioChica){
    let opcion = prompt ("El tamaño chico pesa " + peso2 + " y cuesta " + precioChica + "\n1 - Confirmar \n2 - Cancelar");
    switch(opcion){
        case "1":
            confirmar(precioChica);
            break;
        case "2":
            menu();
            break;
        default:
            alert("Opcion Incorrecta");
            chica();
            break;
    }
}

function tamaño(){
    let opcion = prompt("Que tamaño desea: \n1 - " + tamaño1 + "\n2 - " + tamaño2 + "\n3 - Cancelar");
    switch(opcion){
        case "1":
            grande(precioGrande);
            break;
        case "2":
            chica(precioChica);
            break;
        case "3":
            cancelar();
            break;
        default:
            alert("Opcion Incorrecta");
            menu();
            break;
    }
}

function menu (){
    let opcion = prompt("Que desea hacer: \n1 - lista de productos \n2 - Salir");
    switch(opcion){
        case "1":
            listaProductos();
            break;
        case "2":
            break;
        default:
            alert("Opcion Incorrecta");
            menu();
            break;
    }
}

menu()