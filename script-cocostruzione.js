AOS.init({ duration: 1000, once: true });
Chart.defaults.font.family = "'Quicksand', sans-serif";
Chart.defaults.color = '#555';

const ctx = document.getElementById('graficoCocostruzione').getContext('2d');

new Chart(ctx, {
    type: 'radar', // Grafico a Ragnatela
    data: {
        // Le aree del Mondo del Bambino
        labels: ['Salute/Sviluppo', 'Istruzione', 'Relazioni Familiari', 'Integrazione Sociale', 'Autonomia', 'Emozioni'],
        datasets: [{
            label: 'Inizio Percorso (T0)',
            data: [4, 5, 3, 4, 3, 4], // Voti bassi o critici all'inizio
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Rosso chiaro
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
            label: 'Fine Percorso (T1)',
            data: [7, 8, 7, 6, 7, 8], // Miglioramento (area più grande)
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Blu chiaro
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            line: { borderWidth: 3 }
        },
        scales: {
            r: { // Scala radiale
                angleLines: { display: true },
                suggestedMin: 0,
                suggestedMax: 10, // Scala da 0 a 10
                grid: { color: 'rgba(0,0,0,0.1)' },
                pointLabels: {
                    font: { size: 12, weight: 'bold' } // Etichette più leggibili
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