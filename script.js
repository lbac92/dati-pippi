// Inizializza animazioni
AOS.init({
    duration: 1000,
    once: true
});

// Impostazioni globali per i font dei grafici (usiamo Quicksand anche qui)
Chart.defaults.font.family = "'Quicksand', sans-serif";
Chart.defaults.color = '#555';

// --- GRAFICO 1: FAMIGLIE COINVOLTE (Linea curva e morbida) ---
const ctx1 = document.getElementById('graficoAndamento').getContext('2d');

// Creiamo un gradiente per il riempimento sotto la linea
let gradient = ctx1.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(255, 159, 64, 0.5)'); // Arancione sfumato
gradient.addColorStop(1, 'rgba(255, 159, 64, 0.0)'); // Trasparente alla base

new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Famiglie PIPPI',
            data: [12, 19, 35, 45, 60], // DATI FITTIZI
            borderColor: '#ff9f40', // Arancione caldo
            backgroundColor: gradient, // Usa il gradiente creato sopra
            borderWidth: 3,
            tension: 0.4, // Linea molto curva (morbida)
            pointBackgroundColor: '#fff', // Punti bianchi
            pointBorderColor: '#ff9f40', // Bordo punti arancione
            pointRadius: 6, // Punti più grandi
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { borderDash: [5, 5], color: '#e0e0e0' } // Griglia tratteggiata leggera
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// --- GRAFICO 2: ECOSISTEMA (Torta dai colori pastello) ---
const ctx2 = document.getElementById('graficoTorta').getContext('2d');

new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Scuola', 'Famiglia', 'Servizi', 'Comunità'],
        datasets: [{
            data: [35, 25, 25, 15], // DATI FITTIZI
            backgroundColor: [
                '#ffcd56', // Giallo sole
                '#ff6384', // Rosso/Rosa morbido
                '#36a2eb', // Azzurro cielo
                '#4bc0c0'  // Verde acqua
            ],
            borderWidth: 2,
            borderColor: '#ffffff', // Bordo bianco per separare gli spicchi
            hoverOffset: 10 // Effetto "pop" quando passi sopra col mouse
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%', // Ciambella più sottile ed elegante
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true, // Usa pallini invece di quadrati nella legenda
                    font: { size: 12 }
                }
            }
        }
    }
});

function toggleMenu() {
        const overlay = document.getElementById('navOverlay');
        overlay.classList.toggle('active');
        
        // Cambia icona da Hamburger a X (opzionale, tocco di classe)
        const btn = document.querySelector('.menu-btn');
        if (overlay.classList.contains('active')) {
            btn.innerHTML = '✕';
        } else {
            btn.innerHTML = '☰';
        }
    }