// Obtener elementos del DOM
const precioInput = document.getElementById('precio');
const cantidadInput = document.getElementById('cantidad');
const calcularButton = document.getElementById('calcular');
const resultadoElement = document.getElementById('resultado');
const codigoDescuentoInput = document.getElementById('codigo-descuento');
const aplicarDescuentoButton = document.getElementById('aplicar-descuento');

// Función para mostrar el resultado en el DOM
function mostrarResultado(resultado) {
    resultadoElement.textContent = `El total es: ${resultado}`;
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
    const codigo = codigoDescuentoInput.value.trim();
    if (codigo === "DIAZ") {
        const total = parseFloat(resultadoElement.textContent.split(': ')[1]);
        const descuento = total * 0.20; // 20% de descuento
        const nuevoTotal = total - descuento;
        resultadoElement.textContent = `El total con descuento es: ${nuevoTotal}`;
    } else {
        resultadoElement.textContent = "Código de descuento inválido.";
    }
}

// Evento para aplicar descuento
aplicarDescuentoButton.addEventListener('click', aplicarDescuento);