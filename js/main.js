fetch('components/contact-top-bar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contact-top-bar').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar a barra de navegação:', error));