/* eslint-disable no-unused-vars */

function toggleActiveClass() {
    const box = this.previousElementSibling;

    if (box.classList.contains('active')) {
        box.classList.remove('active');
        return;
    }

    document.querySelectorAll('.active')
        .forEach(a => a.classList.remove('active'));

    box.classList.add("active");
}

function addButtonListeners() {
    const buttons = document.getElementsByClassName("btn-box-toggle");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", toggleActiveClass);
    }
}

addButtonListeners();
