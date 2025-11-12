// Pesos (porcentajes) para cada corte
const PESO_CORTE_1 = 0.33;
const PESO_CORTE_2 = 0.33;
const PESO_CORTE_3 = 0.34;

// Frases motivacionales mejoradas
const FRASES_MOTIVACIONALES = {
    perfecto: [
        "¡INCREÍBLE! 🏆 Ya alcanzaste tu meta, ¡eres un campeón!",
        "🌟 ¡META CUMPLIDA! Tu esfuerzo ha dado frutos",
        "🎉 ¡FELICITACIONES! Ya lograste lo que buscabas"
    ],
    facil: [
        "¡Excelente! Solo necesitas una nota baja, ¡vas muy bien! 😊",
        "¡Genial! Con poco esfuerzo lograrás tu meta 🎯",
        "¡Perfecto! Estás en una posición muy favorable ⭐"
    ],
    factible: [
        "¡Tú puedes! Es totalmente alcanzable con dedicación 💪",
        "¡Vamos! Con esfuerzo constante lo lograrás 📚",
        "¡Adelante! La meta está a tu alcance 🚀"
    ],
    dificil: [
        "¡RETO ACEPTADO! 🔥 Será difícil pero NO imposible",
        "¡A DAR EL MÁXIMO! 💪 Requiere tu mejor esfuerzo",
        "¡MOMENTO HEROICO! ⚡ Es tu oportunidad de brillar"
    ],
    imposible: [
        "😔 Matemáticamente no es posible esta vez...",
        "💙 No siempre se gana, pero siempre se aprende",
        "🌈 Habrá más oportunidades, ¡no te desanimes!"
    ]
};

// Mensajes personalizados según la nota requerida
const MENSAJES_POR_RANGO = {
    perfecto: {
        titulo: "🎉 ¡YA LO LOGRASTE! 🎉",
        mensaje: "No necesitas ninguna nota más. ¡Ya alcanzaste tu meta!",
        emoji: "🏆"
    },
    excelente: {
        titulo: "😎 ¡MUY FÁCIL!",
        mensaje: "Solo necesitas una nota muy baja. ¡Prácticamente ya aprobaste!",
        emoji: "⭐"
    },
    bueno: {
        titulo: "😊 ¡BIEN ENCAMINADO!",
        mensaje: "Necesitas una nota moderada. ¡Totalmente alcanzable!",
        emoji: "👍"
    },
    factible: {
        titulo: "💪 ¡A ESFORZARSE!",
        mensaje: "Necesitas una buena nota. Con dedicación lo lograrás.",
        emoji: "🎯"
    },
    dificil: {
        titulo: "🔥 ¡RETO DIFÍCIL!",
        mensaje: "Necesitas una nota alta. ¡Será difícil pero puedes lograrlo!",
        emoji: "⚡"
    },
    muyDificil: {
        titulo: "😰 ¡RETO EXTREMO!",
        mensaje: "Necesitas casi la nota máxima. ¡Momento de dar el 200%!",
        emoji: "🚨"
    },
    imposible: {
        titulo: "😢 NO ES POSIBLE",
        mensaje: "La nota requerida supera el máximo (5.0). No es matemáticamente posible.",
        emoji: "💔"
    }
};

// Historial de cálculos
let historialCalculos = [];

