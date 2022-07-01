let cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', e =>{
    cursor.setAttribute('style', 'top:' + (e.pageY - 10)+ 'px; left: ' + (e.pageX - -10)+ 'px;');
})

let chetos = document.querySelector('.chetos')
let cards_contain = document.querySelector('.cards-contain')
let button = document.getElementById('button')
let main = document.getElementById('main')

button.addEventListener('click', () =>{
    console.log('click')
    if (chetos.style.display == 'none'){
        chetos.style.display = 'block'
        cards_contain.style.display = 'flex'
        main.style.height = '100%'
    }else{
        chetos.style.display = 'none'
        cards_contain.style.display = 'none'
    }
})