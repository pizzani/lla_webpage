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
        const dropdownButtons = document.querySelectorAll('.dropdown .dropbtn');  // All dropdown buttons

        if (toggleButton && navbarMenu && closeButton && dropdownButtons) {
            // Toggle the navbar menu on button click
            toggleButton.addEventListener('click', () => {
                navbarMenu.classList.toggle('show');
            });

            // Close the navbar when the close button is clicked
            closeButton.addEventListener('click', () => {
                navbarMenu.classList.remove('show');
            });

            // Add click event to each dropdown to toggle visibility on mobile
            dropdownButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const dropdownContent = e.target.nextElementSibling;
                    dropdownContent.classList.toggle('show');  // Toggle visibility for mobile
                });
            });
        } else {
            console.log('Navbar toggle button, menu, or close button not found.');
        }
    })
    .catch(error => console.error('Erro ao carregar a barra de navegação:', error));

fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar a barra de navegação:', error));

// Select all dropdown buttons
const dropdownButtons = document.querySelectorAll('.dropdown .dropbtn');

// Add event listener to toggle dropdown menus on click
dropdownButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const dropdownContent = e.target.nextElementSibling;

        // Close other dropdowns before opening the clicked one
        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content !== dropdownContent) {
                content.classList.remove('show');
            }
        });

        // Toggle the current dropdown
        dropdownContent.classList.toggle('show');
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    const isDropdown = e.target.matches('.dropbtn') || e.target.closest('.dropdown');
    
    if (!isDropdown) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.remove('show');
        });
    }
});
