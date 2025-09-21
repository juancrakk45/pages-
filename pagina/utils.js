// --- CONFIGURACIÓN DE GALERÍA ---
let currentMediaIndex = 0;
const itemsPerPage = 1;

// Lista de imágenes
const mediaContent = [
    { type: "image", src: "imagen/1.jpg", alt: "Foto especial 1" },
    { type: "image", src: "imagen/2.jpg", alt: "Foto especial 2" },
    { type: "image", src: "imagen/3.jpg", alt: "Foto especial 3" },
    { type: "image", src: "imagen/4.jpg", alt: "Foto especial 4" },
    { type: "image", src: "imagen/5.jpg", alt: "Foto especial 5" },
    { type: "image", src: "imagen/6.jpg", alt: "Foto especial 6" },
    { type: "image", src: "imagen/7.jpg", alt: "Foto especial 7" },
    { type: "image", src: "imagen/8.jpg", alt: "Foto especial 8" },
    { type: "image", src: "imagen/9.jpg", alt: "Foto especial 9" },
    { type: "image", src: "imagen/10.jpg", alt: "Foto especial 10" },
    { type: "image", src: "imagen/11.jpg", alt: "Foto especial 11" },
    { type: "image", src: "imagen/12.jpg", alt: "Foto especial 12" },
    { type: "image", src: "imagen/13.jpg", alt: "Foto especial 13" },
    { type: "image", src: "imagen/14.jpg", alt: "Foto especial 14" },
    { type: "image", src: "imagen/15.jpg", alt: "Foto especial 15" },
    { type: "image", src: "imagen/16.jpg", alt: "Foto especial 16" },
    { type: "image", src: "imagen/17.jpg", alt: "Foto especial 17" },
    { type: "image", src: "imagen/18.jpg", alt: "Foto especial 18" },
    { type: "image", src: "imagen/19.jpg", alt: "Foto especial 19" },
    { type: "image", src: "imagen/20.jpg", alt: "Foto especial 20" },
    { type: "image", src: "imagen/21.jpg", alt: "Foto especial 21" },
];

let totalMedia = mediaContent.length;

// ===== FUNCIONES AUXILIARES =====
function createMediaElement(media) {
    return new Promise((resolve) => {
        let element;
        if (media.type === "image") {
            element = document.createElement('img');
            element.src = media.src;
            element.alt = media.alt || 'Foto especial';
        } else if (media.type === "video") {
            element = document.createElement('video');
            element.src = media.src;
            element.controls = true;
            element.muted = true;
            element.preload = 'metadata';
            element.playsInline = true;
        } else {
            resolve(document.createTextNode('Tipo no soportado'));
            return;
        }

        element.className = 'media-display fade-in';
        element.style.opacity = '0';
        element.style.width = '100vw';
        element.style.height = '100vh';
        element.style.objectFit = 'contain'; // No recorta la imagen

        element.onload = element.onloadeddata = () => {
            element.style.transition = 'opacity .25s';
            element.style.opacity = '1';
            resolve(element);
        };
        element.onerror = () => {
            console.error('Error cargando media:', media.src);
            resolve(element);
        };
    });
}

// ===== ACTUALIZAR GALERÍA =====
async function updateMediaDisplay() {
    const container = document.getElementById("mediaContainer");
    const counter = document.getElementById("galleryCounter");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const continueBtn = document.getElementById("continueBtn");

    if (!container || !counter) return;

    container.innerHTML = "";

    const media = mediaContent[currentMediaIndex];
    const element = await createMediaElement(media);

    const wrapper = document.createElement('div');
    wrapper.className = 'media-wrapper';
    wrapper.appendChild(element);
    container.appendChild(wrapper);

    counter.textContent = `Imagen ${currentMediaIndex + 1} de ${totalMedia}`;

    if (prevBtn) prevBtn.disabled = currentMediaIndex === 0;

    if (nextBtn && continueBtn) {
        if (currentMediaIndex === totalMedia - 1) {
            nextBtn.classList.add('hidden');
            continueBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            continueBtn.classList.add('hidden');
        }
    }
}

// ===== NAVEGACIÓN =====
function nextMedia() {
    if (currentMediaIndex < totalMedia - 1) {
        currentMediaIndex++;
        updateMediaDisplay();
    }
}

function previousMedia() {
    if (currentMediaIndex > 0) {
        currentMediaIndex--;
        updateMediaDisplay();
    }
}

// ===== SLIDESHOW =====
let slideshowInterval = null;
function startSlideshow() {
    if (slideshowInterval) return;
    slideshowInterval = setInterval(() => nextMedia(), 5000);
}
function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
}

