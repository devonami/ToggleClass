/* eslint-disable no-unused-vars */

const buttons = document.getElementsByClassName("btn-box-toggle");

function toggleActiveClass() {
    const box = this.previousElementSibling;

    // TODO: include the check for current active box with all
    // boxes
    if (box.classList.contains("active")) {
        box.classList.remove("active");
        return;
    }

    const act = document.getElementsByClassName("active");
    if (act.length) {
        act[0].classList.remove("active");
    }
    box.classList.add("active");
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", toggleActiveClass);
}
