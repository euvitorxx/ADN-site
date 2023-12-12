document.addEventListener('DOMContentLoaded', function() {
    const projectsSection = document.getElementById('projects');

    // Exemplo de projetos (pode ser substituído por dados dinâmicos)
    const projectsData = [
        { title: 'MEC IMPEERIUM', description: 'Projetos Mecânicos e Civil' },
        { title: 'IMPEERIUM', description: 'Social Midia e Designer' },
        { title: 'DEV IMPEERIUM', description: 'Desenvolvimento de WebSites' },
    ];

    // Adiciona os projetos à seção de projetos
    projectsData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        `;

        projectsSection.appendChild(projectElement);
    });
});
