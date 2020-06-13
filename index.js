let charactersFromApi = []
let characters = document.getElementById("characters")
let apiResults = document.getElementById("results")
let card = document.getElementById("card")

fetch('https://swapi.dev/api/people')
  .then(res => res.json())
  .then(data => {
    charactersFromApi = data.results
    console.log(data);
    data.results.map((character, index) => {
      characters.innerHTML += `<option value="${index}">${character.name}</option>`
    })
  })

characters.addEventListener("change", e => {
  apiResults.innerHTML = ""
  let charAttributes = ["name", 'height', "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender"]

  console.log("changing", e);
  let selectedChar = charactersFromApi[Number(e.target.value)]
  console.log(selectedChar)
  if (!selectedChar) {
    card.classList.add("invisible")
  }
  let tbody = document.createElement("tbody")
  charAttributes.map(attr => {
    let tr = document.createElement("tr")
    let th = document.createElement("th")
    let td = document.createElement("td")
    th.textContent = attr
    th.style.textTransform = "capitalize"
    td.textContent = selectedChar[attr]
    tbody.appendChild(tr)
    tbody.appendChild(th)
    tbody.appendChild(td)
  })
  console.log(tbody);
  apiResults.appendChild(tbody)
  if (apiResults) {
    card.classList.remove("invisible")
  }
})
