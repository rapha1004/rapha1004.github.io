document.addEventListener('DOMContentLoaded', () => {
    // ScrollReveal animation
    ScrollReveal().reveal('.project-card', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        delay: 200,
        reset: true
    });

    // Fetch Projects from JSON
    fetch('https://rapha1004.me/script/work.json')
        .then(response => response.json())
        .then(data => {
            const projectGrid = document.getElementById('project-grid');
            data.forEach(project => {
                if (project.dispo === "true") {
                    const projectCard = document.createElement('div');
                    projectCard.classList.add('project-card');
                    projectCard.innerHTML = `
                        <img src="${project.gridimg}" alt="${project.titregrid}">
                        <h3>${project.titregrid}</h3>
                        <p>${project.descriptiontitre}</p>
                        <a href="${project.btngrid}" target="_blank">View Project</a>
                    `;
                    projectGrid.appendChild(projectCard);
                }
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
});
