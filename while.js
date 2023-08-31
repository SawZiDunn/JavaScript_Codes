let a=0;
let b=10;


for(i=0; i<b; i++){
    console.log("This is from outer loop", i)
    let c=0;

    while (a<b){
        c+=1;
        console.log("*",c)
        
        if (c==2){
            break;

    }
}
}
    
    