// ===== ABRIR REGALO =====
function openGift() {
    const giftSection = document.getElementById("giftSection");
    const gallerySection = document.getElementById("gallerySection");
    if (!giftSection || !gallerySection) return;

    giftSection.classList.add('fade-out');
    setTimeout(() => {
        giftSection.style.display = 'none';
        gallerySection.style.display = 'flex';
        gallerySection.classList.add('fade-in');
        currentMediaIndex = 0;
        updateMediaDisplay();
        const musica = document.getElementById("musica");
        if (musica) musica.play().catch(err => console.log("Audio bloqueado:", err));
        startSlideshow();
    }, 800);
}
// ===== Carta y corazón =====
const letterMessage = `Querida Natalia,

Hoy es un día muy especial, porque celebramos tus 15 años. Es increíble ver cómo has crecido y te has convertido en la persona maravillosa que eres hoy.

Desde pequeña has sido una luz brillante en nuestras vidas, con tu sonrisa que ilumina cualquier habitación y tu corazón tan grande y generoso. Cada día nos sorprendes con tu inteligencia, tu creatividad y esa forma tan especial que tienes de ver el mundo.

En estos 15 años has demostrado ser una persona fuerte, valiente y llena de sueños. Tus logros nos llenan de orgullo, pero más que eso, nos llena de alegría ver la bondad y el amor que compartes con todos los que te rodean.

Que este nuevo año de vida esté lleno de aventuras emocionantes, risas interminables, amistades verdaderas y momentos que se conviertan en recuerdos preciosos. Que cada día te acerque más a tus sueños y que nunca pierdas esa chispa especial que te hace única.

Recuerda siempre que eres amada más de lo que las palabras pueden expresar, y que estaremos aquí para apoyarte en cada paso de tu camino.

¡Feliz cumpleaños número 15, princesa!

Con todo nuestro amor,
Tu familia que te adora`;

let charIndex = 0;
function typeLetter() {
    const letterText = document.getElementById("letterText");
    const cursor = document.getElementById("typingCursor");

    if (!letterText) return;

    if (charIndex < letterMessage.length) {
        letterText.innerHTML += letterMessage.charAt(charIndex);
        charIndex++;
        setTimeout(typeLetter, 50);
    } else {
        if (cursor) cursor.style.display = "none";

        // Contador antes del corazón
        const countdown = document.createElement("div");
        countdown.id = "countdown";
        countdown.textContent = "Espera 10 segundos...";
        countdown.style.marginTop = "20px";
        countdown.style.fontSize = "1.2rem";
        countdown.style.color = "#ff4081";
        countdown.style.textAlign = "center";
        document.getElementById("letterSection").appendChild(countdown);

        let timeLeft = 10;
        const timer = setInterval(() => {
            timeLeft--;
            countdown.textContent = `Espera ${timeLeft} segundos...`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                countdown.textContent = "❤️ Aquí viene la sorpresa...";
                setTimeout(showFinal, 1000);
            }
        }, 1000);
    }
}

function goToLetter() {
    const gallerySection = document.getElementById("gallerySection");
    const letterSection = document.getElementById("letterSection");

    if (gallerySection && letterSection) {
        gallerySection.classList.add('fade-out');
        setTimeout(() => {
            gallerySection.style.display = 'none';
            letterSection.style.display = 'flex';
            letterSection.classList.add('fade-in');
            setTimeout(() => {
                typeLetter();
            }, 800);
        }, 800);
    }
}

function showFinal() {
    const letterSection = document.getElementById("letterSection");
    const finalSection = document.getElementById("finalSection");

    if (!letterSection || !finalSection) return;

    letterSection.classList.add('fade-out');
    setTimeout(() => {
        letterSection.style.display = 'none';
        finalSection.style.display = 'flex';
        finalSection.classList.add('fade-in');
        createHeart();
    }, 800);
}

function createHeart() {
    const heartContainer = document.getElementById("heartContainer");
    const heartPattern = [
        "0011101111000",
        "0111111111100",
        "1111111111110",
        "1111111111110",
        "1111111111110",
        "0111111111100",
        "0011111111000",
        "0001111110000",
        "0000111100000",
        "0000011000000"
    ];

    if (!heartContainer) return;

    const pixelSize = 20;
    heartContainer.style.width = heartPattern[0].length * pixelSize + "px";
    heartContainer.style.height = heartPattern.length * pixelSize + "px";

    heartContainer.innerHTML = "";

    heartPattern.forEach((row, y) => {
        [...row].forEach((cell, x) => {
            if (cell === "1") {
                const pixel = document.createElement("div");
                pixel.className = "heart-pixel";
                pixel.style.left = `${x * pixelSize}px`;
                pixel.style.top = `${y * pixelSize}px`;
                heartContainer.appendChild(pixel);

                setTimeout(() => {
                    pixel.classList.add("animate");
                }, (x + y) * 100);
            }
        });
    });

    setInterval(() => {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle-final";
        sparkle.textContent = "✨";
        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.top = Math.random() * 100 + "%";
        document.getElementById("finalSection").appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 3000);
    }, 800);
}

// ===== Partículas en el regalo =====
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
            if (sparkle.parentNode) sparkle.remove();
        }, 3000);
    }, 300);
}
// ===== Inicialización =====
document.addEventListener("DOMContentLoaded", () => {
    updateMediaDisplay();
});

window.openGift = openGift;
window.nextMedia = nextMedia;
window.previousMedia = previousMedia;
