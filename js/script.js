class MenuLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.menu;
        this.item = document.querySelector(`.menu-item[data-menu='${this.data}']`);
        this.menuItem = new MenuItem(this.item);
        this.element.addEventListener('click', () => this.select());
    };
    select() {
        const links = document.querySelectorAll('.menu-link');
        links.forEach( link => link.classList.remove('menu-link-selected'));
        this.linkElement.classList.add('menu-link-selected');
        this.menuItem.choose();
    }
}

class MenuItem {
    constructor(element) {
        this.element = element;
    }
    choose() {
        const items = document.querySelectorAll('.menu-item');
        items.forEach(item => {item.classList.remove('menu-item-selected');
    });
        this.menuElement.classList.add('menu-item-selected');
    }
}

let links = document.querySelectorAll('.menu-link');
links.forEach(link => new MenuLink(link));

console.log("is this working?")