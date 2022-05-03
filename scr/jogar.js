const card = document.querySelector('.card1');

card.addEventListener('click', function () {
    var element = document.getElementById("card-1V");
    element.classList.toggle("show-card");
});