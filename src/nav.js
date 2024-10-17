const createNav = () => {

    const nav = document.querySelector('nav')
    
    const logoDiv = document.createElement('div')
    logoDiv.setAttribute('id', 'logo')
    logoDiv.innerHTML = 'LOGO'

    const navBtns = document.createElement('div')
    navBtns.setAttribute('id', 'nav-btns')

    const homeBtn = document.createElement('button')
    homeBtn.setAttribute('id', 'home-btn')
    const menuBtn = document.createElement('button')
    menuBtn.setAttribute('id', 'menu-btn')
    const contactsBtn = document.createElement('button')
    contactsBtn.setAttribute('id', 'contacts-btn')

    navBtns.appendChild(homeBtn)
    navBtns.appendChild(menuBtn)
    navBtns.appendChild(contactsBtn)

    nav.appendChild(logoDiv)
    nav.appendChild(navBtns)

}

export default createNav