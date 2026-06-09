// ===================================
// Portfolio de Martín Soler
// JavaScript básico
// ===================================

// Los datos de las obras viven en datos.js,
// que se carga antes que este archivo en portfolio.html.

// Seleccionamos el contenedor de la galería.
// Solo existe en portfolio.html, por eso comprobamos antes de usarlo.
const galeria = document.getElementById("galeria");

if (galeria !== null) {
    // Recorremos las obras y creamos una tarjeta por cada una
    for (const obra of obras) {
        const figura = document.createElement("figure");
        figura.className = "obra";

        figura.innerHTML = `
            <div class="obra-marco">
                <img src="${obra.imagen}" alt="${obra.titulo}">
            </div>
            <figcaption>${obra.titulo}</figcaption>
        `;

        galeria.appendChild(figura);
    }
}

// Año actual en el pie de página
const anio = document.getElementById("anio");
anio.textContent = new Date().getFullYear();
