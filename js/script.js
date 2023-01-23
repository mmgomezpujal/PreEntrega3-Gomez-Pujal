// DEFINO EL ARRAY DE PRODUCTOS (OBJETOS)

const productos = [
    {nombre: "emulsion", id: "id11", presentacion: "contenedor", precio: 2.29 * 1000},
    {nombre: "emulsion", id: "id12", presentacion: "tambor", precio: 2.29 * 1.20 * 200},
    {nombre: "dispersante", id: "id21", presentacion: "contenedor", precio: 4.10 * 1000},
    {nombre: "dispersante", id: "id22", presentacion: "tambor", precio: 4.10 * 1.20 * 200},
    {nombre: "dispersante", id: "id23", presentacion: "balde/bidón", precio: 4.10 * 1.40 * 20},
    {nombre: "antiespumante", id: "id31", presentacion: "contenedor", precio: 4.51 * 1000},
    {nombre: "antiespumante", id: "id32", presentacion: "tambor", precio: 4.51 * 1.20 * 200},
    {nombre: "antiespumante", id: "id33", presentacion: "balde/bidón", precio: 4.51 * 1.40 * 20},
    {nombre: "biocida", id: "id41", presentacion: "contenedor", precio: 2.10 * 1000},
    {nombre: "biocida", id: "id42", presentacion: "tambor", precio: 2.10 * 1.20 * 200},
    {nombre: "biocida", id: "id43", presentacion: "balde/bidón", precio: 2.10 * 1.40 * 20}];

// DEFINO LA FUNCIÓN QUE SERÁ LLAMADA DESDE HTML A TRAVÉS DEL SCRIPT

function calcularPrecio() {

    let idIngresado = prompt("Ingrese el ID del producto (idxx) o ESC para salir: ");

// BUCLE QUE ME PERMITE CONTINUAR MIENTRAS EL USUARIO NO SELECCIONE ESC

    while (idIngresado != "ESC") {

        let cantidad = prompt("Ingrese la cantidad deseada (en unidades): ");

// RECORRO EL ARRAY CON UN FOR Y PARA CADA PRODUCTO PREGUNTO SI COINCIDE POR LA OPCIÓN INGRESADA POR EL USUARIO

        for (const producto of productos) { 

            if (idIngresado == producto.id) {
                total = producto.precio * cantidad;
                return alert("Seleccionaste la opción: " + producto.nombre + " " + producto.presentacion + ". El total de su compra es: USD " + total);
            } else {
                return alert("Por favor, ingresa un id correcto:");
            }
        }
    }

// CONDICIONAL QUE ME PERMITE SALIR AL SELECCIONAR ESC

    if(idIngresado == "ESC") {
        alert("¡Gracias por la visita!");
    }
}

// -------------------------------------Primer PreEntrega---------------------------------------------------

// DEFININO LAS VARIALES ASOCIADAS A LOS PRECIOS 
// const precioId12 = 2.29 * 1000;
// let precioId11 = (precioId12/1000) * 1.20 * 200;

// const precioId23 = 4.10 * 1000;
// let precioId22 = (precioId23/1000) * 1.20 * 200;
// let precioId21 = (precioId23/1000) * 1.40 * 20; 

// const precioId33 = 4.51 * 1000;
// let precioId32 = (precioId33/1000) * 1.20 * 200;
// let precioId31 = (precioId33/1000) * 1.40 * 20; 

// const precioId43 = 2.10 * 1000;
// let precioId42 = (precioId43/1000) * 1.20 * 200;
// let precioId41 = (precioId43/1000) * 1.40 * 20;

// // DEFINO LA FUNCIÓN QUE SERÁ LLAMADA DESDE HTML A TRAVÉS DEL SCRIPT
// function calcularPrecio() {
//     let idIngresado = prompt("Ingrese el ID del producto (idxx) o ESC para salir: ");
// // BUCLE QUE ME PERMITE CONTINUAR MIENTRAS EL USUARIO NO SELECCIONE ESC
//     while (idIngresado!="ESC") {
//         let cantidad = prompt("Ingrese la cantidad deseada (en unidades): ");
// // CONDICIONAL PARA VALIDAR LOS ID INGRESADOS Y CALCULAR PRECIO
//         switch(idIngresado) {
//             case 'id11':
//                 // total = precioId11 * cantidad;
//                 alert('Seleccionaste la opción: emulsión en tambor x 200 kg. El total de su compra es: ' + 'USD ' + precioId11*cantidad);
//                 return; 
//                 case 'id12':
//                 total = precioId12 * cantidad;
//                 alert('Seleccionaste la opción: emulsión en contenedor x 1000 kg. El total de su compra es: ' + 'USD ' + total);
//                 return;
//             case 'id21':
//                 total = precioId21 * cantidad;
//                 alert('Seleccionaste la opción: dispersante en bidón/balde x 20 kg. El total de su compra es: ' + 'USD ' + total);
//                 return;
//             case 'id22':
//                 total = precioId22 * cantidad;
//                 alert('Seleccionaste la opción: dispersante en tambor x 200 kg. El total de su compra es: ' + 'USD ' + total);
//                 return;
//             case 'id23':
//                 total = precioId23 * cantidad;
//                 alert('Seleccionaste la opción: dispersante en contenedor x 1000 kg. El total de su compra es: ' + 'USD ' + total);
//                 return;
//             case 'id31':
//                 total = precioId31 * cantidad;
//                 alert('Seleccionaste la opción: antiespumante en bidón/balde x 20 kg. El total de su compra es: ' + 'USD ' + total);
//                 return;
//             case 'id32':
//                 total = precioId32 * cantidad;
//                 alert('Seleccionaste la opción: antiespumante en tambor x 200 kg. El total de su compra es: ' + 'USD ' + total);
//                 return;
//             case 'id33':
//                 total = precioId33 * cantidad;
//                 alert('Seleccionaste la opción: antiespumante en contenedor x 1000 kg. El total de su compra es: ' + 'USD ' + total);
//                 return;
//             case 'id41':
//                 total = precioId41 * cantidad;
//                 alert('Seleccionaste la opción: biocida en bidón/balde x 20 kg. El total de su compra es: ' + 'USD ' + total);
//                 return;
//             case 'id42':
//                 total = precioId42 * cantidad;
//                 alert('Seleccionaste la opción: biocida en tambor x 200 kg. El total de su compra es: ' + 'USD ' + total);
//                 return;
//             case 'id43':
//                 total = precioId43 * cantidad;
//                 alert('Seleccionaste la opción: biocida en contenedor x 1000 kg. El total de su compra es: ' + 'USD ' + total);
//                 return;
//             default:
//                 idIngresado = prompt("Por favor, selecciona un id correcto:");
//                 break;
//         }
//     }
// // CONDICIONAL QUE ME PERMITE SALIR AL SELECCIONAR ESC
//     if(idIngresado == "ESC") {
//         alert("¡Gracias por la visita!");
//     }
// }
