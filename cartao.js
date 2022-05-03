const lista = document.querySelector('#lista')

let idCount = 0;

function add ()  {
    console.log('existe', lista)
    Nova('Árvore')
}

function Nova (texto){
  let id = idCount;
  let cardInnerHtml = `<h5>${texto} | #${id}</h5>
                <button class="btnDelete" id="btnDelete${id}"><i class="fas fa-minus-circle"></i></button>
                <button class="btnEdit" id="btnEdit${id}"><i class="fas fa-pencil"></i></button>`

  const card = document.createElement("div")
  card.id = `card${id}`
  card.classList.add("card")
  lista.append(card);

  card.innerHTML = cardInnerHtml


  const btnDelete = document.getElementById(`btnDelete${id}`)

  btnDelete.addEventListener("click", () => {
    console.log("clicou no remove do id", id)
    const card = document.getElementById(`card${id}`)
    console.log(card);
    lista.removeChild(card)
  });

  idCount++;

}

function NovoCartao() {
  window.location.href = "./novoCartao.html"
}

function buscar() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("nome");
  filter = input.value.toUpperCase();
  ul = document.getElementById("bus");
  li = ul.getElementsByTagName("li");


  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (!input.value) {
          li[i].style.display = "none";
      } else if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "block";
      } else {
          li[i].style.display = "none";
      }

  }
}

function editarPag() {
  window.location.href = "./editarCartao.html"
}