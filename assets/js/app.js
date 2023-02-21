let menu = 1
let _li = document.getElementById('mobile')

function dropMneu(_span){
    x = _span.children

    /* ** */
    if(menu % 2){
       _li.style.transform='translate(0)'
    x[1].style.opacity='0'
    x[0].style.transform='rotate(39deg)'
    x[2].style.transform='rotate(-39deg)'


    }else{
        _li.style.transform='translate(-130%)'
        x[1].style.opacity='1'
        x[0].style.transform='rotate(0)'
        x[2].style.transform='rotate(0)' 
    }
    menu++
}

 

function $toggel(){
document.querySelector(".dark-mode>span").classList.toggle('dark')
document.querySelector('main').classList.toggle('bg')
document.querySelector('main>nav').classList.toggle('text')
document.querySelector('.banner').classList.toggle('text')
document.querySelector('.box').classList.toggle('text')
document.querySelector('.box').classList.toggle('font')
}