// Inizializza animazioni
AOS.init({ duration: 1000, once: true });

// Impostazioni Font
Chart.defaults.font.family = "'Quicksand', sans-serif";
Chart.defaults.color = '#555';

// --- GRAFICO ACCOGLIENZA (Bar Chart) ---
// Notare che usiamo l'ID che abbiamo messo nell'HTML: "graficoAccoglienza"
const ctx = document.getElementById('graficoAccoglienza').getContext('2d');

new Chart(ctx, {
    type: 'bar', // Grafico a barre
    data: {
        // Le categorie che stiamo misurando
        labels: ['Segnalazione Scuola', 'Richiesta Spontanea', 'Invio Pediatra', 'Servizi Sociali'],
        datasets: [{
            label: 'Metodo Tradizionale',
            data: [50, 10, 5, 35], // Dati Esempio
            backgroundColor: 'rgba(200, 200, 200, 0.5)', // Grigio (passato)
            borderColor: 'rgba(200, 200, 200, 1)',
            borderWidth: 1
        },
        {
            label: 'Metodo P.I.P.P.I.',
            data: [30, 40, 15, 15], // Dati Esempio (più richieste spontanee?)
            backgroundColor: 'rgba(75, 192, 192, 0.6)', // Verde acqua (presente/futuro)
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y', // <--- Questo rende le barre ORIZZONTALI (più leggibili su mobile)
        plugins: {
            legend: {
                position: 'bottom'
            }
        },
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});