function factorial(num){

    if(num===0){
        return 1;
    }else{
        facto=num*factorial(num-1);
        return facto;
    }
 
}

console.log(factorial(7))