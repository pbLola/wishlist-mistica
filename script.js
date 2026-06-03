const formulario = document.querySelector('#wishlist-form');
const inputNome = document.querySelector('#input-nome');
const inputPreco = document.querySelector('#input-preco');
const inputLink = document.querySelector('#input-link');
const containerCards = document.querySelector('#cards-container');

let listaDesejos = [];

//console.log(formulario);
//console.log(inputNome);
//console.log(inputPreco);
//console.log(inputLink);

function renderizarInterface(){
    containerCards.innerHTML = '';
    listaDesejos.forEach((produto)=> {
        const novoCard = document.createElement("div");
        novoCard.classList.add("card-produto");

novoCard.innerHTML = `
            <h3>🔮 ${produto.nome || 'Produto sem nome'}</h3>
            <p>R$ ${produto.preco || '0,00'}</p>
            <div>
                <a href="${produto.link || '#'}" target="_blank">Ver Produto</a>
            </div>
        `;
        containerCards.appendChild(novoCard);
});
}

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const nomeDigitado = inputNome.value.trim();
    const precoDigitado = inputPreco.value.trim();
    const linkDigitado = inputPreco.value.trim();

    const novoItem = {
        nome:nomeDigitado,
        preco:precoDigitado,
        link:linkDigitado
    };

    listaDesejos.push(novoItem);

    console.log("Minha lista de desejos atualizada: ", listaDesejos);
    renderizarInterface();
    formulario.reset();
    
    //const novoCard = document.createElement('div');

   // novoCard.classList.add('card-produto');
    // novoCard.innerHTML = `
    // <h3>🔮 ${nomeDigitado || 'Produto sem nome'}</h3>
    // <p>R$ ${precoDigitado || '0,00'}</p>
    // <a href="${linkDigitado || '#'}" target="_blank">Ver Produtos</a>
    // `

    // console.log("Nome do Produto:", nomeDigitado);
    // console.log("Preço do Produto:", precoDigitado);
    // console.log("Link da Shopee:", linkDigitado);
    // console.log("Card criado na memória")
    // //console.log("Card recheado na memória:", novoCard);

    // containerCards.appendChild(novoCard);

    // inputNome.value = '';
    // inputPreco.value = '';
    // inputLink.value = '';

});

