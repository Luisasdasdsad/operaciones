// Obtener elementos del DOM
const precioInput = document.getElementById('precio');
const cantidadInput = document.getElementById('cantidad');
const calcularButton = document.getElementById('calcular');
const resultadoElement = document.getElementById('resultado');
const codigoDescuentoInput = document.getElementById('codigo-descuento');
const aplicarDescuentoButton = document.getElementById('aplicar-descuento');

let descuentoAplicado = false; // Variable para rastrear si el descuento ya ha sido aplicado

// Función para mostrar el resultado en el DOM
function mostrarResultado(resultado) {
    resultadoElement.textContent = `El total es: ${resultado}`;
    descuentoAplicado = false; // Resetear el estado del descuento cuando se recalcula el total
}

// Evento para calcular el total
calcularButton.addEventListener('click', () => {
    const precio = parseFloat(precioInput.value);
    const cantidad = parseFloat(cantidadInput.value);
    if (!isNaN(precio) && !isNaN(cantidad)) {
        const total = precio * cantidad;
        mostrarResultado(total);
    } else {
        resultadoElement.textContent = "Por favor, ingresa valores válidos.";
    }
});

// Función para aplicar descuento
function aplicarDescuento() {
    if (descuentoAplicado) {
        resultadoElement.textContent = "El descuento ya ha sido aplicado.";
        return;
    }

    const codigo = codigoDescuentoInput.value.trim();
    if (codigo === "DIAZ") {
        const total = parseFloat(resultadoElement.textContent.split(': ')[1]);
        const descuento = total * 0.10; // 10% de descuento
        const nuevoTotal = total - descuento;
        resultadoElement.textContent = `El total con descuento es: ${nuevoTotal}`;
        descuentoAplicado = true; // Marcar el descuento como aplicado
    } else {
        resultadoElement.textContent = "Código de descuento inválido.";
    }
}

// Evento para aplicar descuento
aplicarDescuentoButton.addEventListener('click', aplicarDescuento);