// Configuración de temas por materia con emojis
const TEMAS_MATERIAS = {
    matematicas: {
        keywords: ['matemática', 'cálculo', 'álgebra', 'geometría', 'estadística', 'trigonometría', 'matemáticas'],
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        emojis: ['➕', '➖', '✖️', '➗', '🔢', '📐', '📊', '📈', '🔺', '🔷'],
        particles: 'formulas'
    },
    fisica: {
        keywords: ['física', 'mecánica', 'termodinámica', 'óptica', 'electromagnetismo'],
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        emojis: ['⚛️', '🔬', '🧲', '⚡', '🌡️', '💡', '🔭', '🌟', '⚙️', '🔋'],
        particles: 'atoms'
    },
    quimica: {
        keywords: ['química', 'orgánica', 'inorgánica', 'bioquímica'],
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        emojis: ['🧪', '⚗️', '🔬', '💊', '🧬', '⚛️', '💉', '🌡️', '💧', '🔥'],
        particles: 'molecules'
    },
    programacion: {
        keywords: ['programación', 'código', 'software', 'desarrollo', 'java', 'python', 'javascript', 'web', 'html', 'css'],
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        emojis: ['💻', '⌨️', '🖥️', '📱', '🖱️', '💾', '🔧', '⚙️', '🐛', '🚀'],
        particles: 'code'
    },
    biologia: {
        keywords: ['biología', 'anatomía', 'genética', 'ecología', 'botánica'],
        gradient: 'linear-gradient(135deg, #90d5ec 0%, #56ab2f 100%)',
        emojis: ['🧬', '🔬', '🦠', '🌱', '🌿', '🍃', '🌳', '🐝', '🦋', '🌺'],
        particles: 'cells'
    },
    arte: {
        keywords: ['arte', 'diseño', 'dibujo', 'pintura', 'música', 'teatro'],
        gradient: 'linear-gradient(135deg, #ffa585 0%, #ffeda0 100%)',
        emojis: ['🎨', '🖌️', '🎭', '🎪', '🎬', '🎵', '🎸', '🎹', '🎤', '✨'],
        particles: 'colors'
    },
    historia: {
        keywords: ['historia', 'geografía', 'sociales', 'filosofía'],
        gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
        emojis: ['📜', '🏛️', '⚔️', '👑', '🗿', '🏺', '📖', '🌍', '🗺️', '🏰'],
        particles: 'ancient'
    },
    idiomas: {
        keywords: ['inglés', 'francés', 'español', 'portugués', 'idioma', 'lenguaje', 'lengua'],
        gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
        emojis: ['📚', '✍️', '📖', '🗣️', '💬', '📝', '🔤', '🔡', '🌐', '💭'],
        particles: 'letters'
    },
    default: {
        gradient: 'linear-gradient(135deg, #00bcd4, #6a0dad)',
        emojis: ['📚', '📖', '✏️', '📝', '🎓', '🏫', '📐', '✨', '⭐', '💫'],
        particles: 'stars'
    }
};

let emojiInterval;

/**
 * Crear emojis flotantes en el fondo
 */
function crearEmojisFlotantes(emojis) {
    const container = document.getElementById('emoji-container');
    
    if (emojiInterval) {
        clearInterval(emojiInterval);
    }
    
    container.innerHTML = '';
    
    emojiInterval = setInterval(() => {
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.animationDuration = (Math.random() * 10 + 10) + 's';
        emoji.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(emoji);
        
        setTimeout(() => {
            emoji.remove();
        }, 17000);
    }, 1000);
}

/**
 * Cambiar tema según materia
 */
function cambiarTemaMateria() {
    const nombreMateria = document.getElementById('nombre-materia').value.toLowerCase().trim();
    const body = document.body;
    const subjectBg = document.getElementById('subject-background');
    
    let temaSeleccionado = TEMAS_MATERIAS.default;
    
    for (const [key, tema] of Object.entries(TEMAS_MATERIAS)) {
        if (tema.keywords && tema.keywords.some(keyword => nombreMateria.includes(keyword))) {
            temaSeleccionado = tema;
            break;
        }
    }
    
    body.style.background = temaSeleccionado.gradient;
    
    subjectBg.style.opacity = '0';
    setTimeout(() => {
        subjectBg.style.background = temaSeleccionado.gradient;
        subjectBg.style.opacity = '0.3';
    }, 300);
    
    crearEmojisFlotantes(temaSeleccionado.emojis);
    iniciarParticulas(temaSeleccionado.particles);
}

