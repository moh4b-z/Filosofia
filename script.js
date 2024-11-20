var ativarScroll = document.querySelector('.ativicao')
var linha = document.querySelector('.linha')
var body = document.querySelector('body')



ativarScroll.addEventListener('click', function (event) {
    body.style.overflowY = 'auto'
    body.style.height = 'auto'
    ativarScroll.style.display = 'none'
    linha.style.display = 'flex'
})
