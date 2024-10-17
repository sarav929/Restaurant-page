import './styles/base.css'

const createFooter = () => {
    const body = document.querySelector('body')
    const footer = document.createElement('footer')

    const p = document.createElement('p')
    p.innerHTML = 'created by sarav929 | <a href="https://github.com/sarav929">github</a>'
    footer.appendChild(p)

    body.appendChild(footer)
}

export default createFooter