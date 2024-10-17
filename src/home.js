import './styles/base.css'
import './styles/home.css'

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

const createHomePage = () => {
    createHeader()
    const main = document.querySelector('main')    
}

export default createHomePage

