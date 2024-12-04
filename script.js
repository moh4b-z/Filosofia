var ativarScroll = document.querySelector('.ativicao')
var linha = document.querySelector('.linha')
var body = document.querySelector('body')
var ul = document.querySelector('header ul')


ativarScroll.addEventListener('click', function (event) {
    body.style.overflowY = 'auto'
    body.style.height = 'auto'
    ativarScroll.style.display = 'none'
    linha.style.display = 'flex'
    ul.style.display = 'flex'

    window.scrollTo({
        top: linha.offsetTop, 
        behavior: 'smooth'  
    })
})
