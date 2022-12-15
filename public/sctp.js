const unidade = document.getElementById("unidade");
let dados = [];

function obterdados() {
  fetch("http://localhost:3000/unit")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      dados = data;
      console.log(data);
      dados.forEach(function (item) {
        const elemento = document.createElement("option");
        elemento.innerHTML = item.description;
        elemento.value = item.id;
        unidade.appendChild(elemento);
      });
    });
}
obterdados();

console.log(dados);
