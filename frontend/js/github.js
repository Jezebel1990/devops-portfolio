const container = document.getElementById("projects");
const searchInput = document.getElementById("searchInput");

async function loadRepos() {
  try {
    const res = await fetch("http://localhost:4000/api/github");
    if (!res.ok) throw new Error("Erro ao buscar dados");
    const data = await res.json();
    return data.elements;
  } catch (err) {
    container.innerHTML = `<p class="not-found">Erro: ${err.message}</p>`;
    return [];
  }
}

function renderRepos(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<p class="not-found">Nenhum projeto encontrado.</p>`;
    return;
  }

  list.forEach(repo => {
    const topics = repo.topics?.length ? repo.topics.join(", ") : "Sem tópicos";

    container.innerHTML += `
    <div class="card">
    <h3>${repo.name}</h3>
    <p>${repo.description || "Sem descrição"}</p>
    <p class="topics"><strong>Tecnologias:</strong> ${topics}</p>
    <a href="${repo.html_url}" target="_blank" class="github-link">
    <span>Abrir no</span>
  <i class="fab fa-github fa-2x"></i>
   </a>
  </div>
    `;
  });
}

function setupSearch(repos) {
  searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();
    const filtered = repos.filter(repo =>
      repo.topics?.some(t => t.toLowerCase().includes(text))
    );
    renderRepos(filtered);
  });
}

loadRepos().then(repos => {
  renderRepos(repos);
  setupSearch(repos);
});