/**
 * Sistema de partículas animadas
 */
let particlesAnimation;
function iniciarParticulas(tipo) {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    if (particlesAnimation) {
        cancelAnimationFrame(particlesAnimation);
    }
    
    const particles = [];
    const particleCount = 40;
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 1.5;
            this.vy = (Math.random() - 0.5) * 1.5;
            this.size = Math.random() * 3 + 1;
            this.opacity = Math.random() * 0.4 + 0.1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            
            switch(tipo) {
                case 'formulas':
                    ctx.font = `${this.size * 8}px Arial`;
                    const symbols = ['∫', 'π', '∑', 'α', 'β', '√', 'Δ', 'θ'];
                    ctx.fillText(symbols[Math.floor(Math.random() * symbols.length)], this.x, this.y);
                    break;
                case 'atoms':
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                    ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
                    ctx.stroke();
                    break;
                case 'molecules':
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                case 'code':
                    ctx.font = `${this.size * 6}px monospace`;
                    const codes = ['<>', '{}', '[]', '//', '##', '01', '()'];
                    ctx.fillText(codes[Math.floor(Math.random() * codes.length)], this.x, this.y);
                    break;
                case 'cells':
                    ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                case 'colors':
                    ctx.fillStyle = `hsla(${Math.random() * 360}, 70%, 60%, ${this.opacity})`;
                    ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                case 'letters':
                    ctx.font = `${this.size * 8}px Arial`;
                    const letters = ['A', 'B', 'C', 'D', 'α', 'β', 'γ'];
                    ctx.fillText(letters[Math.floor(Math.random() * letters.length)], this.x, this.y);
                    break;
                default:
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
            }
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        particlesAnimation = requestAnimationFrame(animate);
    }
    
    animate();
}

/**
 * Animaciones según nota requerida
 */
function animacionSegunNota(notaRequerida) {
    const resultBox = document.getElementById('resultado-container');
    const container = document.getElementById('animation-container');
    
    resultBox.classList.remove('animation-excelente', 'animation-factible', 'animation-dificil', 'animation-imposible');
    container.innerHTML = '';
    
    if (notaRequerida <= 0) {
        // Ya superó la meta - animación de victoria épica
        resultBox.classList.add('animation-excelente');
        crearTrofeos();
        crearEstrellas();
        crearCorazones();
        crearExplosionExito();
    } else if (notaRequerida <= 2.0) {
        // Muy fácil - animación de alivio y alegría
        resultBox.classList.add('animation-factible');
        crearEstrellas();
        crearCaritasFelices();
        crearPulgares();
    } else if (notaRequerida <= 3.0) {
        // Moderado - animación motivacional positiva
        resultBox.classList.add('animation-factible');
        crearCohetes();
        crearEstrellas();
    } else if (notaRequerida <= 3.8) {
        // Factible - animación de esfuerzo
        resultBox.classList.add('animation-factible');
        crearCohetes();
        crearMusculo();
    } else if (notaRequerida <= 5.0) {
        // Difícil - animación de desafío
        resultBox.classList.add('animation-dificil');
        crearLlamas();
        crearRayos();
    } else {
        // Imposible - animación de tristeza
        resultBox.classList.add('animation-imposible');
        crearCarasTriste();
        crearLluviaTristeza();
        crearCorazonesRotos();
    }
}

// ===== FUNCIONES DE ANIMACIÓN =====

function crearTrofeos() {
    const container = document.getElementById('animation-container');
    for (let i = 0; i < 3; i++) {
        const trophy = document.createElement('div');
        trophy.className = 'trophy';
        trophy.textContent = '🏆';
        trophy.style.left = (i * 30 + 20) + '%';
        trophy.style.animationDelay = i * 0.2 + 's';
        container.appendChild(trophy);
    }
}

