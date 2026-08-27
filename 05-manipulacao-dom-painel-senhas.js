let senhaAtual = 0;
document.getElementById('btnChamar').addEventListener('click', function() {
    senhaAtual++;
    //Selecionar um elemento e modificar o seu conteúdo e estilo
    const painel = document.getElementById('painel');
    painel.textContent = String (senhaAtual).padStart(3, '0');
    painel.style.background = senhaAtual % 2 === 0 ? '#9f17a9' : '#630d69';
});