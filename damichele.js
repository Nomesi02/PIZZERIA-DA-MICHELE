document.addEventListener('DOMContentLoaded', () => {
   
    const showMenuBtn = document.getElementById('showMenuBtn');
    const pizzaListDiv = document.getElementById('pizza-list');
    const heroSectionTitle = document.querySelector('#about-us h2');
    const heroSectionDescription = document.querySelector('.about-us-description');
    const navbarNav = document.querySelector('.navbar-nav');
    const menuToggle = document.querySelector('.menu-toggle');


    const pizze = [
        {
            nome: "Margherita",
            prezzo: "€ 8.00",
            ingredienti: "Pomodoro San Marzano, Mozzarella di Bufala, Basilico fresco, Olio EVO.",
            immagine: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
        },
        {
            nome: "Diavola",
            prezzo: "€ 9.50",
            ingredienti: "Pomodoro, Mozzarella, Salame piccante, Peperoncino.",
            immagine: "https://th.bing.com/th/id/OIP.H9XqLJ7I8Hw2UpAoO3C8LQAAAA?rs=1&pid=ImgDetMain"
        },
        {
            nome: "Capricciosa",
            prezzo: "€ 10.00",
            ingredienti: "Pomodoro, Mozzarella, Prosciutto cotto, Funghi, Carciofini, Olive nere.",
            immagine: "https://bing.com/th?id=OSK.6ae1883e6da92518af405d6657947fe3"
        }
    ];

    
    function displayPizzas() {
        pizzaListDiv.innerHTML = '';
        pizze.forEach(pizza => {
            const pizzaItem = document.createElement('div');
            pizzaItem.classList.add('pizza-item');
            pizzaItem.innerHTML = `
                <img src="${pizza.immagine}" alt="Pizza ${pizza.nome}">
                <h3>${pizza.nome}</h3>
                <span class="price">${pizza.prezzo}</span>
                <p>${pizza.ingredienti}</p>
            `;
            pizzaListDiv.appendChild(pizzaItem);
        });
    }

   
    showMenuBtn.addEventListener('click', () => {
        if (pizzaListDiv.classList.contains('hidden')) {
            displayPizzas();
            pizzaListDiv.classList.remove('hidden');
            showMenuBtn.textContent = "Nascondi Menù";
            pizzaListDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            pizzaListDiv.classList.add('hidden');
            showMenuBtn.textContent = "Mostra Menù";
            showMenuBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    
    function handleResponsiveElements() {
        if (window.innerWidth <= 768) {
            if (heroSectionTitle) heroSectionTitle.style.display = 'none';
            if (heroSectionDescription) heroSectionDescription.style.display = 'none';
            navbarNav.classList.remove('active');
            menuToggle.classList.remove('active');
            navbarNav.style.display = 'none';
        } else {
            if (heroSectionTitle) heroSectionTitle.style.display = 'block';
            if (heroSectionDescription) heroSectionDescription.style.display = 'block';
            navbarNav.style.display = 'flex';
            menuToggle.classList.remove('active');
        }
    }


    handleResponsiveElements();
    window.addEventListener('resize', handleResponsiveElements);
});