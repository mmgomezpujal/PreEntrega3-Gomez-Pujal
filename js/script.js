// SCRIPT ENTREGA FINAL 

const contenedorProductos = document.getElementById('contenedor-productos'); // contenedor donde cargaré el stock
let botonComprar = document.getElementById("comprar"); // listener evento click en el boton "Realizar Compra"
const tablaCarrito = document.querySelector('.tablaCarrito'); // div donde volcare los productos comprados 
const clave_changuito = "claveChanguito"; // localStorage

// Contenedor datos ultima compra almacenados en localStorage
const ultimaCompra = document.getElementById('ultimaCompra');

const url = '\stock.json';

//Cargo el stock de mis productos desde el archivo .json

fetch (url)
.then(respuesta => respuesta.json())
.then(resultado => {
	stockProductos = resultado.stockProductos;
    cargarProductos(stockProductos);
})

//Vuelco el stock en el HTML (div 'contenedor-productos')
function cargarProductos(stockProductos){

    stockProductos.forEach((producto) => {
        const div = document.createElement("div");
        div.innerHTML =`
        <img src=${producto.img} alt="imagen-producto">
        <h3>${producto.nombre}</h3>
        <p> ${producto.descripcion}</p>
        <p>${producto.presentacion}</p>
        <p class="precioProducto">Precio: USD ${producto.precio}</p>
        <button id="agregar${producto.id}" class="btn p-color">Agregar</button> 
        `
        //Cada boton que se crea de "Agregar" esta compuesto con el ID para hacerlo especifico a cada producto
        contenedorProductos.appendChild(div);

        //listener evento click en los botones "Agregar" y recopilo su informacion
        const boton = document.getElementById(`agregar${producto.id}`)
        boton.addEventListener('click', () => {
            const productoID = producto.id;
            const productoNombre = producto.nombre;
            const productoPrecio = producto.precio;
            const productoImg = producto.img;
            const productoCantidad = 1;

            //Creo una Funcion con los parametros para agregar cada producto clickeado al chango
            agregaProductoCarrito(productoID, productoNombre, productoPrecio, productoImg, productoCantidad);
            Toastify({
                text: "Agregado correctamente",
                duration: 3000,
                gravity: 'bottom'
            }).showToast();
        })
    })
}

function agregaProductoCarrito(productoID, productoNombre, productoPrecio, productoImg, productoCantidad){

    //Evito que se dupliquen la lineas con el mismo producto; cada vez que se repita solo se incrementa la cantidad
    const itemID = tablaCarrito.getElementsByClassName('itemID');      
    for (let i = 0; i < itemID.length; i++){
        if (itemID[i].innerText == productoID) {
            let cantidadItems = itemID[i].parentElement.parentElement.parentElement.querySelector('.cantidadProducto');
            cantidadItems.value++;
            actualizarTotalCarrito();
            return;
        }
    }

    const filaTabla = document.createElement('div');
    const carritoContenido = `
    <div class="row changuitoItem">
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 itemID">${productoID}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${productoImg} class="imgCarrito mb-0 imagen">
                <h6 class="shopping-cart-item-title productoNombre text-truncate ml-3 mb-0">${productoNombre}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 precio">${productoPrecio}</p>
            </div>
        </div>
        <div class="col-2">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="changuitoInput cantidadProducto" type="number"
                value=${productoCantidad}>
                <button class="btn btn-danger borrarLinea" type="button">X</button>
            </div>
        </div>
    </div>
    `;

    //Pusheo el contenido del item agregado al carrito al html
    filaTabla.innerHTML = carritoContenido;
    tablaCarrito.append(filaTabla);

    //Escucho el evento click en los botones "X" de eliminar item 
    filaTabla.querySelector('.borrarLinea')
    .addEventListener('click', borrarElemento); //Creo una funcion "borrarElemento" para sacar el producto del carro

    //Escucho el evento de cambio en el input de cantidad de productos
    filaTabla.querySelector('.cantidadProducto')
    .addEventListener('change', cantidadCambiada); //Cada vez que cambien la cant de productos, voy a actualizar total $$ carrito

    //Actualizo el importe total del carrito cada vez que se hace click en "Agregar"
    actualizarTotalCarrito()
}    

