document.addEventListener("DOMContentLoaded", function() {
    const emailListItems = document.querySelectorAll(".email-list li");
    const emailContent = document.querySelector(".email-content");
    const replyButton = document.querySelector(".reply-btn");
    const backButton = document.createElement("button"); // Criando o botão de Voltar
    backButton.classList.add("back-btn"); // Adicionando classe ao botão de Voltar
    backButton.style.display = "none"; // Ocultando o botão de Voltar inicialmente

    // Criando um elemento span para a seta de resposta
    const arrowSpan = document.createElement("span");
    arrowSpan.innerHTML = "&#x21AA;"; // Código HTML da seta de resposta
    // Adicionando a seta de resposta ao botão de Voltar
    backButton.appendChild(arrowSpan);

    // Adicionando o botão de Voltar à área de conteúdo da carta
    emailContent.appendChild(backButton);

    // Oculta a área de conteúdo da carta e os botões inicialmente
    emailContent.style.display = "none";
    replyButton.style.display = "none";

    // Adiciona um event listener para cada item da lista de e-mails
    emailListItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remove a classe "clicked" de todos os itens
            emailListItems.forEach(item => {
                item.classList.remove("clicked");
            });

            // Adiciona a classe "clicked" ao item selecionado
            item.classList.add("clicked");

            // Oculta a exclamação do item selecionado
            const exclamation = item.querySelector(".exclamation");
            if (exclamation) {
                exclamation.style.display = "none";
            }

            // Obtém o título da carta sem o ponto de exclamação
            const title = item.childNodes[2].textContent.trim();

            // Obtém a mensagem padrão da carta
            const defaultMessage = item.querySelector(".letter-text").textContent;

            // Atualiza o conteúdo da carta com base no item selecionado
            emailContent.querySelector('h2').textContent = title;
            emailContent.querySelector('p').textContent = defaultMessage;

            // Exibe o conteúdo da carta, o botão de resposta e o botão de Voltar
            emailContent.style.display = "block";
            replyButton.style.display = "block";
            backButton.style.display = "block";
        });
    });

    // Adiciona um event listener para o botão de Voltar
    backButton.addEventListener("click", function() {
        // Oculta o conteúdo do e-mail atual
        emailContent.style.display = "none";
        // Exibe novamente a lista de e-mails
        document.querySelector(".email-list").style.display = "block";
        // Oculta o botão de Voltar
        backButton.style.display = "none";
    });
});
