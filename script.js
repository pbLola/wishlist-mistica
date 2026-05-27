const formulario = document.querySelector('#wishlist-form');
const inputNome = document.querySelector('#input-nome');
const inputPreco = document.querySelector('#input-preco');
const inputLink = document.querySelector('#input-link');

console.log(formulario);
console.log(inputNome);
console.log(inputPreco);
console.log(inputLink);

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    const nomeDigitado = inputNome.value;
    const precoDigitado = inputPreco.value;
    const linkDigitado = inputPreco.value;

    console.log("Nome do Produto:", nomeDigitado);
    console.log("Preço do Produto:", precoDigitado);
    console.log("Link da Shopee:", linkDigitado);

    inputNome.value = '';
    inputPreco.value = '';
    inputLink.value = '';

});

