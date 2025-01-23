function exibirAlerta() {
    alert('Obrigado por visitar o meu portfólio!');
}

window.onload = function() {
    const btn = document.createElement('button');
    btn.innerText = 'Clique aqui!';
    btn.onclick = exibirAlerta;
    document.body.appendChild(btn);
};