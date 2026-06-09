const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const mainScene = document.getElementById("main-scene");
const message = document.getElementById("message");
const music = document.getElementById("music");

const text = "¡Esto es mejor que cualquier trofeo que haya visto!  Tienes más corazón que un V8 bien afinado, amig@. Nunca dejes de correr y perseguir tus metas.¡Aquí siempre tienes a alguien que te apoya!.";

startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    mainScene.style.display = "block";
    
    if(music) {
        music.volume = 0.5;
        music.play().catch(e => console.log("Audio bloqueado por navegador"));
    }

    let i = 0;
    const writer = setInterval(() => {
        message.innerHTML += text.charAt(i);
        i++;
        if(i >= text.length) {
            clearInterval(writer);
            if(typeof confetti === "function") confetti({ particleCount: 300, spread: 180 });
        }
    }, 50);
});