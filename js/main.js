const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
]

//ciclo che permette di creare dinamicamente le immagini
for (let i = 0; i < images.length; i++){
    document.querySelector('.img-wrapper').innerHTML += `<div class="images">
                                                            <img src="${images[i]}" class="img">
                                                        </div>`
}

// variabile per il recupero degli elementi stampati col ciclo
const image = document.querySelectorAll('.images');

// aggiunge la classe show alla img attiva (in questo caso la prima dato che active viene inizializzata con valore = 0)
let active = 0;
image[active].classList.add('show');

//recupero del bottone next e del bottone prev
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

//funzione per mostare l'immagine successiva al click
next.addEventListener('click',
    function () {
        prev.classList.remove('hidden'); // rimuove hidden da prev (default in HTML)
        image[active].classList.remove('show');
        active++;
        image[active].classList.add('show');
        if (active == images.length - 1) { //condizione che permette (una volta raggiunta l'ultima immagine) di nascondere (tramite css con una classe) il pulsante next
            next.classList.add('hidden');
        }
    }
)

//funzione per mostare l'immagine precedente
prev.addEventListener('click',
    function () {
        image[active].classList.remove('show');
        active--;
        image[active].classList.add('show');
        next.classList.remove('hidden');
        if (active == images.length - 5) { //condizione che permette (una volta raggiunta la prima immagine) di riassegnare la classe "hidden" al pulsante prev
            prev.classList.add('hidden');
        }
    }
) 