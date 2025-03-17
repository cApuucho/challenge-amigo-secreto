//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

document.addEventListener("DOMContentLoaded", function () {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.adicionarAmigo = function () {
        const nome = inputAmigo.value.trim();

        if (nome === "") {
            alert("Por favor, insira um nome.");
            return;
        }

        amigos.push(nome);

        inputAmigo.value = "";

        atualizarLista();
    };

    function atualizarLista() {
        listaAmigos.innerHTML = "";

        amigos.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("A lista está vazia! Adicione pelo menos um nome.");
            return;
        }

        const indiceSorteado = Math.floor(Math.random() * amigos.length);

        const nomeSorteado = amigos[indiceSorteado];

        resultado.innerHTML = `O amigo secreto é: ${nomeSorteado}`;
    };
    
    window.limparLista = function () {
        amigos = [];
        listaAmigos.innerHTML = "";
        resultado.innerHTML = "";
    };
});