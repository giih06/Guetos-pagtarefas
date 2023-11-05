const projetos = [];
const statusOptions = ["Canceled", "In Progress", "Delivered", "Attention!"];

// Função para gerar projetos aleatórios
async function generateProjects(valor) {
  projetos.length = 0;

  for (let i = 1; i <= valor; i++) {
    const projeto = {
      ProjectID: `${i}`,
      Projects: `Projeto ${i}`,
      EST: Math.floor(Math.random() * 101), // Progresso aleatório
      Status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
      CatImages: [],
    };

    for (let j = -2; j < Math.floor(Math.random() * 3); j++) {
      const catImageResponse = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const catImageData = await catImageResponse.json();
      projeto.CatImages.push(catImageData[0].url); // URL da imagem de gatinho
    }
    projetos.push(projeto);
  }
  displayProjectsInTable(projetos);
}

// Função para exibir os projetos na tabela
async function displayProjectsInTable(projetos) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = ""; // Limpa o conteúdo atual da tabela

  projetos.forEach((projeto, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                          <th scope="row">${projeto.ProjectID}</th>
                          <td>
                            ${projeto.Projects}<br />
                      
                          </td>
                          <td>Completion with: ${
                            projeto.EST
                          }% <div class="progress"><div class="progress-bar" role="progressbar" style="width: ${
      projeto.EST
    }%" aria-valuenow="${
      projeto.EST
    }" aria-valuemin="0" aria-valuemax="100"></div></div></td>
                          <td>${projeto.Status}</td>
                          <td>
                                  ${projeto.CatImages.map(
                                    (catImage) => `<img src="${catImage}" />`
                                  ).join("")}</td>
                          `;
    tbody.appendChild(row);
  });
}
