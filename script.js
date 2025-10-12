// script.js

const decisionLabel = document.getElementById('decision-label');
const generateButton = document.getElementById('generate-button');
// decisionPhrases è definito in frasi.js

// Testi per il pulsante
const TEXT_IDLE = "DECIDO<br>IO";
const TEXT_LOADING = "STO<br>DECIDENDO";

/**
 * Genera un indice casuale e mostra la frase corrispondente.
 */
function generateDecision() {
    // 1. Disabilita il pulsante e aggiorna il testo
    generateButton.disabled = true;
    generateButton.innerHTML = TEXT_LOADING; 

    // 2. Animazione "Shuffling"
    let shuffleCount = 0;
    const maxShuffle = 10;
    const shuffleInterval = 100; // 100ms per cambio

    const shuffle = setInterval(() => {
        if (shuffleCount < maxShuffle) {
            // Mostra una frase casuale temporanea
            const tempIndex = Math.floor(Math.random() * decisionPhrases.length);
            decisionLabel.textContent = decisionPhrases[tempIndex];
            
            // Animazione colore label - passa velocemente da un nero all'altro
            const shade = 20 - Math.floor(Math.random() * 20); 
            decisionLabel.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
            
            shuffleCount++;
        } else {
            clearInterval(shuffle);
            
            // 3. Selezione finale
            const finalIndex = Math.floor(Math.random() * decisionPhrases.length);
            const finalDecision = decisionPhrases[finalIndex];

            // 4. Mostra la decisione finale e resetta lo stile
            decisionLabel.textContent = finalDecision;
            decisionLabel.style.backgroundColor = 'var(--colore-principale)'; 

            // 5. Riabilita il pulsante
            generateButton.disabled = false;
            generateButton.innerHTML = TEXT_IDLE; 
            
            console.log("Decisione generata. Punto ideale per mostrare un annuncio Interstitial.");
        }
    }, shuffleInterval);
}

// Inizializzazione: Collega la funzione al pulsante
document.addEventListener('DOMContentLoaded', () => {
    generateButton.addEventListener('click', generateDecision);
    // Imposta lo stato iniziale del testo della label
    decisionLabel.innerHTML = "Premi DECIDO IO<br>per la tua risposta";
});
