let password = "saw";



let encryptedData = "";

for(let i = 0; i<password.length; i++){
    encryptedData+=password[i];


    for(let x=0;x<3 ;x++){

        let  rand = Math.floor((Math.random() *27) + 97);
        let random = String.fromCharCode(rand);
        encryptedData+=random;

    }
}

console.log(encryptedData);