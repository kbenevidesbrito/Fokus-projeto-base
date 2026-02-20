const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco active')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const botaoIniciar = document.querySelector('.app__card-primary-button')

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})
curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curso')
})
longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})

const displayTempo = document.querySelector('#timer')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 