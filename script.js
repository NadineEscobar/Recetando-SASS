// Navbar toggle.
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
  
  
if (toggle && navLinks) {
toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}
  
// Carrusel.
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const totalItems = items.length;
let currentIndex = 0;

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

const showItem = (index) => {
  items.forEach((item, i) => {
    item.style.display = i === index ? 'block' : 'none';
    indicators[i].classList.toggle('active', i === index);
  });
};

const nextItem = () => {
  currentIndex = (currentIndex + 1) % totalItems;
  showItem(currentIndex);
};

const prevItem = () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showItem(currentIndex);
};

if (nextButton && prevButton && items.length > 0) {
  nextButton.addEventListener('click', nextItem);
  prevButton.addEventListener('click', prevItem);
}

// Indicadores.
indicators.forEach(indicator => {
  indicator.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        currentIndex = index;
        showItem(currentIndex);
    });
});


  showItem(currentIndex);
  setInterval(nextItem, 4000);