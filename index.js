document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Capturando os valores (poderiam ser enviados para uma API aqui)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const btn = document.getElementById('submitBtn');
    const responseMsg = document.getElementById('responseMessage');

    // Simulação de carregamento
    btn.innerText = "Enviando...";
    btn.disabled = true;

    setTimeout(() => {
        // Exibe mensagem de sucesso
        responseMsg.innerText = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        responseMsg.classList.remove('hidden');
        responseMsg.classList.add('success');

        // Reseta o formulário
        document.getElementById('contactForm').reset();
        btn.innerText = "Enviar Mensagem";
        btn.disabled = false;
    }, 1500);
});