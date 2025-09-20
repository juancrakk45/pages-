// Variables globales
let currentMediaIndex = 0;
const totalMedia = 4;
let letterIndex = 0;
const typingSpeed = 50;

// Contenido de medios (reemplaza con tus fotos/videos reales)
const mediaContent = [
    {
        type: 'image',
        src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZmY2YjlkIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+Rm90byAxPC90ZXh0Pgo8dGV4dCB4PSIyMDAiIHk9IjIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+UmVjdWVyZG9zIEVzcGVjaWFsZXM8L3RleHQ+Cjwvc3ZnPg=='
    },
    {
        type: 'image',
        src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjOGU0NGFkIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+Rm90byAyPC90ZXh0Pgo8dGV4dCB4PSIyMDAiIHk9IjIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+TW9tZW50b3MgVW5pY29zPC90ZXh0Pgo8L3N2Zz4='
    },
    {
        type: 'video',
        src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZmYxNDkzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+VmlkZW8gMTwvdGV4dD4KPHN2ZyB4PSIxNzUiIHk9IjIwMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz4KPHBvbHlnb24gcG9pbnRzPSIxMCw4IDE2LDEyIDEwLDE2Ii8+Cjwvc3ZnPgo8dGV4dCB4PSIyMDAiIHk9IjI3MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+UmVjdWVyZG9zIGVuIE1vdmltaWVudG88L3RleHQ+Cjwvc3ZnPg=='
    },
    {
        type: 'image',
        src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjYzQ0NjkzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+Rm90byA0PC90ZXh0Pgo8dGV4dCB4PSIyMDAiIHk9IjIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+U29ucmlzYXMgeSBBbGVncsOtYTwvdGV4dD4KPC9zdmc+'
    }
];

// Texto de la carta
const fullLetterText = `Querida Natalia,

Hoy es un día muy especial, porque celebramos tus 15 años. Es increíble ver cómo has crecido y te has convertido en la persona maravillosa que eres hoy.

Desde pequeña has sido una luz brillante en nuestras vidas, con tu sonrisa que ilumina cualquier habitación y tu corazón tan grande y generoso. Cada día nos sorprendes con tu inteligencia, tu creatividad y esa forma tan especial que tienes de ver el mundo.

En estos 15 años has demostrado ser una persona fuerte, valiente y llena de sueños. Tus logros nos llenan de orgullo, pero más que eso, nos llena de alegría ver la bondad y el amor que compartes con todos los que te rodean.

Que este nuevo año de vida esté lleno de aventuras emocionantes, risas interminables, amistades verdaderas y momentos que se conviertan en recuerdos preciosos. Que cada día te acerque más a tus sueños y que nunca pierdas esa chispa especial que te hace única.

Recuerda siempre que eres amada más de lo que las palabras pueden expresar, y que estaremos aquí para apoyarte en cada paso de tu camino.

¡Feliz cumpleaños número 15, princesa!

Con todo nuestro amor,
Tu familia que te adora`;

// ===== FUNCIONES PRINCIPALES =====

// Crear efectos de partículas para el regalo
function createSparkles() {
    const sparklesContainer = document.querySelector('.sparkles');
    if (!sparklesContainer) return;
    
    const sparkleSymbols = ['✨', '⭐', '💫', '🌟'];
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDuration = (Math.random() * 3 + 1) + 's';
        sparklesContainer.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.remove();
            }
        }, 3000);
    }, 300);
}

// Abrir regalo y pasar a galería
function openGift() {
    const giftSection = document.getElementById('giftSection');
    const gallerySection = document.getElementById('gallerySection');
    
    if (giftSection && gallerySection) {
        giftSection.classList.add('fade-out');
        setTimeout(() => {
            giftSection.style.display = 'none';
            gallerySection.style.display = 'flex';
            gallerySection.classList.add('fade-in');
        }, 800);
    }
}