function crearEstrellas() {
    const container = document.getElementById('animation-container');
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.textContent = '⭐';
        star.style.left = (i * 18 + 10) + '%';
        star.style.animationDelay = i * 0.15 + 's';
        container.appendChild(star);
    }
}

function crearCohetes() {
    const container = document.getElementById('animation-container');
    for (let i = 0; i < 3; i++) {
        const rocket = document.createElement('div');
        rocket.className = 'rocket';
        rocket.textContent = '🚀';
        rocket.style.left = (i * 30 + 20) + '%';
        rocket.style.animationDelay = i * 0.3 + 's';
        container.appendChild(rocket);
    }
}

function crearLlamas() {
    const container = document.getElementById('animation-container');
    for (let i = 0; i < 5; i++) {
        const flame = document.createElement('div');
        flame.className = 'flame';
        flame.textContent = '🔥';
        flame.style.left = (i * 18 + 10) + '%';
        flame.style.animationDelay = i * 0.1 + 's';
        container.appendChild(flame);
    }
}

function crearCarasTriste() {
    const container = document.getElementById('animation-container');
    for (let i = 0; i < 3; i++) {
        const sad = document.createElement('div');
        sad.className = 'sad-face';
        sad.textContent = '😢';
        sad.style.left = (i * 30 + 20) + '%';
        sad.style.animationDelay = i * 0.2 + 's';
        container.appendChild(sad);
    }
}

function crearLluviaTristeza() {
    const container = document.getElementById('animation-container');
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const drop = document.createElement('div');
            drop.className = 'rain-drop';
            drop.textContent = '💧';
            drop.style.left = (i * 15 + 5) + '%';
            drop.style.animationDelay = Math.random() * 0.5 + 's';
            container.appendChild(drop);
            setTimeout(() => drop.remove(), 2000);
        }, i * 150);
    }
}

// ===== NUEVAS ANIMACIONES PARA CASOS POSITIVOS =====

function crearCorazones() {
    const container = document.getElementById('animation-container');
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💖';
        heart.style.left = (i * 12 + 2) + '%';
        heart.style.animationDelay = i * 0.12 + 's';
        container.appendChild(heart);
    }
}

function crearExplosionExito() {
    const container = document.getElementById('animation-container');
    const emojis = ['🎉', '🎊', '✨', '🌟', '💫', '⭐'];
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const explosion = document.createElement('div');
            explosion.className = 'explosion-particle';
            explosion.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            explosion.style.left = '50%';
            explosion.style.top = '50%';
            explosion.style.setProperty('--angle', (i * 30) + 'deg');
            container.appendChild(explosion);
            setTimeout(() => explosion.remove(), 1500);
        }, i * 50);
    }
}

function crearCaritasFelices() {
    const container = document.getElementById('animation-container');
    const caras = ['😊', '😄', '🥳', '😎', '🤩'];
    for (let i = 0; i < 5; i++) {
        const cara = document.createElement('div');
        cara.className = 'happy-face';
        cara.textContent = caras[i];
        cara.style.left = (i * 18 + 10) + '%';
        cara.style.animationDelay = i * 0.15 + 's';
        container.appendChild(cara);
    }
}

function crearPulgares() {
    const container = document.getElementById('animation-container');
    for (let i = 0; i < 4; i++) {
        const thumb = document.createElement('div');
        thumb.className = 'thumbs-up';
        thumb.textContent = '👍';
        thumb.style.left = (i * 25 + 10) + '%';
        thumb.style.animationDelay = i * 0.2 + 's';
        container.appendChild(thumb);
    }
}

function crearMusculo() {
    const container = document.getElementById('animation-container');
    for (let i = 0; i < 3; i++) {
        const muscle = document.createElement('div');
        muscle.className = 'muscle';
        muscle.textContent = '💪';
        muscle.style.left = (i * 30 + 20) + '%';
        muscle.style.animationDelay = i * 0.25 + 's';
        container.appendChild(muscle);
    }
}

