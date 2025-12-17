AOS.init({ duration: 1000, once: true });
Chart.defaults.font.family = "'Quicksand', sans-serif";
Chart.defaults.color = '#555';

const ctx = document.getElementById('graficoDispositivi').getContext('2d');

new Chart(ctx, {
    type: 'polarArea', // Grafico ad area polare (Petali)
    data: {
        labels: ['Educativa Domiciliare', 'Gruppi Genitori', 'Laboratori Bambini', 'Vicinanza Solidale'],
        datasets: [{
            label: 'Ore Erogate',
            data: [300, 150, 120, 80], // DATI FITTIZI (inserisci qui le ore totali o i partecipanti)
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)', // Rosa
                'rgba(75, 192, 192, 0.7)', // Verde
                'rgba(255, 205, 86, 0.7)', // Giallo
                'rgba(201, 203, 207, 0.7)' // Grigio
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' }
        },
        scales: {
            r: { grid: { color: 'rgba(0,0,0,0.1)' } }
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