// Actualizar display de medios en la galería
function updateMediaDisplay() {
    const mediaContainer = document.getElementById('mediaContainer');
    const counter = document.getElementById('galleryCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const continueBtn = document.getElementById('continueBtn');
    
    if (!mediaContainer || !counter) return;
    
    const media = mediaContent[currentMediaIndex];
    
    if (media.type === 'video') {
        mediaContainer.innerHTML = `<video class="media-display" controls autoplay muted>
            <source src="${media.src}" type="video/mp4">
            Tu navegador no soporta el tag de video.
        </video>`;
    } else {
        mediaContainer.innerHTML = `<img src="${media.src}" class="media-display" alt="Momento especial ${currentMediaIndex + 1}">`;
    }
    
    counter.textContent = `${currentMediaIndex + 1} de ${totalMedia}`;
    
    if (prevBtn) prevBtn.disabled = currentMediaIndex === 0;
    if (nextBtn) nextBtn.disabled = currentMediaIndex === totalMedia - 1;
    
    if (currentMediaIndex === totalMedia - 1) {
        if (nextBtn) nextBtn.classList.add('hidden');
        if (continueBtn) continueBtn.classList.remove('hidden');
    } else {
        if (nextBtn) nextBtn.classList.remove('hidden');
        if (continueBtn) continueBtn.classList.add('hidden');
    }
}

// Navegar al siguiente medio
function nextMedia() {
    if (currentMediaIndex < totalMedia - 1) {
        currentMediaIndex++;
        updateMediaDisplay();
    }
}

// Navegar al medio anterior
function previousMedia() {
    if (currentMediaIndex > 0) {
        currentMediaIndex--;
        updateMediaDisplay();
    }
}

// Ir a la sección de la carta
function goToLetter() {
    const gallerySection = document.getElementById('gallerySection');
    const letterSection = document.getElementById('letterSection');
    
    if (gallerySection && letterSection) {
        gallerySection.classList.add('fade-out');
        setTimeout(() => {
            gallerySection.style.display = 'none';
            letterSection.style.display = 'flex';
            letterSection.classList.add('fade-in');
            setTimeout(() => {
                startTyping();
            }, 1000);
        }, 800);
    }
}

// Efecto de escritura de la carta
function startTyping() {
    const letterTextElement = document.getElementById('letterText');
    const cursor = document.getElementById('typingCursor');
    
    if (!letterTextElement) return;
    
    function typeCharacter() {
        if (letterIndex < fullLetterText.length) {
            const char = fullLetterText[letterIndex];
            if (char === '\n') {
                letterTextElement.innerHTML = letterTextElement.innerHTML.replace(
                    '<span class="typing-cursor" id="typingCursor"></span>', 
                    ''
                ) + '<br><span class="typing-cursor" id="typingCursor"></span>';
            } else {
                letterTextElement.innerHTML = letterTextElement.innerHTML.replace(
                    '<span class="typing-cursor" id="typingCursor"></span>', 
                    char + '<span class="typing-cursor" id="typingCursor"></span>'
                );
            }
            letterIndex++;
            setTimeout(typeCharacter, typingSpeed);
        } else {
            // Ocultar cursor y ir a la sección final
            if (cursor) cursor.style.display = 'none';
            setTimeout(() => {
                goToFinal();
            }, 2000);
        }
    }
    
    typeCharacter();
}

// Ir a la sección final
function goToFinal() {
    const letterSection = document.getElementById('letterSection');
    const finalSection = document.getElementById('finalSection');
    
    if (letterSection && finalSection) {
        letterSection.classList.add('fade-out');
        setTimeout(() => {
            letterSection.style.display = 'none';
            finalSection.style.display = 'flex';
            finalSection.classList.add('fade-in');
            // Iniciar creación del corazón
            setTimeout(() => {
                createPixelHeart();
            }, 500);
        }, 800);
    }
}

// Crear corazón pixel por pixel
function createPixelHeart() {
    const container = document.getElementById('heartContainer');
    const finalMsg = document.getElementById('finalMsg');
    
    if (!container) return;
    
    // Patrón del corazón (1 = pixel, 0 = vacío)
    const heartPattern = [
        [0,0,1,1,1,0,0,0,1,1,1,0,0],
        [0,1,1,1,1,1,0,1,1,1,1,1,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,0]
    ];
    
    let delay = 0;
    
    // Crear todos los píxeles
    for (let row = 0; row < heartPattern.length; row++) {
        for (let col = 0; col < heartPattern[row].length; col++) {
            if (heartPattern[row][col] === 1) {
                setTimeout(() => {
                    const pixel = document.createElement('div');
                    pixel.className = 'heart-pixel';
                    pixel.style.left = (col * 22) + 'px';
                    pixel.style.top = (row * 22) + 'px';
                    container.appendChild(pixel);
                    
                    // Animar aparición
                    setTimeout(() => {
                        pixel.classList.add('animate');
                    }, 50);
                }, delay);
                delay += 100;
            }
        }
    }
    
    // Mostrar mensaje final después de que aparezcan todos los píxeles
    setTimeout(() => {
        if (finalMsg) {
            finalMsg.style.animationDelay = '0s';
        }
        createContinuousSparkles();
    }, delay + 1000);
}

// Crear efectos de partículas continuas
function createContinuousSparkles() {
    const container = document.getElementById('heartContainer');
    if (!container) return;
    
    const sparkleSymbols = ['✨', '💖', '🎉', '⭐', '🌟', '💫', '🎊', '💕'];
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-final';
        sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
        
        // Posición aleatoria alrededor del corazón
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        
        container.appendChild(sparkle);
        
        // Remover después de la animación
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.remove();
            }
        }, 3000);
    }, 600);
}

// ===== INICIALIZACIÓN =====

// Inicializar página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada - Inicializando efectos');
    createSparkles();
    updateMediaDisplay();
});

// Asegurar que las funciones estén disponibles globalmente
window.openGift = openGift;
window.nextMedia = nextMedia;
window.previousMedia = previousMedia;
window.goToLetter = goToLetter;