function actualizarTotalCarrito() {
    let total = 0;
    const totalCarrito = document.querySelector('.totalCarrito');
    const carritoFilas = document.querySelectorAll('.changuitoItem');

  //Por Cada linea de mi changuito voy a estar leyendo el precio del producto y la cantidad total agregada
    carritoFilas.forEach((changuitoItem) => {
    const precioProducto = changuitoItem.querySelector('.precio');
    const cantidadProducto = changuitoItem.querySelector('.cantidadProducto');
    const precioProductoItem = Number(precioProducto.textContent)  //converti texto a numero
    const cantidadProductoItem = Number(cantidadProducto.value) //converti texto a numero
    total = total + precioProductoItem * cantidadProductoItem;
});

    totalCarrito.innerHTML = ("USD "+`${total.toFixed(2)}`);  //El "toFixed" es para redondear el importe en caso de tener decimales
}

function borrarElemento(event) {
    const botonAccion = event.target;

    Swal.fire({
        title: '"Desea eliminar el producto?"',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        
        if (result.isConfirmed) {
            botonAccion.closest('.changuitoItem').remove();
            //una vez que elimino el producto del changuito actualizo el precio total
            actualizarTotalCarrito()

            // Muestro al usuario el mensaje de confirmacion 
            Toastify({
                text: "Eliminado correctamente",
                duration: 2000,
                gravity: 'bottom'
            }).showToast();
        }            
    })         
}

function cantidadCambiada(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    actualizarTotalCarrito();
}

//Escucho el click del boton "Comprar"
    botonComprar.addEventListener('click', () => {
    const totalCarrito = document.querySelector('.totalCarrito')
    const total = Number(totalCarrito.textContent.replace('USD', ''))
    if (total === 0){
        Swal.fire({
            title: 'Error',
            text: 'No hay productos seleccionados',
            icon: 'error',
            confirmButtonText: 'Cerrar'
        })
    }
    else{
        Swal.fire({
            title: 'Su compra fue realizada con éxito',
            text: 'TOTAL: USD '+total,
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
    }

    //Reseteo el localStorage; borro cualquier info que tenga
    localStorage.clear();

    //Voy a guardar en el localStorage el ultimo changuito comprado

    const itemID = tablaCarrito.getElementsByClassName('itemID');

    let changuito = []; //array vacio

    for (let i = 0; i < itemID.length; i++) {
        let cantidadItems = itemID[i].parentElement.parentElement.parentElement.querySelector('.cantidadProducto').value;
        let productoPrecio = itemID[i].parentElement.parentElement.parentElement.querySelector('.precio').textContent;
        let productoNombre = itemID[i].parentElement.parentElement.parentElement.querySelector('.productoNombre').textContent;
        //Trabajo el link de la imagen para obtenerlo con el formato que necesito "./images/..."
        let productoIMG = itemID[i].parentElement.parentElement.parentElement.querySelector('.imagen').src;
        let productoID = itemID[i].parentElement.parentElement.parentElement.querySelector('.itemID').textContent;
        let guardarChanguito = new guardarCarrito(productoID, productoIMG, productoNombre, productoPrecio, cantidadItems)
        changuito.push(guardarChanguito); // Lo pusheo a mi array que luego almacenare en Localstorage
    }

    //Guardo info en localStorage
    localStorage.setItem(clave_changuito, JSON.stringify(changuito));

    //Borro el Carrito de Compra y el div del detalle de "ultima Compra realizada" porque ahora hay una nueva compra.
    tablaCarrito.innerHTML = '';
    actualizarTotalCarrito();
    
});

//Funcion objeto para guardar el changuito comprado
function guardarCarrito(id, img, nombre, precio, cantidad){
    this.id = id;
    this.img = img;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}

// Escucho el click del boton "Ver Ultima Compra"
botonUltimaCompra.addEventListener('click', () => {
    tablaCarrito.innerHTML = ''; // Reseteo para que no muestre nada acumulado.
    actualizarTotalCarrito();

    let almacenados = JSON.parse(localStorage.getItem(clave_changuito))
    
    if(almacenados){
        for (let i = 0; i < almacenados.length; i++) {
            agregaProductoCarrito(almacenados[i].id, almacenados[i].nombre, almacenados[i].precio, almacenados[i].img, almacenados[i].cantidad)
        }
        actualizarTotalCarrito();
    }
});