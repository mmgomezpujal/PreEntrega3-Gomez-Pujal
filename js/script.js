// DEFININO LAS VARIALES ASOCIADAS A LOS PRECIOS 
const precioId12 = 2.29 * 1000;
let precioId11 = (precioId12/1000) * 1.20 * 200;

const precioId23 = 4.10 * 1000;
let precioId22 = (precioId23/1000) * 1.20 * 200;
let precioId21 = (precioId23/1000) * 1.40 * 20; 

const precioId33 = 4.51 * 1000;
let precioId32 = (precioId33/1000) * 1.20 * 200;
let precioId31 = (precioId33/1000) * 1.40 * 20; 

const precioId43 = 2.10 * 1000;
let precioId42 = (precioId43/1000) * 1.20 * 200;
let precioId41 = (precioId43/1000) * 1.40 * 20;

// DEFINO LA FUNCIÓN QUE SERÁ LLAMADA DESDE HTML A TRAVÉS DEL SCRIPT
function calcularPrecio() {
    let idIngresado = prompt("Ingrese el ID del producto (idxx) o ESC para salir: ");
// BUCLE QUE ME PERMITE CONTINUAR MIENTRAS EL USUARIO NO SELECCIONE ESC
    while (idIngresado!="ESC") {
        let cantidad = prompt("Ingrese la cantidad deseada (en unidades): ");
        let total = 0;
// CONDICIONAL PARA VALIDAR LOS ID INGRESADOS Y CALCULAR PRECIO
        switch(idIngresado) {
            case 'id11':
                alert("Seleccionaste la opción: emulsión en tambor x 200 kg")
                total = precioId11 * cantidad;
                return alert('El total de su compra es: ' + 'USD ' + total);
            case 'id12':
                alert("Seleccionaste la opción: emulsión en contenedor x 1000 kg");
                total = precioId12 * cantidad;
                return alert('El total de su compra es: ' + 'USD ' + total);
            case 'id21':
                alert("Seleccionaste la opción: dispersante en bidón/balde x 20 kg");
                total = precioId21 * cantidad;
                return alert('El total de su compra es: ' + 'USD ' + total);
            case 'id22':
                alert("Seleccionaste la opción: dispersante en tambor x 200 kg");
                total = precioId22 * cantidad;
                return alert('El total de su compra es: ' + 'USD ' + total);
            case 'id23':
                alert("Seleccionaste la opción: dispersante en contenedor x 1000 kg");
                total = precioId23 * cantidad;
                return alert('El total de su compra es: ' + 'USD ' + total);
            case 'id31':
                alert("Seleccionaste la opción: antiespumante en bidón/balde x 20 kg");
                total = precioId31 * cantidad;
                return alert('El total de su compra es: ' + 'USD ' + total);
            case 'id32':
                alert("Seleccionaste la opción: antiespumante en tambor x 200 kg");
                total = precioId32 * cantidad;
                return alert('El total de su compra es: ' + 'USD ' + total);
            case 'id33':
                alert("Seleccionaste la opción: antiespumante en contenedor x 1000 kg");
                total = precioId33 * cantidad;
                return alert('El total de su compra es: ' + 'USD ' + total);
            case 'id41':
                alert("Seleccionaste la opción: biocida en bidón/balde x 20 kg");
                total = precioId41 * cantidad;
                return alert('El total de su compra es: ' + 'USD ' + total);
            case 'id42':
                alert("Seleccionaste la opción: biocida en tambor x 200 kg");
                total = precioId42 * cantidad;
                return alert('El total de su compra es: ' + 'USD ' + total);
            case 'id43':
                alert("Seleccionaste la opción: biocida en contenedor x 1000 kg");
                total = precioId43 * cantidad;
                return alert('El total de su compra es: ' + 'USD ' + total);
            default:
                idIngresado = prompt("Por favor, selecciona un id correcto:");
                break;
        }
    }
// CONDICIONAL QUE ME PERMITE SALIR AL SELECCIONAR ESC
    if(idIngresado == "ESC") {
        alert("¡Gracias por la visita!");
    }
}
