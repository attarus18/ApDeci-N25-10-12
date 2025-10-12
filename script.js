// script.js

const decisionLabel = document.getElementById('decision-label');
const generateButton = document.getElementById('generate-button');
// decisionPhrases è definito in frasi.js

/**
 * Genera un indice casuale e mostra la frase corrispondente.
 */
function generateDecision() {
    // 1. Disabilita il pulsante durante l'animazione
    generateButton.disabled = true;
    generateButton.innerHTML = "LANCIO...<br>⏳"; // Testo aggiornato durante il caricamento

    // 2. Animazione "Shuffling" (opzionale, ma migliora l'esperienza)
    let shuffleCount = 0;
    const maxShuffle = 10;
    const shuffleInterval = 100; // 100ms per cambio

    const shuffle = setInterval(() => {
        if (shuffleCount < maxShuffle) {
            // Mostra una frase casuale temporanea
            const tempIndex = Math.floor(Math.random() * decisionPhrases.length);
            decisionLabel.textContent = decisionPhrases[tempIndex];
            
            // Animazione colore label - passa velocemente da un nero all'altro
            const shade = 20 - Math.floor(Math.random() * 20); // Variazione di un nero quasi totale
            decisionLabel.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
            
            shuffleCount++;
        } else {
            clearInterval(shuffle);
            
            // 3. Selezione finale
            const finalIndex = Math.floor(Math.random() * decisionPhrases.length);
            const finalDecision = decisionPhrases[finalIndex];

            // 4. Mostra la decisione finale e resetta lo stile
            decisionLabel.textContent = finalDecision;
            decisionLabel.style.backgroundColor = 'var(--colore-principale)'; // Nero finale

            // 5. Riabilita il pulsante
            generateButton.disabled = false;
            generateButton.innerHTML = "DECIDO<br>IO"; // Testo finale

            // Logica per inserire qui la visualizzazione di un annuncio Interstitial di AdMob/AdSense
            console.log("Decisione generata. Punto ideale per mostrare un annuncio Interstitial.");
        }
    }, shuffleInterval);
}

// Inizializzazione: Collega la funzione al pulsante
document.addEventListener('DOMContentLoaded', () => {
    generateButton.addEventListener('click', generateDecision);
});
