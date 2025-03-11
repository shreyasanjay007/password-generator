
function createPassword(){
    let charArray = '';
    for(let i=33; i<=126; i++){
        charArray += String.fromCharCode(i)
    }

    let password = '';
    for(let i=0; i<12; i++){
        password += charArray[Math.floor(Math.random()*charArray.length)];
    }
    return password
}



const pass = document.querySelector('.pass')
const copy = document.querySelector('.copy')
const btn = document.querySelector('.btn')
const msg = document.querySelector('.msg')


btn.addEventListener('click',()=>{
    pass.innerHTML = createPassword()
})

copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(pass.innerHTML)
    toggleCopy()
})

function toggleCopy(){
    setTimeout(function(){
        msg.style.display = 'flex'
    },100)

    setTimeout(function(){
        msg.style.display = 'none'
    },700)
}
