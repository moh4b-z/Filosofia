var ativarScroll = document.querySelector('.ativicao')

var body = document.querySelector('body')



ativarScroll.addEventListener('click', function (event) {
    body.style.overflowY = 'auto'
    body.style.height = 'auto'
})