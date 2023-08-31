let saw = function(a, b, c){
    console.log("This is anonymous function")
    return a+b+c
}

let myarrow = (x,y) =>{
    console.log("This is arrow function.")
    return x*y
}

console.log(saw(5, 10, 15)) 

console.log(myarrow(5,5))

