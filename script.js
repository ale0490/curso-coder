var i = 0 ; 
let carritoCompras = [];
const carrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const BotonVaciarCarrito = document.querySelector('#boton-vaciar');
const localStorage = window.localStorage;

class Producto {
    constructor (id, nombre, precioGrande, precioChica, imagen){
        this.id = id;
        this.Nombre = nombre;
        this.Grande = precioGrande;
        this.Chica = precioChica;
        this.img = imagen;
    }
}

const producto1 = new Producto(01, "Torta Matilda", 2500, 1500, "../imagenes/tortas/torta-portada.webp");
const producto2 = new Producto(02, "Torta Oreo", 2000, 1200, "../imagenes/tortas/torta-oreo.webp");
const producto3 = new Producto(03, "Torta Flan", 2250, 1350, "../imagenes/tortas/torta.webp");
const producto4 = new Producto(04, "Torta de Frutillas", 2050, 1300, "../imagenes/tortas/frutilla.webp");
const producto5 = new Producto(05, "Torta Marquise de Frutos Rojos", 2300, 1300, "../imagenes/tortas/marquise.webp");
const producto6 = new Producto(06, "Torta Selva Negra", 2400, 1250, "../imagenes/tortas/tarta-selva-negra.webp");

const pasteleria = [producto1, producto2, producto3, producto4, producto5, producto6];

pasteleria.push(new Producto (07, "Alfajores de Maicena", 1200, 600, "../imagenes/alfajores/alfajor.webp"))
pasteleria.push(new Producto (08, "Alfajores Clasicos", 1200, 600, "../imagenes/alfajores/alfajor2.webp"))
pasteleria.push(new Producto (09, "Alfajores Santafecinos", 1200, 600, "../imagenes/alfajores/ojaldre.webp"))
pasteleria.push(new Producto (10, "Macarons", 1200, 600, "../imagenes/alfajores/macarons.webp"))
pasteleria.push(new Producto (11, "Conitos de Dulce de Leche", 1200, 600, "../imagenes/alfajores/conitos.webp"))
pasteleria.push(new Producto (12, "Tabletas de chocolate", 1200, 600, "../imagenes/alfajores/tableta.webp"))
pasteleria.push(new Producto (13, "Crumble de manzana", 1200, 600, "../imagenes/tortas/torta-manzana.webp"))
pasteleria.push(new Producto (14, "Pastafrola", 1200, 600, "../imagenes/tortas/pastafrola-batata.webp"))
pasteleria.push(new Producto (15, "Tarta Toffee", 1200, 600, "../imagenes/tortas/torta-tofy.webp"))
pasteleria.push(new Producto (16, "Tarta de Ricota", 1200, 600, "../imagenes/tortas/ricota.webp"))
pasteleria.push(new Producto (17, "Cupcakes", 1200, 600, "../imagenes/tortas/cupcakes.webp"))
pasteleria.push(new Producto (18, "Muffins", 1200, 600, "../imagenes/tortas/muffin.webp"))

function crearBoton() {
    pasteleria.forEach((info) => {    
        const itemsDom = document.querySelectorAll(".boton")[i];
        
        const h3 = document.createElement("h3");
        h3.textContent = info.Nombre;

        const botones = document.createElement("div")
        botones.classList.add("botones")

        const boton = document.createElement ("button");
        boton.textContent = "Grande";
        boton.classList.add("boton-agregar");
        boton.setAttribute("id", info.id);
        boton.addEventListener(`click`, agregarAlCarrito);
       
        const boton2 = document.createElement ("button");
        boton2.textContent = "Chica";
        boton2.classList.add("boton-agregar");
        boton2.setAttribute("id", info.id);
        boton2.addEventListener(`click`, agregarAlCarrito);
        
        itemsDom.appendChild(h3);
        botones.appendChild(boton);
        botones.appendChild(boton2);
        itemsDom.appendChild(botones);
        i++;
    });
}

function agregarAlCarrito(e) {
    carritoCompras.push(e.target.getAttribute('id'))
    actualizarCarrito();
    alertaToastify();
    guardarCarritoEnLocalStorage();
}

function actualizarCarrito() {
    carrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carritoCompras)];

    carritoSinDuplicados.forEach((item) => {
        // busqueda del producto
        const miItem = pasteleria.filter((torta) => {
            //compara las id.
            return torta.id === parseInt(item);
        });
        const cantidadUnidades = carritoCompras.reduce((total, propiedadId) => {
            // cohincide la ID? sumar+1, sino se mantiene.
            return propiedadId === item ? total += 1 : total;
        }, 0);

        //creacion del item en el carrito.
        const li = document.createElement('li');
        li.classList.add('lista-carrito'); 
        li.innerHTML = `<div class= "texto-carrito">${cantidadUnidades} x ${miItem[0].Nombre}</div>
                        <div><img class= "imagen-carrito mx-5" src="${miItem[0].img}"/></div>
                        <div class= "texto-carrito">${miItem[0].Grande}`+ ` $</div>`;

        // eliminar producto
        const eliminar = document.createElement('button');
        eliminar.classList.add('btn');
        eliminar.textContent = 'X';
        eliminar.dataset.item = item;
        eliminar.addEventListener('click', borrarItemCarrito);
        
        li.appendChild(eliminar);
        carrito.appendChild(li);
    });
    calcularTotal();
}
function alertaToastify() {
    Toastify({
        text: "Agregado al carrito",
        duration: 1500,
        close: true,
        gravity: "bottom",
        position: "right",
        style: {
          background: "#f7e4cb",
          color: "#000000",
          border: "1.5px solid #84552b"
        },
      }).showToast();
}

function borrarItemCarrito(e) {
    Swal.fire({
        title: '¿Eliminar del carrito?',
        text: "¿Esta seguro que desea eliminar este producto?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ELIMINAR'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Eliminado',
            'El producto ha sido borrado',
            'success'
            )
        const id = e.target.dataset.item;
        carritoCompras = carritoCompras.filter((carritoId) => {
        return carritoId !== id;
        });
        }
    });
    actualizarCarrito();
    guardarCarritoEnLocalStorage();
}

function calcularTotal() {
    return carritoCompras.reduce((Total, item) => {
        const miItem = pasteleria.filter((product) => {
            return product.id === parseInt(item);
        });
        return Total + miItem[0].Grande;
    }, 0).toFixed(2);
}
function guardarCarritoEnLocalStorage () {
    localStorage.setItem('carrito', JSON.stringify(carritoCompras));
}

function cargarCarritoDeLocalStorage () {
    if (localStorage.getItem('carrito') !== null) {
        carritoCompras = JSON.parse(localStorage.getItem('carrito'));
    }
}
function vaciarCarrito() {
    carritoCompras = [];
    actualizarCarrito();
    localStorage.clear();
}

BotonVaciarCarrito.addEventListener('click', vaciarCarrito);

cargarCarritoDeLocalStorage();
crearBoton();
actualizarCarrito();

