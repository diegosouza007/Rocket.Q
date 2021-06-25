import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button')

// Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick);
})

// Pegar todos os botões que existem com a classe delete
const deleteButton = document.querySelectorAll('.actions a.delete');

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false));
})

function handleClick(event, check = true) {

    const text = check ? "Marcar como lido" : "Excluir";

    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red');
    modal.open();
}