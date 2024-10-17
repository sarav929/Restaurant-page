import './styles/base.css'
import './styles/menu.css'

import bunny from './img/black-bunny.png'
import insta from './img/instagram.png'
import tiktok from './img/tik-tok.png'
import facebook from './img/facebook.png'
import twitter from './img/twitter.png'

const createContacts = () => {

    const body = document.querySelector('body')

    const header = document.createElement('header')
    header.setAttribute('class', 'contacts banner')
    body.appendChild(header)

    const h1 = document.createElement('h1')
    h1.setAttribute('class', 'page-h1')
    h1.textContent = "Get in touch!"
    header.appendChild(h1)
    

    const h2 = document.createElement('h2')
    h2.setAttribute('class', 'page-h2')
    h2.textContent = "連絡先"
    header.appendChild(h2)

    const main = document.createElement('main')
    body.appendChild(main)

    
    const description = document.createElement('p')
    description.setAttribute('class', 'page-descr')
    description.innerText = 'We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.'
    main.appendChild(description)

    const divider = document.createElement('div')
    divider.setAttribute('class', 'page-divider')
    main.appendChild(divider)

    const wrapper = document.createElement('wrapper')
    main.appendChild(wrapper)

    const info = document.createElement('wrapper')
    info.setAttribute('class', 'shop-info')
    wrapper.appendChild(info)

    const loc = document.createElement('h3')
    loc.setAttribute('class', 'info')
    loc.textContent = 'Visit us'
    info.appendChild(loc)

    const p1 = document.createElement('p')
    p1.setAttribute('id', 'address')
    p1.innerHTML = 'Kiyomi Café<br>123 Sakura Street<br>KI1 0MI<br>Somewhere<br>'
    info.appendChild(p1)

    const hours = document.createElement('h3')
    hours.setAttribute('class', 'info')
    hours.textContent = 'Opening hours'
    info.appendChild(hours)

    const p2 = document.createElement('p')
    p2.setAttribute('id', 'opening-h')
    p2.innerHTML = 'Monday – Friday<br>7:00 AM – 6:00 PM<br><br>Saturday – Sunday<br>8:00 AM – 5:00 PM'
    info.appendChild(p2)

    const phone = document.createElement('h3')
    phone.setAttribute('class', 'info')
    phone.textContent = 'Phone'
    info.appendChild(phone)

    const p3 = document.createElement('p')
    p3.setAttribute('id', 'phone')
    p3.innerHTML = '(123) 456-7890'
    info.appendChild(p3)

    const email = document.createElement('h3')
    email.setAttribute('class', 'info')
    email.textContent = 'Email'
    info.appendChild(email)

    const p4 = document.createElement('p')
    p4.setAttribute('id', 'email')
    p4.innerHTML = 'hello@kiyomicafe.com'
    info.appendChild(p4)

    const logo = document.createElement('img')
    logo.src = bunny
    info.appendChild(logo)

    const formDiv = document.createElement('div')
    formDiv.setAttribute('class', 'form')

    wrapper.appendChild(formDiv)

    const leaveMessage = document.createElement('h2')
    leaveMessage.textContent = 'Leave us a message'
    formDiv.appendChild(leaveMessage)

    const p5 = document.createElement('p')
    p5.textContent = "Got a question or comment? Fill out the form below, and we’ll get back to you as soon as possible!"
    formDiv.appendChild(p5)

    const form = document.createElement('form')
    form.setAttribute('id', 'send-message')
    formDiv.appendChild(form)

    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'name')
    nameLabel.textContent = 'name'
    const nameInput = document.createElement('input')
    nameInput.setAttribute('id', 'name')
    nameInput.setAttribute('type', 'text')
    nameLabel.appendChild(nameInput)
    form.appendChild(nameLabel)

    const emailLabel = document.createElement('label')
    emailLabel.setAttribute('for', 'email')
    emailLabel.textContent = 'email'
    const emailInput = document.createElement('input')
    emailInput.setAttribute('id', 'email')
    emailInput.setAttribute('type', 'email')
    emailLabel.appendChild(emailInput)
    form.appendChild(emailLabel)

    const messageLabel = document.createElement('label')
    messageLabel.setAttribute('for', 'message')
    messageLabel.textContent = 'message'
    const messageInput = document.createElement('textarea')
    messageInput.setAttribute('id', 'message')
    messageLabel.appendChild(messageInput)
    form.appendChild(messageLabel)

    const submit = document.createElement('button')
    submit.setAttribute('type', 'submit')
    submit.textContent = 'send'
    form.appendChild(submit)
    submit.addEventListener('click', (event) => {
        event.preventDefault()
        form.reset()
        alert('Thank you for your message! :)')
    })

    const divider2 = document.createElement('div')
    divider2.setAttribute('class', 'page-divider')
    main.appendChild(divider2)

    const socials = document.createElement('div')
    socials.setAttribute('id', 'social-media')
    main.appendChild(socials)

    const follow = document.createElement('h3')
    follow.setAttribute('class', 'info')
    follow.textContent = 'Follow us'
    socials.appendChild(follow)

    const p6 = document.createElement('p')
    p6.textContent = 'Stay connected with us on social media for updates on new menu items, events, and promotions!'
    socials.appendChild(p6)

    const icons = document.createElement('div')
    icons.setAttribute('class', 'icons')
    socials.appendChild(icons)

    const icon1 = document.createElement('img')
    icon1.src = tiktok
    icons.appendChild(icon1)

    const icon2 = document.createElement('img')
    icon2.src = insta
    icons.appendChild(icon2)

    const icon3 = document.createElement('img')
    icon3.src = facebook
    icons.appendChild(icon3)

    const icon4 = document.createElement('img')
    icon4.src = twitter
    icons.appendChild(icon4)

    


}

export default createContacts