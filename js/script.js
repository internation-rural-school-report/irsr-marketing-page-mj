// constructor class to make menu buttons connect with content

class MenuLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.menu;
        this.item = document.querySelector(`.menu-item[data-menu='${this.data}']`);
        this.menuItem = new MenuItem(this.item);
        this.element.addEventListener('click', () => { this.select()});
    };
    select() {
        const menuLinks = document.querySelectorAll('.menu-link');
        menuLinks.forEach( link => link.classList.remove('menu-link-selected'));
        this.element.classList.add('menu-link-selected');
        this.menuItem.choose();
    }
}
class MenuItem {
    constructor(element) {
        this.element = element;
    }
    choose() {
        const items = document.querySelectorAll('.menu-item');
        items.forEach(item => item.classList.remove('menu-item-selected'));
        this.element.classList.add('menu-item-selected');
    }
}

let links = document.querySelectorAll('.menu-link');
links.forEach(link => new MenuLink(link));

// carousel for testimonials page

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block"; 
}
