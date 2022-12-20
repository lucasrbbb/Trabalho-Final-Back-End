let isNewItem = true;
let currentId = 0;
const units = [];
const unidade = document.getElementById("unidade");
const botaoAdd = document.getElementById("addBtn");
const itemsTable = document.getElementById("itemsTable");

let dados = [];

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  var actions = $("table td:last-child").html();
  // Append table with add row form on add new button click
  // $(".add-new").click(function () {

  // });
  // Add row on add button click
  $(document).on("click", ".add", function () {
    var empty = false;
    var input = $(this).parents("tr").find('input[type="text"]');
    input.each(function () {
      if (!$(this).val()) {
        $(this).addClass("error");
        empty = true;
      } else {
        $(this).removeClass("error");
      }
    });
    $(this).parents("tr").find(".error").first().focus();
    if (!empty) {
      input.each(function () {
        $(this).parent("td").html($(this).val());
      });
      $(this).parents("tr").find(".add, .edit").toggle();
      $(".add-new").removeAttr("disabled");
    }
  });
  // Edit row on edit button click

  $(document).on("click", ".edit", function (event) {
    isNewItem = false;

    document.getElementById("modal-title").innerHTML = "Editar Produto";

    currentId = event.target.closest("tr").querySelector("td").innerHTML;

    const data = event.target.closest("tr").querySelectorAll("td");

    const description = data[1].innerHTML;
    document.getElementById("description").value = description;

    const unit = data[2].innerHTML;
    document.getElementById("unit").value = unit;

    const cost = data[3].innerHTML;
    document.getElementById("cost").value = cost;

    const quantity = data[4].innerHTML;
    document.getElementById("quantity").value = quantity;

    document.getElementById("adicionar").style.display = "block";
  });

  // Delete row on delete button click
  $(document).on("click", ".delete", function (event) {
    currentId = event.target.closest("tr").querySelector("td").innerHTML;
    deletarDados(currentId);
  });

  //dropdown
});

//Iniciar modal

function iniciarModalCadastro() {
  isNewItem = true;

  document.getElementById("modal-title").innerHTML = "Cadastrar Produto";

  document.getElementById("description").value = "";
  document.getElementById("unit").value = "";
  document.getElementById("cost").value = "";

  document.getElementById("quantity").value = "";
  document.getElementById("adicionar").style.display = "block";
}

function obterUnidades() {
  fetch("http://localhost:3000/unit")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      dados = data;
      dados.forEach(function (item) {
        units[item.id] = item.description;

        const elemento = document.createElement("option");
        elemento.innerHTML = item.description;
        elemento.value = item.id;
        elemento.id = unidade.appendChild(elemento);
      });
    });
}

function listarDados() {
  while (itemsTable.children.length) {
    itemsTable.deleteRow(0);
  }
  fetch("http://localhost:3000/store/list")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      dados = data;
      dados.forEach(function (item) {
        const row = itemsTable.insertRow();

        const code = row.insertCell();
        code.appendChild(document.createTextNode(item.id));

        const description = row.insertCell();
        description.appendChild(document.createTextNode(item.description));

        const unit_id = row.insertCell();
        unit_id.appendChild(document.createTextNode(units[item.unit_id]));

        const cost = row.insertCell();
        cost.appendChild(document.createTextNode(item.cost));

        const quantity = row.insertCell();
        quantity.appendChild(document.createTextNode(item.quantity));

        const btn = row.insertCell();
        const btnHtml = `
          <a id="editBtn" class="tooltip edit" title="Edit">
            <i class="material-icons">&#xE254;</i>
            <span class="tooltiptext">Editar</span>
          </a>
          <a class="tooltip delete" title="Delete">
            <i class="material-icons">&#xE872;</i>
            <span class="tooltiptext">Excluir</span>
          </a>`;
        btn.innerHTML = btnHtml;
      });
    });
}

function postarDados(description, unit_id, cost, quantity) {
  fetch("http://localhost:3000/store/save", {
    method: "POST",
    body: JSON.stringify({
      description: description,
      unit_id: unit_id,
      cost: cost,
      quantity: quantity,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      listarDados();
    });
}

function editarDados(id, description, unit_id, cost, quantity) {
  fetch("http://localhost:3000/store/update", {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      description: description,
      unit_id: unit_id,
      cost: cost,
      quantity: quantity,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      listarDados();
    });
}

function deletarDados(id) {
  fetch(`http://localhost:3000/store/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => listarDados());
}

botaoAdd.addEventListener("click", function () {
  const description = document.getElementById("description").value;
  const cost = document.getElementById("cost").value;
  const quantity = document.getElementById("quantity").value;

  if (isNewItem) {
    postarDados(description, unidade.value, cost, quantity);
  } else {
    editarDados(currentId, description, unidade.value, cost, quantity);
  }
});

obterUnidades();
listarDados();
