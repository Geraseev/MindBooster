document.addEventListener("DOMContentLoaded", async ()=>{
    
    const cards = await fetch("./api/collections.json").then(res=>(res.json()));

    
    loadCards(cards);
});


function loadCards(cards) {
    cards.forEach(card => {
        console.log(card.name);
        
    });
}

const btnDelete = document.getElementById(`trash${id}`)

  btnDelete.addEventListener("click", () => {
    console.log("clicou no remove do id", id)
    const card = document.getElementById(`card${id}`)
    console.log(card);
    lista.removeChild(card)
  });

  idCount++;

/* 
 1. criar o element e estilo do card 
 2. no forEach do loadCards, vai append do card 
*/

function novaPag() {
    window.location.href = "./novaCol.html"
}

function editarPag() {
    window.location.href = "./editarCol.html"
}

function cartoes() {
    window.location.href = "./cartao.html"
}