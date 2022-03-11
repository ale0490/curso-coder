let tamañoG = "Grande";
let tamañoC = "Chica";
let pesoGrande = "2kg";
let pesoChica = "1kg";
let descuento = 0.9;
let cantidad;
let precioTotal = 0;
let contador = 0;
let listaProductosMenu = "Estos son nuestros productos. ¿Que desea comprar?";
var i = 0 ; 

class Producto {
    constructor (nombre, precioGrande, precioChica){
        this.Nombre = nombre;
        this.Grande = precioGrande;
        this.Chica = precioChica;
    }
}

const producto1 = new Producto("Torta Matilda",     2500, 1500);
const producto2 = new Producto("Torta Oreo",        2000, 1200);
const producto3 = new Producto("Torta Flan",        2250, 1350);
const producto4 = new Producto("Torta de Frutillas",   2050, 1300);
const producto5 = new Producto("Torta Marquise de Frutos Rojos",    2300, 1300);
const producto6 = new Producto("Torta Selva Negra", 2400, 1250);

const pasteleria = [producto1, producto2, producto3, producto4, producto5, producto6];

pasteleria.push(new Producto ("Alfajores de Maicena", 1200, 600 ))
pasteleria.push(new Producto ("Alfajores Clasicos", 1200, 600 ))
pasteleria.push(new Producto ("Alfajores Santafecinos", 1200, 600 ))
pasteleria.push(new Producto ("Macarons", 1200, 600 ))
pasteleria.push(new Producto ("Conitos de Dulce de Leche", 1200, 600 ))
pasteleria.push(new Producto ("Tabletas de chocolate", 1200, 600 ))
pasteleria.push(new Producto ("Crumble de manzana", 1200, 600 ))
pasteleria.push(new Producto ("Pastafrola", 1200, 600 ))
pasteleria.push(new Producto ("Tarta Toffee", 1200, 600 ))
pasteleria.push(new Producto ("Tarta de Ricota", 1200, 600 ))
pasteleria.push(new Producto ("Cupcakes", 1200, 600 ))
pasteleria.push(new Producto ("Muffins", 1200, 600 ))

const contenedor = document.querySelectorAll(".boton");

contenedor.forEach((torta) => {
    torta.innerHTML=`<h3> ${pasteleria[i].Nombre}</h3>
                    <button class= "boton-agregar" onclick= "agregar();" > AGREGAR AL CARRITO </button>`;
    i ++ ;
});

var clic = 0;
function agregar(){
    document.getElementsByClassName(".boton-agregar")
    if(clic==0){
        document.getElementById("aasd").style.display = "block";
        clic = clic + 1; 
        console.log("Hola!")
    }
    else{
    document.getElementById("aasd").style.display = "none";      
    clic = 0;
    console.log("Chau!")
    }
}

//Todavia no borre el codigo de abajo por si llego a usar alguna funcion


// for (const tortas of pasteleria){
//    contador++
//    listaProductosMenu += "\n" + contador + "- " + tortas.Nombre 
// }

// function listaProductos() {
//     let opcion = prompt (listaProductosMenu + "\n7 - Continuar sin agregar \n8 - Salir");
//     switch (opcion){
//         case "1":
//             tamaño(pasteleria[0].Grande, pasteleria[0].Chica);
//             break;
//         case "2":
//             tamaño(pasteleria[1].Grande, pasteleria[1].Chica);
//             break;
//         case "3":
//             tamaño(pasteleria[2].Grande, pasteleria[2].Chica);
//             break;
//         case "4":
//             tamaño(pasteleria[3].Grande, pasteleria[3].Chica);
//             break;
//         case "5":
//             tamaño(pasteleria[4].Grande, pasteleria[4].Chica);
//             break;
//         case "5":
//             tamaño(pasteleria[5].Grande, pasteleria[5].Chica);
//             break;
//         case "7":
//             calcularTotal();
//             break;
//         case "8":
//             break;
//         default:
//             alert("Opcion Incorrecta");
//             listaProductos();
//             break;
//     }
// }

// function buscar() {
// 	let buscarTorta = prompt("Ingrese la torta que desea buscar ");
// 	const buscado = pasteleria.filter((torta) => {
//         return torta.Nombre.toString().toLowerCase().includes(buscarTorta.toLowerCase());
// 	});
// 	buscado.forEach((item) => {
// 		alert(item.Nombre + "\n Grande " + item.Grande + "\n Chica " + item.Chica);
// 	});
// }

// function confirmar(precio){
//     cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
//     if (cantidad >= 3) {
//         calcularSubTotal(precio, cantidad, descuento)
//         }
//     else{
//         calcularSubTotal(precio,  cantidad, 1)
//     }
//     agregar();
// }

// function calcularSubTotal(cantidad, precio, des){
//     let subtotal = cantidad * precio * des;
//     precioTotal+= subtotal;
//     console.log("el subtotal es $ " + subtotal)
// }

// function calcularTotal(){
//     alert ("El precio de su compra es de : $ " + precioTotal)
//     console.log("El precio de su compra es de: $ " + precioTotal)
// }

// function agregar(){
//     let opcion = prompt ("¿Desea agregar algo mas? \n1 - Si \n2 - No");
//     switch(opcion){
//         case "1":
//             listaProductos();
//             break;
//         case "2":
//             calcularTotal();
//             break;
//         default:
//             alert("Opcion Incorrecta");
//             agregar();
//             break;
//     }
// }

// function grande(Grande){
//     let opcion = prompt ("El tamaño grande pesa " + pesoGrande + " y cuesta $ " + Grande + "\n1 - Confirmar \n2 - Cancelar");
//     switch(opcion){
//         case "1":
//             confirmar(Grande);
//             break;
//         case "2":
//             menu();
//             break;
//         default:
//             alert("Opcion Incorrecta");
//             grande();
//             break;
//     }
// }

// function chica(Chica){
//     let opcion = prompt ("El tamaño chico pesa " + pesoChica + " y cuesta $" + Chica + "\n1 - Confirmar \n2 - Cancelar");
//     switch(opcion){
//         case "1":
//             confirmar(Chica);
//             break;
//         case "2":
//             menu();
//             break;
//         default:
//             alert("Opcion Incorrecta");
//             chica();
//             break;
//     }
// }

// function tamaño(Grande, Chica){
//     let opcion = prompt("Que tamaño desea: \n1 - " + tamañoG + "\n2 - " + tamañoC + "\n3 - Cancelar");
//     switch(opcion){
//         case "1":
//             grande(Grande);
//             break;
//         case "2":
//             chica(Chica);
//             break;
//         case "3":
//             listaProductos();
//             break;
//         default:
//             alert("Opcion Incorrecta");
//             menu();
//             break;
//     }
// }

// function menu (){
//     let opcion = prompt("Que desea hacer: \n1 - Lista de productos \n2 - Buscar un producto \n3 - Salir");
//     switch(opcion){
//         case "1":
//             listaProductos();
//             break;
//         case "2":
//             buscar();
//             break;
//         case "3":
//             break;
//         default:
//             alert("Opcion Incorrecta");
//             menu();
//             break;
//     }
// }

// menu()