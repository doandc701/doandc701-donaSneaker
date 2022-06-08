let productElement= document.querySelector('.produce');
let productWomen=document.querySelector('.produce_women');
let btnBonus1= document.querySelector('.bonus-btn');

let btnBonus2= document.getElementById('btnBonus')

btnBonus1.onclick = (()=>{
        productElement.classList.toggle('grow')
})
btnBonus2.onclick = (()=>{
    productWomen.classList.toggle('grow')
})