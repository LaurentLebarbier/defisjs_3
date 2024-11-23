var button = document.querySelector(".graph_button");
var bar = document.querySelector(".graph_graph_bar");
button.addEventListener('click', function () {
    bar.classList.toggle("graph_graph_bar--h100");
    button.classList.toggle("graph_button--green");
})