import './styles/base.css'
import './styles/menu.css'

import gallery1 from './img/gallery1.jpg'
import gallery2 from './img/gallery2.jpg'
import gallery3 from './img/gallery3.jpg'
import gallery4 from './img/gallery4.jpg'


const createMenuPage = () => {

    const body = document.querySelector('body')

    const header = document.createElement('header')
    header.setAttribute('class', 'menu banner')
    body.appendChild(header)

    const h1 = document.createElement('h1')
    h1.setAttribute('class', 'page-h1')
    h1.textContent = "Menu"
    header.appendChild(h1)
    

    const h2 = document.createElement('h2')
    h2.setAttribute('class', 'page-h2')
    h2.textContent = "メニュー"
    header.appendChild(h2)

    const main = document.createElement('main')
    body.appendChild(main)

    
    const description = document.createElement('p')
    description.setAttribute('class', 'page-descr')
    description.innerText = 'Discover Kiyomi Café’s menu, where Japanese tradition meets contemporary café culture offering unique coffee blends, artisan teas, and pastries with a modern twist.'
    main.appendChild(description)

    const divider = document.createElement('div')
    divider.setAttribute('class', 'page-divider')
    main.appendChild(divider)

    const container = document.createElement('div')
    container.setAttribute('class', 'menu-container')
    main.appendChild(container)

    const div1 = document.createElement('div')
    container.appendChild(div1)

    const custom = document.createElement('div')
    custom.setAttribute('class', 'custom-opt')
    const h4 = document.createElement('h4')
    h4.textContent = "Customise it!"
    const custList = document.createElement('ul')
    custList.innerHTML = "<li>add:<br>vanilla, hazelnut, pistachio, yuzu, cream</li><li>dairy free:<br>soya, oat, almond, coconut, vegan cream</li>"
    custom.appendChild(h4)
    custom.appendChild(custList)

    const div2 = document.createElement('div')
    container.appendChild(div2)

    const list1 = document.createElement('ul')
    const list2 = document.createElement('ul')
    const list3 = document.createElement('ul')

    list1.innerHTML = "<li>ESPRESSO</li> <li>CAPPUCCINO</li> <li>LATTE</li> <li>AMERICANO</li> <li>MOCHA</li> <li>ICED LATTE</li><li>ICED AMERICANO</li><li>MACHA LATTE</li><li>ICED MACHA LATTE</li><li>SENCHA TEA</li>"
    list2.innerHTML = "<li>sakura blossom latte</li><li>matcha espresso fusion</li><li>hojicha latte</li><li>yuzu cold brew</li><li>iced kyoto style cold brew</li>"
    list3.innerHTML = "<li>matcha roll cake</li><li>mochi muffin</li><li>yuzu tart</li><li>sakura cheesecake</li><li>chocolate azuki cake</li><li>tayaki (bean, custard, chocolate)</li><li>Japanese Milk Bread (Shokupan)</li>"
    const coffee = document.createElement('h3')
    coffee.textContent = "Coffee & Tea"
    const drinks = document.createElement('h3')
    drinks.textContent = "Specialty Drinks"
    const bakery = document.createElement('h3')
    bakery.textContent = "Bakery"

    
    div1.appendChild(coffee)
    div1.appendChild(list1)
    div1.appendChild(custom)

    div2.appendChild(drinks)
    div2.appendChild(list2)

    div2.appendChild(bakery)
    div2.appendChild(list3)

    const divider2 = document.createElement('div')
    divider2.setAttribute('class', 'page-divider')
    main.appendChild(divider2)

    const gallery = document.createElement('div')
    gallery.setAttribute('class', 'photo-gallery')
    main.appendChild(gallery)

    const img1 = document.createElement('img')
    img1.src = gallery1
    const img2 = document.createElement('img')
    img2.src = gallery2
    const img3 = document.createElement('img')
    img3.src = gallery3
    const img4 = document.createElement('img')
    img4.src = gallery4

    gallery.appendChild(img1)
    gallery.appendChild(img2)
    gallery.appendChild(img3)
    gallery.appendChild(img4)
}

export default createMenuPage