function crearRayos() {
    const container = document.getElementById('animation-container');
    for (let i = 0; i < 6; i++) {
        const rayo = document.createElement('div');
        rayo.className = 'lightning';
        rayo.textContent = '⚡';
        rayo.style.left = (i * 15 + 10) + '%';
        rayo.style.animationDelay = i * 0.12 + 's';
        container.appendChild(rayo);
    }
}

function crearCorazonesRotos() {
    const container = document.getElementById('animation-container');
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            const broken = document.createElement('div');
            broken.className = 'broken-heart';
            broken.textContent = '💔';
            broken.style.left = (i * 22 + 15) + '%';
            broken.style.animationDelay = Math.random() * 0.3 + 's';
            container.appendChild(broken);
            setTimeout(() => broken.remove(), 2500);
        }, i * 200);
    }
}

// ===== FUNCIONES DE UTILIDAD =====

function obtenerMensajePorNota(notaRequerida) {
    if (notaRequerida <= 0) return MENSAJES_POR_RANGO.perfecto;
    if (notaRequerida <= 2.0) return MENSAJES_POR_RANGO.excelente;
    if (notaRequerida <= 3.0) return MENSAJES_POR_RANGO.bueno;
    if (notaRequerida <= 3.8) return MENSAJES_POR_RANGO.factible;
    if (notaRequerida <= 4.5) return MENSAJES_POR_RANGO.dificil;
    if (notaRequerida <= 5.0) return MENSAJES_POR_RANGO.muyDificil;
    return MENSAJES_POR_RANGO.imposible;
}

function obtenerFraseMotivacional(notaRequerida) {
    let categoria;
    if (notaRequerida <= 0) categoria = 'perfecto';
    else if (notaRequerida <= 2.0) categoria = 'facil';
    else if (notaRequerida <= 3.8) categoria = 'factible';
    else if (notaRequerida <= 5.0) categoria = 'dificil';
    else categoria = 'imposible';
    
    const frases = FRASES_MOTIVACIONALES[categoria];
    return frases[Math.floor(Math.random() * frases.length)];
}

function validateInput(input) {
    let value = parseFloat(input.value);
    if (value < 0) {
        input.value = 0.0;
        alert("⚠️ ¡Las notas no pueden ser negativas! Se ha establecido a 0.0.");
    }
    if (value > 5.0) {
        input.value = 5.0;
        alert("🚫 ¡La nota máxima es 5.0! Se ha establecido a 5.0.");
    }
    if (isNaN(value)) {
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
    }
}

function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-btn');
    body.classList.toggle('dark-mode');
    btn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

function lanzarConfeti() {
    const duracion = 3000;
    const fin = Date.now() + duracion;
    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#6a0dad', '#ffc107', '#00bcd4', '#4caf50', '#ff6b6b']
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#6a0dad', '#ffc107', '#00bcd4', '#4caf50', '#ff6b6b']
        });
        if (Date.now() < fin) {
            requestAnimationFrame(frame);
        }
    }());
}

function aplicarShake(elemento) {
    elemento.classList.add('shake');
    setTimeout(() => elemento.classList.remove('shake'), 500);
}

function animarContador(elemento, valorFinal, decimales = 2) {
    const duracion = 1000;
    const pasos = 60;
    const incremento = valorFinal / pasos;
    let valorActual = 0;
    let paso = 0;
    const intervalo = setInterval(() => {
        valorActual += incremento;
        paso++;
        if (paso >= pasos) {
            clearInterval(intervalo);
            elemento.textContent = valorFinal.toFixed(decimales);
        } else {
            elemento.textContent = valorActual.toFixed(decimales);
        }
    }, duracion / pasos);
}

function actualizarBarraProgreso(porcentaje, texto) {
    const container = document.getElementById('progress-container');
    const fill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    container.style.display = 'block';
    setTimeout(() => {
        fill.style.width = Math.min(porcentaje, 100) + '%';
        progressText.textContent = texto;
    }, 100);
}

