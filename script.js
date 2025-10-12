// script.js

const decisionLabel = document.getElementById('decision-label');
const generateButton = document.querySelector('.generate-button');
// decisionPhrases è definito in frasi.js

/**
 * Genera un indice casuale e mostra la frase corrispondente.
 */
function generateDecision() {
    // 1. Disabilita il pulsante durante l'animazione
    generateButton.disabled = true;
    generateButton.textContent = "Sto decidendo...";

    // 2. Animazione "Shuffling" (opzionale, ma migliora l'esperienza)
    let shuffleCount = 0;
    const maxShuffle = 10;
    const shuffleInterval = 100; // 100ms per cambio

    const shuffle = setInterval(() => {
        if (shuffleCount < maxShuffle) {
            // Mostra una frase casuale temporanea
            const tempIndex = Math.floor(Math.random() * decisionPhrases.length);
            decisionLabel.textContent = decisionPhrases[tempIndex];
            // Piccola animazione di colore
            decisionLabel.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
            shuffleCount++;
        } else {
            clearInterval(shuffle);
            
            // 3. Selezione finale
            const finalIndex = Math.floor(Math.random() * decisionPhrases.length);
            const finalDecision = decisionPhrases[finalIndex];

            // 4. Mostra la decisione finale e resetta lo stile
            decisionLabel.textContent = finalDecision;
            decisionLabel.style.backgroundColor = 'white'; // Colore neutro

            // 5. Riabilita il pulsante
            generateButton.disabled = false;
            generateButton.textContent = "DECIDO";
            
            // Logica per inserire qui la visualizzazione di un annuncio Interstitial di AdMob/AdSense
            // Nel contesto di una web app, questo punto è ideale per mostrare una pubblicità.
            console.log("Decisione generata. Punto ideale per mostrare un annuncio Interstitial.");
        }
    }, shuffleInterval);
}

/**
 * Resetta l'etichetta allo stato iniziale.
 */
function resetDecision() {
    decisionLabel.textContent = "Premi DECIDO per la tua risposta";
    decisionLabel.style.backgroundColor = 'white';
    console.log("Decisione resettata.");
}

// Inizializzazione: Assicura che il pulsante sia collegato al suo click handler
document.addEventListener('DOMContentLoaded', () => {
    generateButton.addEventListener('click', generateDecision);
});
