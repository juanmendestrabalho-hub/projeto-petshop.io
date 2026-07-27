let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function addCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    render();
}

function render() {
    let lista = document.getElementById("carrinho");
    let total = document.getElementById("total");

    lista.innerHTML = "";
    let soma = 0;

    carrinho.forEach((item, i) => {
        soma += item.preco;

        lista.innerHTML += `
            <li>${item.nome} - R$ ${item.preco}
            <button onclick="remover(${i})">X</button>
            </li>
        `;
    });

    total.innerText = soma;
}

function remover(i) {
    carrinho.splice(i, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    render();
}

render();
