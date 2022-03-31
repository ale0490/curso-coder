var i = 0 ; 
let carritoCompras = [];
const carrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const BotonVaciarCarrito = document.querySelector('#boton-vaciar');
const localStorage = window.localStorage;
let pasteleria = [];

fetch("../data.json")
	.then(r => r.json())
	.then(info => {
		info.forEach(item =>
			pasteleria.push(
				new Producto(
					item.id,
					item.nombre,
					item.precioGrande,
					item.precioChica,
					item.imagen,
				)
			)
		);     
        crearBoton();
	});

class Producto {
    constructor(id, nombre, precioGrande, precioChica, imagen) {
        this.id = id;
        this.Nombre = nombre;
        this.Grande = precioGrande;
        this.Chica = precioChica;
        this.img = imagen;
    }
}

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

        // crea boton eliminar
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
        actualizarCarrito();
        }
    });
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
//actualizarCarrito();