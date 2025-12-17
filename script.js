// Inizializziamo le animazioni (AOS)
AOS.init({
    duration: 1000, // Durata dell'animazione in millisecondi
    once: true // L'animazione avviene solo la prima volta che scorri
});

// --- GRAFICO 1: LINEA (Andamento temporale) ---
// Selezioniamo il "telo" dal file HTML
const ctx1 = document.getElementById('graficoAndamento').getContext('2d');

// Creiamo il grafico
new Chart(ctx1, {
    type: 'line', // Tipo di grafico: Linea
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023'], // Etichette asse X (Anni)
        datasets: [{
            label: 'Valore Progetto',
            data: [12, 19, 35, 45, 60], // I TUOI DATI NUMERICI QUI
            borderColor: '#4bc0c0', // Colore della linea (verde acqua)
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Colore riempimento sotto la linea
            borderWidth: 2,
            tension: 0.4, // Curvatura della linea (0 = dritta, 1 = molto curva)
            fill: true // Riempi l'area sotto la linea
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // Nascondiamo la legenda per pulizia
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#444' // Colore griglia scuro
                }
            },
            x: {
                grid: {
                    display: false // Niente griglia verticale
                }
            }
        }
    }
});

// --- GRAFICO 2: TORTA (Distribuzione) ---
const ctx2 = document.getElementById('graficoTorta').getContext('2d');

new Chart(ctx2, {
    type: 'doughnut', // Tipo: Ciambella
    data: {
        labels: ['Ricerca', 'Sviluppo', 'Marketing', 'Design'],
        datasets: [{
            data: [30, 40, 20, 10], // I TUOI DATI QUI
            backgroundColor: [
                '#ff6384', // Rosso
                '#36a2eb', // Blu
                '#ffcd56', // Giallo
                '#4bc0c0'  // Verde acqua
            ],
            borderWidth: 0 // Niente bordi bianchi
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff' // Testo legenda bianco
                }
            }
        }
    }
});