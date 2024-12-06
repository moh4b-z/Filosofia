var ativarScroll = document.querySelector('.ativicao')
var headerul = document.querySelector('header ul')
var linha = document.querySelector('.linha')
var body = document.querySelector('body')

ativarScroll.addEventListener('click', function (event) {
    if (window.innerWidth <= 735) {
        linha.style.display = 'none'
        headerul.style.display = 'none'
    } else {
        linha.style.display = 'flex'
        headerul.style.display = 'flex'
    }
    
    body.style.overflowY = 'auto'
    body.style.height = 'auto'
    ativarScroll.style.display = 'none'

    window.scrollTo({
        top: linha.offsetTop, 
        behavior: 'smooth'  
    })
})
