let tamaño1 = "Grande";
let tamaño2 = "Chica";
let peso1 = "2kg";
let peso2 = "1kg";
let precio1 = 2000;
let precio2 = 1200;
let descuento = 0.9;
let cantidad;
let precioTotal = 0;

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
            menu();
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

function grande(precio1){
    let opcion = prompt ("El tamaño grande pesa " + peso1 + " y cuesta " + precio1 + "\n1 - Confirmar \n2 - Cancelar");
    switch(opcion){
        case "1":
            confirmar(precio1);
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

function chica(precio2){
    let opcion = prompt ("El tamaño chico pesa " + peso2 + " y cuesta " + precio2 + "\n1 - Confirmar \n2 - Cancelar");
    switch(opcion){
        case "1":
            confirmar(precio2);
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

function menu(){
    let opcion = prompt("Que tamaño desea: \n1 - " + tamaño1 + "\n2 - " + tamaño2 + "\n3 - Cancelar");
    switch(opcion){
        case "1":
            grande(precio1);
            break;
        case "2":
            chica(precio2);
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

menu()