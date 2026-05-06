document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById('feather-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'feather-container';
        document.body.appendChild(container);
    }

    const numberOfFeathers = 30; // Cantidad de plumas

    // Vector SVG de una verdadera pluma de cuervo
    const featherSVG = `
        <svg viewBox="0 0 32 32" fill="#000000" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.8,3.2c-1.3-1.6-4.1-1.8-6.4-0.1c-2.4,1.8-3.7,4.8-4.1,7.6c-0.8,4.9-0.5,10.2,1.3,14.8c0.4,1,1,1.9,1.7,2.7
            c1.5,1.7,4.1,2.3,5.8,1.1c0.8-0.6,1.1-1.6,0.8-2.6c-0.6-2.1-1.7-4-3-5.4c-2.2-2.3-5-3.8-8-4.2c-1.8-0.2-3.6-0.1-5.3,0.5
            c-1.6,0.5-3.1,1.4-4.2,2.6C4.1,21.5,3.2,23.1,2.8,25c-0.3,1.2-0.1,2.5,0.7,3.5c0.7,0.9,1.8,1.4,2.9,1.5c1.9,0.2,3.8-0.3,5.3-1.6
            c2.6-2.1,4.1-5.3,4.8-8.5c1.1-4.7,0.9-9.6-0.1-14.3C15.1,3,13.6-0.3,11.2-2.1c-1.3-1-3-1.1-4.6-0.7c-0.6,0.1-1.1,0.5-1.4,1
            c-0.3,0.5-0.4,1.1-0.2,1.7c0.4,1.6,1.4,3.1,2.7,4.1c1.5,1.2,3.3,1.9,5.2,2c2.5,0.2,5-0.6,7-2.1C21.8,2.6,24.4,2,26.8,3.2z"/>
        </svg>
    `;

    for (let i = 0; i < numberOfFeathers; i++) {
        createFeather(container, featherSVG);
    }
});

function createFeather(container, svgContent) {
    const feather = document.createElement('div');
    feather.classList.add('feather');
    feather.innerHTML = svgContent;

    // Tamaños variados (algunas plumas en primer plano, otras más al fondo)
    const size = Math.random() * 25 + 15;
    feather.style.width = `${size}px`;
    feather.style.height = `${size}px`;

    // Distribución horizontal
    const left = Math.random() * 100;
    feather.style.left = `${left}vw`;

    // Tiempos aleatorios
    const fallDuration = Math.random() * 8 + 7; // Caen más lento (7 a 15 seg)
    const swayDuration = Math.random() * 4 + 3; // Balanceo más orgánico
    const delay = Math.random() * 15;           // Desfase para que no caigan todas de golpe

    feather.style.animationDuration = `${fallDuration}s, ${swayDuration}s, ${fallDuration}s`;
    feather.style.animationDelay = `${delay}s, ${delay}s, ${delay}s`;

    container.appendChild(feather);
}