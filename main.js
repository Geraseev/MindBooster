const card = document.querySelector('.card1');

card.addEventListener('click', function () {
    var element = document.getElementById("card-2");
    element.classList.add("show-card");
});
