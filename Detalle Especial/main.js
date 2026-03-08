const btn = document.getElementById('action-btn');
const msgDisplay = document.getElementById('message');
const music = document.getElementById('bg-music');

const frases = [
    "Esta flor es un detalle para ti 🌻",
    "Eres increíble, iluminas todo a tu alrededor. ❤️",
    "Eres una mujer maravillosa, gracias por existir en mi vida.",
    "Tu sonrisa hace que mi día sea mucho mejor.",
    "Eres una persona única y muy especial para mí.",
    "Me encanta la forma en que haces todo más bonito.",
    "Tu forma de ser es simplemente encantadora.",
    "Tenerte en mi vida es un regalo.",
    "Eres más especial de lo que imaginas.",
    "Cada momento contigo vale la pena.",
    "Tu alegría contagia a todos los que te rodean.",
    "Eres una mujer fuerte, hermosa e inspiradora.",
    "Contigo todo se siente más fácil y más bonito.",
    "Tu forma de ver la vida me encanta.",
    "Eres una luz en mi vida. ✨",
    "Siempre logras sacarme una sonrisa.",
    "Tu presencia hace que todo sea mejor.",
    "Eres una mezcla perfecta de belleza y dulzura.",
    "Gracias por ser tan especial conmigo.",
    "Cada día me alegra más conocerte.",
    "Eres una persona maravillosa por dentro y por fuera.",
    "Tu forma de ser me encanta.",
    "Eres alguien que vale muchísimo.",
    "Me gusta mucho la persona que eres.",
    "Tienes algo que te hace única.",
    "Eres simplemente increíble. 💖",
    "FELIZ DIA DE LA MUJER"
];

let indice = 0;

btn.addEventListener('click', () => {
    // Reproducir la canción de Prince Royce
    music.play().catch(e => console.log("Interacción necesaria para audio"));

    msgDisplay.style.opacity = 0;
    msgDisplay.style.transform = "translateY(10px)";
    
    setTimeout(() => {
        msgDisplay.innerText = frases[indice];
        
        // Estilo especial para el mensaje final
        if (frases[indice] === "FELIZ DIA DE LA MUJER") {
            msgDisplay.style.color = "#ffeb3b"; // Dorado
            msgDisplay.style.fontWeight = "bold";
            msgDisplay.style.fontSize = "1.8rem";
            msgDisplay.style.textShadow = "0 0 15px rgba(255, 235, 59, 0.6)";
        } else {
            msgDisplay.style.color = "white";
            msgDisplay.style.fontWeight = "normal";
            msgDisplay.style.fontSize = "1.3rem";
            msgDisplay.style.textShadow = "none";
        }

        msgDisplay.style.opacity = 1;
        msgDisplay.style.transform = "translateY(0)";
        
        indice++;
        
        if (indice >= frases.length) {
            btn.innerText = "Ver de nuevo";
            indice = 0;
        } else {
            btn.innerText = "Siguiente mensaje";
        }
    }, 500);
});