function generarEscenarios(n1, n2, metaPersonalizada) {
    const scenariosBox = document.getElementById('scenarios-box');
    const scenariosBody = document.getElementById('scenarios-body');
    scenariosBox.style.display = 'block';
    scenariosBody.innerHTML = '';
    const notasCorte3 = [0, 1, 2, 3, 4, 5];
    notasCorte3.forEach(nota => {
        const notaFinal = (n1 * PESO_CORTE_1) + (n2 * PESO_CORTE_2) + (nota * PESO_CORTE_3);
        const estado = notaFinal >= metaPersonalizada ? '✅ Aprueba' : '❌ No aprueba';
        const clase = notaFinal >= metaPersonalizada ? 'success' : 'failure';
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><strong>${nota.toFixed(1)}</strong></td>
            <td>${notaFinal.toFixed(2)}</td>
            <td class="${clase}">${estado}</td>
        `;
        scenariosBody.appendChild(fila);
    });
}

function agregarAlHistorial(materia, n1, n2, notaRequerida, meta) {
    const fecha = new Date().toLocaleString('es-CO', { 
        day: '2-digit', 
        month: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    historialCalculos.unshift({
        fecha,
        materia: materia || 'Materia sin nombre',
        n1, n2, notaRequerida, meta
    });
    if (historialCalculos.length > 10) {
        historialCalculos.pop();
    }
    mostrarHistorial();
}

function mostrarHistorial() {
    const historyBox = document.getElementById('history-box');
    const historyList = document.getElementById('history-list');
    if (historialCalculos.length === 0) {
        historyBox.style.display = 'none';
        return;
    }
    historyBox.style.display = 'block';
    historyList.innerHTML = '';
    historialCalculos.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <strong>${item.materia}</strong> - ${item.fecha}<br>
            Corte 1: ${item.n1} | Corte 2: ${item.n2} | Requerida: <strong>${item.notaRequerida}</strong> (Meta: ${item.meta})
        `;
        historyList.appendChild(div);
    });
}

function clearHistory() {
    if (confirm('¿Seguro que deseas borrar todo el historial?')) {
        historialCalculos = [];
        mostrarHistorial();
    }
}

// ===== FUNCIÓN PRINCIPAL DE CÁLCULO =====

