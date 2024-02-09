const alert = document.querySelector ('.alert');
const submit = document.getElementById('submit-btn');
const input = document.getElementById ('grocery');
const groceryItems = document.querySelector ('.grocery-items');


// ------------- CÓDIGO PARA INSERIR ITEM NA LISTA

function inserirItem (text) {
    const novoItem = document.createElement('article');
    novoItem.classList.add ('item');
    novoItem.innerHTML = `<p class="item-text">${text}</p>
        <div class="btn-icons">
          <button type="button" class="btn-edit">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button type="button" class="btn-delete"><i class="fa-solid fa-trash"></i></button>
        </div>`;
    groceryItems.appendChild(novoItem);  
    input.value = '';
}


// -----------CÓDIGO PARA ATIVAR O BOTÃO DE INSERIR

submit.addEventListener('click', ()=> {
    const text = input.value;
    if (text) {
        alert.innerText = 'Item Adicionado com Sucesso!';
        inserirItem(text);

    }else {
        alert.innerText = 'Insira um texto.';
    }
    setTimeout (() => {
    alert.innerText = '';
    }, 2000);
})