function setCardActive(evt) {
  let i, tablinks;

  tablinks = document.getElementsByClassName("card-active");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}

function getCard(id) {
  const mData = data[id - 1];
  const key = 1;
  return renderMainCard(mData, key);
}

function createCard(data) {
  return data
    .map(
      (team) => `     
          <div class="row">
            <div class="col id="cardID" onclick="getCard(${team.id})">
              <article class="team-card card-active"  onclick="setCardActive(event, '${team.id}')">
                 <span class="mark">${team.id}</span>
                 <img src="${team.foto}" alt="Team picture" />
                 <p class="team-card-title">${team.nome}</p>
                 <p class="team-card-content">${team.cargo}</p> 
              </article>
            </div>
          </div>
        <div id="${team.id}" class="tabcontent"></div>  
       `
    )
    .join("");
}

function createMainCard(mData, key) {
  const main = mData;
  if (key == 1) {
    renderMainCard(mData);
    return `   
      <div class="col-12">
        <article class="team-card">
          <img src="${main.foto}" alt="Team" />
          <p class="team-card-high-content1">NOME:</p>
          <p class="team-card-value1">${main.nome}</p>
          <p class="team-card-high-content2">CARGO:</p>
          <p class="team-card-value2">${main.cargo}</p>
          <p class="team-card-high-content3">IDADE:</p>
          <p class="team-card-value3">${main.idade}</p>
        </article>
      </div>
       `;
  } else {
    return `   
    <div class="col-12">
      <article class="team-card"></article>
    </div>
     `;
  }
}

function renderCard(data) {
  let card = document.body.querySelector("#teamData");
  const markup = createCard(data);
  card.innerHTML = markup;
}

function renderMainCard(mData, key) {
  let main = document.body.querySelector("#mainData");
  const markup = createMainCard(mData, key);
  main.innerHTML = markup;
}

function loadAction() {
  renderCard(data);
  renderMainCard();
}
