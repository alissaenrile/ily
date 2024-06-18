document.addEventListener("DOMContentLoaded", function() {
    const emailListItems = document.querySelectorAll(".email-list li");
    const emailContent = document.querySelector(".email-content");
    const replyButton = document.querySelector(".reply-btn");
    const backButton = document.querySelector(".back-btn");

    // Oculta a área de conteúdo da carta e o botão de resposta inicialmente
    emailContent.style.display = "none";
    replyButton.style.display = "none";
    backButton.style.display = "none";

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
            const defaultMessage = item.querySelector(".letter-text").value;

            // Atualiza o conteúdo da carta com base no item selecionado
            emailContent.querySelector('h2').textContent = title;
            emailContent.querySelector('p').textContent = defaultMessage;

            // Exibe o conteúdo da carta e os botões de resposta e voltar
            emailContent.style.display = "block";
            replyButton.style.display = "inline-block";
            backButton.style.display = "inline-block";
        });
    });

    // Adiciona evento ao botão "Voltar"
    backButton.addEventListener("click", function() {
        emailContent.style.display = "none";
        replyButton.style.display = "none";
        backButton.style.display = "none";

        // Remove a classe "clicked" de todos os itens
        emailListItems.forEach(item => {
            item.classList.remove("clicked");
        });
    });
});