function calcularNota() {
    const inputCorte1 = document.getElementById('corte1');
    const inputCorte2 = document.getElementById('corte2');
    const inputMeta = document.getElementById('meta-personalizada');
    const nombreEstudiante = document.getElementById('nombre-estudiante').value.trim();
    const nombreMateria = document.getElementById('nombre-materia').value.trim();

    validateInput(inputCorte1);
    validateInput(inputCorte2);
    validateInput(inputMeta);
    
    const n1 = parseFloat(inputCorte1.value);
    const n2 = parseFloat(inputCorte2.value);
    const metaPersonalizada = parseFloat(inputMeta.value);

    if (isNaN(n1) || isNaN(n2) || isNaN(metaPersonalizada)) {
        alert("Por favor, ingresa notas válidas entre 0.0 y 5.0.");
        return;
    }

    const acumulado = (n1 * PESO_CORTE_1) + (n2 * PESO_CORTE_2);
    const faltante = metaPersonalizada - acumulado;
    let notaRequerida = Math.max(0, faltante / PESO_CORTE_3);

    const notaRequeridaEl = document.getElementById('nota-requerida');
    const mensajeFinalEl = document.getElementById('mensaje-final');
    const fraseMotiEl = document.getElementById('frase-motivacional');
    
    mensajeFinalEl.classList.remove('success', 'failure', 'warning');
    mensajeFinalEl.textContent = '';
    fraseMotiEl.textContent = '';
    
    const porcentajeProgreso = (acumulado / metaPersonalizada) * 100;
    actualizarBarraProgreso(
        Math.min(porcentajeProgreso, 100), 
        `Has acumulado ${acumulado.toFixed(2)} de ${metaPersonalizada.toFixed(2)} (${porcentajeProgreso.toFixed(1)}%)`
    );

    const saludo = nombreEstudiante ? `${nombreEstudiante}, ` : '';
    const materiaTexto = nombreMateria ? ` en ${nombreMateria}` : '';
    const mensajePersonalizado = obtenerMensajePorNota(notaRequerida);
    
    animacionSegunNota(notaRequerida);

    if (notaRequerida <= 0) {
        lanzarConfeti();
        notaRequeridaEl.textContent = "0.0";
        mensajeFinalEl.innerHTML = `<strong>${mensajePersonalizado.titulo}</strong><br>${mensajePersonalizado.mensaje}${materiaTexto}`;
        mensajeFinalEl.classList.add('success');
        notaRequeridaEl.style.color = '#4caf50';
    } else if (notaRequerida > 5.0) {
        aplicarShake(notaRequeridaEl);
        animarContador(notaRequeridaEl, notaRequerida, 2);
        mensajeFinalEl.innerHTML = `<strong>${mensajePersonalizado.titulo}</strong><br>${saludo}${mensajePersonalizado.mensaje}${materiaTexto}`;
        mensajeFinalEl.classList.add('failure');
        notaRequeridaEl.style.color = '#f44336';
    } else if (notaRequerida > 4.5) {
        animarContador(notaRequeridaEl, notaRequerida, 2);
        mensajeFinalEl.innerHTML = `<strong>${mensajePersonalizado.titulo}</strong><br>${saludo}${mensajePersonalizado.mensaje}${materiaTexto}`;
        mensajeFinalEl.classList.add('warning');
        notaRequeridaEl.style.color = '#ff9800';
    } else if (notaRequerida > 3.8) {
        animarContador(notaRequeridaEl, notaRequerida, 2);
        mensajeFinalEl.innerHTML = `<strong>${mensajePersonalizado.titulo}</strong><br>${saludo}${mensajePersonalizado.mensaje}${materiaTexto}`;
        mensajeFinalEl.classList.add('warning');
        notaRequeridaEl.style.color = '#ff9800';
    } else {
        animarContador(notaRequeridaEl, notaRequerida, 2);
        mensajeFinalEl.innerHTML = `<strong>${mensajePersonalizado.titulo}</strong><br>${saludo}${mensajePersonalizado.mensaje}${materiaTexto}`;
        mensajeFinalEl.classList.add('success');
        notaRequeridaEl.style.color = '#4caf50';
    }
    
    // Mostrar frase motivacional
    fraseMotiEl.textContent = obtenerFraseMotivacional(notaRequerida);
    
    // Mostrar el contenedor de resultados
    document.getElementById('resultado-container').style.display = 'block';
    
    // Generar tabla de escenarios
    generarEscenarios(n1, n2, metaPersonalizada);
    
    // Agregar al historial
    agregarAlHistorial(
        nombreMateria, 
        n1.toFixed(2), 
        n2.toFixed(2), 
        notaRequerida.toFixed(2), 
        metaPersonalizada.toFixed(2)
    );
    
    // Scroll suave hacia resultados
    document.getElementById('resultado-container').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    });
}

// ===== INICIALIZACIÓN =====

document.addEventListener('DOMContentLoaded', () => {
    const nombreMateriaInput = document.getElementById('nombre-materia');
    if (nombreMateriaInput) {
        nombreMateriaInput.addEventListener('input', cambiarTemaMateria);
    }
    
    // Inicializar tema por defecto
    cambiarTemaMateria();
    
    // Ajustar canvas al cambiar tamaño de ventana
    window.addEventListener('resize', () => {
        const canvas = document.getElementById('particles-canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    });
});