let listaAg = document.getElementById("listaAgendamentos");
let listaCarrinho = document.getElementById("listaCarrinho");

let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

agendamentos.forEach(a => {
    listaAg.innerHTML += `<li>${a.pet} - ${a.servico} - ${a.data}</li>`;
});

carrinho.forEach(c => {
    listaCarrinho.innerHTML += `<li>${c.nome} - R$ ${c.preco}</li>`;
});
