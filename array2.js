const fruits = ["orange", "apple", "peach", "pineapple", "mango", "lemon"];
const newslice = [];
let index = 0;
let index1 = 0;


function numslice(number){
    for (let i = number; i<fruits.length; i++){
        newslice[index] = fruits[i];
        index++;
    }
    return newslice;


}

function stringslice(data){
    for (let i = 0; i<fruits.length; i++){
        if (fruits[i] == data){
            index1 = i+1;
        }
    }
    if (index1 == 0){
        return 0;
    
    }else {
        for (let i = index1; i<fruits.length; i++){
            newslice[index] = fruits[i];
            index++;
        }
        return newslice;
        

    }
}

function myslice(num){

    if (typeof(num) === "number"){
        return numslice(num);
        

    }else{
        return stringslice(num);
        
    } 
}

var newslice1 = myslice(5);

if (newslice1 == 0){
    console.log("Your data is not found!")

}else {
    console.log(newslice1)
}
