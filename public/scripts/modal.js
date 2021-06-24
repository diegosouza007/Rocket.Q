export default function Modal() {

    const cancelButton = document.querySelector('.button.cancel');

    cancelButton.addEventListener('click', close);

    function open() {
        document.querySelector('.modal-wrapper').classList.add("active");
    }

    function close() {
        document.querySelector('.modal-wrapper').classList.remove("active");
    }

    return { open, close }

}