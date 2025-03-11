function createPassword(){
    let charArray = '';
    for(let i=33; i<=126; i++){
        charArray += String.fromCharCode(i)
    }

    let password = '';
    for(let i=0; i<12; i++){
        password += charArray[Math.floor(Math.random()*charArray.length)];
    }
    console.log(password);
    
}

createPassword()