// La meta de nota es 3.0 para aprobar
const NOTA_META = 3.0;

// Pesos (porcentajes) para cada corte
const PESO_CORTE_1 = 0.33; // 33%
const PESO_CORTE_2 = 0.33; // 33%
const PESO_CORTE_3 = 0.34; // 34%

/**
 * Función de validación de entrada para que no acepte números negativos
 * y limite el rango de 0.0 a 5.0.
 * @param {HTMLInputElement} input - El elemento input que se está validando.
 */
function validateInput(input) {
    let value = parseFloat(input.value);

    // 1. Limitar a valores no negativos
    if (value < 0) {
        input.value = 0.0;
        value = 0.0;
        alert("⚠️ ¡Las notas no pueden ser negativas! Se ha establecido a 0.0.");
    }
    
    // 2. Limitar a un máximo de 5.0
    if (value > 5.0) {
        input.value = 5.0;
        value = 5.0;
        alert("🚫 ¡La nota máxima es 5.0! Se ha establecido a 5.0.");
    }

    // 3. Agregar clase de estilo si el valor no es válido (ej. si está vacío o NaN después de la validación)
    if (isNaN(value)) {
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
    }
}

/**
 * Calcula la nota requerida en el tercer corte para alcanzar la nota meta.
 */
function calcularNota() {
    // Obtener valores de los campos de entrada
    const inputCorte1 = document.getElementById('corte1');
    const inputCorte2 = document.getElementById('corte2');

    // Forzar la validación antes de calcular
    validateInput(inputCorte1);
    validateInput(inputCorte2);
    
    // Convertir a número después de la validación
    const n1 = parseFloat(inputCorte1.value);
    const n2 = parseFloat(inputCorte2.value);

    // Verificar si las entradas son válidas (no NaN)
    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, ingresa notas válidas entre 0.0 y 5.0.");
        return;
    }

    // 1. Calcular el acumulado de los dos primeros cortes
    const acumulado = (n1 * PESO_CORTE_1) + (n2 * PESO_CORTE_2);

    // 2. Calcular el valor que falta por obtener para llegar a la meta
    const faltante = NOTA_META - acumulado;

    // 3. Calcular la nota requerida en el tercer corte
    // Fórmula: Nota_Requerida = Faltante / Peso_Corte_3
    let notaRequerida = faltante / PESO_CORTE_3;

    // Elementos de salida
    const notaRequeridaEl = document.getElementById('nota-requerida');
    const mensajeFinalEl = document.getElementById('mensaje-final');
    
    // Reiniciar los estilos y mensajes
    mensajeFinalEl.classList.remove('success', 'failure');
    mensajeFinalEl.textContent = '';
    
    // Redondear la nota a dos decimales para una mejor presentación
    notaRequerida = Math.round(notaRequerida * 100) / 100;

    // 4. Mostrar el resultado y los mensajes especiales
    
    // ... código anterior (líneas 1 a 87)

    if (notaRequerida <= 0) {
        // Caso: Ya alcanzó o superó la nota de 3.0
        const notaFinalEstimada = (n1 * PESO_CORTE_1) + (n2 * PESO_CORTE_2) + (0 * PESO_CORTE_3);
        notaRequeridaEl.textContent = "¡0.0!";
        mensajeFinalEl.textContent = `¡Felicitaciones! 🎉 Ya has alcanzado el 3.0 (o más). Tu nota actual proyectada es de ${notaFinalEstimada.toFixed(2)} sin necesidad de nota en el 3er corte.`;
        mensajeFinalEl.classList.add('success');
        // 👇 ESTA LÍNEA ES LA QUE DEBES CAMBIAR
        notaRequeridaEl.style.color = '#4caf50'; // Valor de --success-color
        
    } else if (notaRequerida > 5.0) {
        // Caso: No alcanza la nota de 3.0, incluso con 5.0
        notaRequeridaEl.textContent = notaRequerida.toFixed(2);
        mensajeFinalEl.textContent = `Lo sentimos 😥. Necesitas un ${notaRequerida.toFixed(2)} para alcanzar el 3.0. Lamentablemente, la nota máxima posible es 5.0. No alcanzas a aprobar.`;
        mensajeFinalEl.classList.add('failure');
        // 👇 ESTA LÍNEA ES LA QUE DEBES CAMBIAR
        notaRequeridaEl.style.color = '#f44336'; // Valor de --danger-color
        
    } else {
        // Caso: Requiere una nota dentro del rango [0.01, 5.0]
        notaRequeridaEl.textContent = notaRequerida.toFixed(2);
        mensajeFinalEl.textContent = `¡Ánimo! 💪 Necesitas un ${notaRequerida.toFixed(2)} en el tercer corte para aprobar con 3.0. ¡A estudiar!`;
        mensajeFinalEl.classList.add('success');
        // 👇 ESTA LÍNEA ES LA QUE DEBES CAMBIAR
        notaRequeridaEl.style.color = '#00bcd4'; // Valor de --accent-color
    }
}