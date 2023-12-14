const div = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

//   unsplash
const words = [
    "Joyeux anniversaire, cher Président ", 
    "En ce jour exceptionnel, je tiens à vous adresser mes vœux les plus chaleureux pour votre anniversaire. Que cette journée soit emplie de joie, de succès et de moments inoubliables.", 
    "Votre leadership inspirant et votre dévouement envers le groupe Africa Smile sont une source d'inspiration pour nous tous. Puissiez-vous continuer à guider avec sagesse et détermination.", 
    "Que cette nouvelle année de votre vie soit marquée par des réussites personnelles et professionnelles, ainsi que par la réalisation de tous vos projets. Merci pour votre service continu envers nos les Jeunes.",
    "Joyeux anniversaire, Monsieur le Président ! Que cette journée soit à la hauteur de votre grandeur. ",
    " Avec mes salutations respectueuses,Senam"
]
div.innerHTML = words[0];
let position = 0;

const moveRight = () => {
    if (position >= words.length - 1) {
        position = 0
        div.innerHTML = words[position];
        return;
    }
    div.innerHTML = words[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = words.length - 1;
        div.innerHTML = words[position];
        return;
    }
    div.innerHTML = words[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);