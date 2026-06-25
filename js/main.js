const deck1 = document.getElementById("deck1");
const deck2 = document.getElementById("deck2");

const deck1Modal = document.getElementById("deck1Modal");
const deck2Modal = document.getElementById("deck2Modal");

const requestModal = document.getElementById("requestModal");

deck1.onclick = () => {
    deck1Modal.classList.add("active");
};

deck2.onclick = () => {
    deck2Modal.classList.add("active");
};

document.querySelectorAll(".order-btn").forEach(button => {

    button.onclick = () => {

        deck1Modal.classList.remove("active");
        deck2Modal.classList.remove("active");

        requestModal.classList.add("active");
    };

});

window.onclick = (event) => {

    if(event.target === deck1Modal){
        deck1Modal.classList.remove("active");
    }

    if(event.target === deck2Modal){
        deck2Modal.classList.remove("active");
    }

    if(event.target === requestModal){
        requestModal.classList.remove("active");
    }
};
