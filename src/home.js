import './styles/base.css'
import './styles/home.css'

import barista from './img/barista.jpg'

 

function createHeader() {
    const header = document.createElement('header')
    const body = document.querySelector('body')

    const banner = document.createElement('div')
    banner.setAttribute('class', 'welcome banner')

    const h2 = document.createElement('h2')
    h2.innerText = 'welcome to'
    banner.appendChild(h2)

    const h1 = document.createElement('h1')
    h1.innerText = 'Kiyomi Café'
    banner.appendChild(h1)

    const divider = document.createElement('div')
    divider.setAttribute('class', 'banner-divider')
    banner.appendChild(divider)

    const h3 = document.createElement('h3')
    h3.innerText = 'where every sip and bite tells a story.'
    banner.appendChild(h3)

    header.appendChild(banner)
    body.appendChild(header)
}

function createAbout() {
    const body = document.querySelector('body')
    const main = document.createElement('main') 

    body.appendChild(main)    

    const aboutDiv = document.createElement('div')
    aboutDiv.setAttribute('class', 'about')

    main.appendChild(aboutDiv)

    const aboutText = document.createElement('div')
    aboutText.setAttribute('class', 'about-text')

    aboutDiv.appendChild(aboutText)

    const title = document.createElement('span')
    title.setAttribute('class', 'about-title')

    const h1one = document.createElement('h1')
    h1one.setAttribute('class', 'about-us')
    h1one.innerText = 'About Us'

    const h1two = document.createElement('h1')
    h1two.setAttribute('class', 'jap')
    h1two.innerText = '• 清美'

    title.appendChild(h1one)
    title.appendChild(h1two)

    aboutText.appendChild(title)

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    p1.innerHTML = "At Kiyomi Café, we blend the elegance of Japanese tradition with contemporary café culture."
    p2.innerHTML = "Our mission is to create a space where every cup of coffee, tea, and each bite of our freshly baked goods tells a story—infused with authentic Japanese flavours and crafted with modern techniques.<br> From our signature coffee blends to our unique pastries, we’re dedicated to delivering an experience that nourishes both the body and soul."
    p3.innerHTML = "Whether you're here to relax, connect, or explore new tastes, Kiyomi Café is where tradition and innovation meet."
    aboutText.appendChild(p1)
    aboutText.appendChild(p2)
    aboutText.appendChild(p3)

    const img = document.createElement('img')
    img.setAttribute('class', 'about-img')
    img.src = barista
    aboutDiv.appendChild(img)
}

const createHomePage = () => {
    createHeader()
    createAbout()   
}

export default createHomePage

