function createCard(data) {
  return data
    .map(
      (team) => `
       
          <div class="row">
            <div class="col">
              <article class="team-card">
              <span class="mark">${team.id}</span>
                <img src="${team.foto}" alt="Team picture" />
                <p class="team-card-title">${team.nome}</p>
                <p class="team-card-content">${team.cargo}</p>
              </article>
            </div>
          </div>
       `
    )
    .join("");
}

function createMainCard(data) {
  return `   
      <div class="col-12">
      <article class="team-card">
        <img src="assets/img/logo.webp" alt="Team" />
        <p class="team-card-high-content1">NOME:</p>
        <p class="team-card-value1">Alberto</p>
        <p class="team-card-high-content2">CARGO:</p>
        <p class="team-card-value2">Presidente</p>
        <p class="team-card-high-content3">IDADE:</p>
        <p class="team-card-value3">46</p>
      </article>
      </div>
       `;
}

function loadAction() {
  var card = document.body.querySelector("#teamData");
  var main = document.body.querySelector("#mainData");

  function renderCard(data) {
    const markup = createCard(data);
    card.innerHTML = markup;
  }

  function renderMainCard(data) {
    const markup = createMainCard(data);
    main.innerHTML = markup;
  }

  renderCard(data, card);

  renderMainCard(data, main);
}
