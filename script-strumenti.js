AOS.init({ duration: 1000, once: true });
Chart.defaults.font.family = "'Quicksand', sans-serif";
Chart.defaults.color = '#555';

const ctx = document.getElementById('graficoStrumenti').getContext('2d');

new Chart(ctx, {
    type: 'bar', // Barre Verticali
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Progetti completi su Piattaforma RPM',
            data: [65, 70, 85, 90, 95], // Percentuali (o numeri assoluti)
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)', 
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 1)'  // Diventa più scuro mano a mano che migliora
            ],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            borderRadius: 5 // Angoli barre arrotondati
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100 // Se usi percentuali, fissa il massimo a 100
            },
            x: { grid: { display: false } }
        },
        plugins: {
            legend: { display: false }
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