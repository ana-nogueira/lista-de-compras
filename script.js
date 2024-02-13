const alert = document.querySelector(".alert");
const submit = document.getElementById("submit-btn");
const input = document.getElementById("grocery");
const groceryItems = document.querySelector(".grocery-items");
let btnEdit = false;
let itemEditado;

// ------------- CÓDIGO PARA INSERIR ITEM NA LISTA

function inserirItem(text) {
  const novoItem = document.createElement("article");
  novoItem.classList.add("item");
  novoItem.innerHTML = `<p class="item-text">${text}</p>
        <div class="btn-icons">
          <button type="button" class="btn-edit">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button type="button" class="btn-delete"><i class="fa-solid fa-trash"></i></button>
        </div>`;
  groceryItems.appendChild(novoItem);
  input.value = "";

  // ------------------- CÓDIGO PARA DELETAR OU EDITAR ITEM
  novoItem.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-delete")) {
      groceryItems.removeChild(event.currentTarget);
      btnEdit = false;
    } else if (event.target.classList.contains("btn-edit")) {
      btnEdit = true;
      itemEditavel = event.currentTarget;
      itemEditado = itemEditavel.querySelector(".item-text");
      input.value = itemEditado.innerHTML;
    }
  });
}

// -----------CÓDIGO PARA ATIVAR O BOTÃO DE INSERIR

submit.addEventListener("click", () => {
  const text = input.value;
  if (text && btnEdit === false) {
    alert.innerText = "Item Adicionado com Sucesso!";
    inserirItem(text);
    console.log(btnEdit);
  } else if (btnEdit === true) {
    itemEditado.innerHTML = input.value;
    btnEdit = false;
  } else {
    alert.innerText = "Insira um texto.";
    console.log(btnEdit);
  }
  setTimeout(() => {
    alert.innerText = "";
  }, 2000);
});
