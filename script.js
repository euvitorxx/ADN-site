document.addEventListener('DOMContentLoaded', function() {
    const projectsSection = document.getElementById('projects');

    // Exemplo de projetos (pode ser substituído por dados dinâmicos)
    const projectsData = [
        { title: 'MEC IMPEERIUM', description: 'Descrição do Projeto 1' },
        { title: 'IMPEERIUM', description: 'Descrição do Projeto 2' },
        { title: 'DEV IMPEERIUM', description: 'Descrição do Projeto 3' },
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
