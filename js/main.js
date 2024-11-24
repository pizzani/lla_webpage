fetch('components/contact-top-bar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contact-top-bar').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar a barra de navegação:', error));

fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        const toggleButton = document.querySelector('.navbar-toggle');
        const navbarMenu = document.querySelector('.navbar-menu');
        const closeButton = document.querySelector('.close-btn');
        const dropdownButtons = document.querySelectorAll('.dropdown .dropbtn');

        if (toggleButton && navbarMenu && closeButton && dropdownButtons) {
            toggleButton.addEventListener('click', () => {
                navbarMenu.classList.toggle('show');
            });
            closeButton.addEventListener('click', () => {
                navbarMenu.classList.remove('show');
            });

            dropdownButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const dropdownContent = e.target.nextElementSibling;
                    dropdownContent.classList.toggle('show');
                });
            });
        } else {
            console.log('Navbar toggle button, menu, or close button not found.');
        }

        window.onscroll = function() {
            var toggleButton = document.querySelector('.navbar-toggle');
            if (window.scrollY > 100) {
                toggleButton.classList.add('floating');
            } else {
                toggleButton.classList.remove('floating');
            }
        };
    })
    .catch(error => console.error('Erro ao carregar a barra de navegação:', error));

fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar a barra de navegação:', error));

const dropdownButtons = document.querySelectorAll('.dropdown .dropbtn');

dropdownButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const dropdownContent = e.target.nextElementSibling;

        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content !== dropdownContent) {
                content.classList.remove('show');
            }
        });

        dropdownContent.classList.toggle('show');
    });
});

document.addEventListener('click', (e) => {
    const isDropdown = e.target.matches('.dropbtn') || e.target.closest('.dropdown');

    if (!isDropdown) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.remove('show');
        });
    }
});