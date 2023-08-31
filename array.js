const zidunn = ["saw", "father", "mother", "son"]; //first method for writing forming array
const zidunn1 = new Array("saw","father","mother","son")//second method

const zidunn2 = [
    {"name" : "ZiDunn", "age" : 19, "fetish": "Tights"}, //we can add whatever we want in an array
    function myFun(){console.log("This is hilarous")},
    "Hello World",
    1500,

]

zidunn2.push("How are you?");//put data from behind
zidunn2.unshift("Identity");//put data from the front


console.log(zidunn2)
zidunn2[3] = "Data Structure" //assigning or rather changing data
console.log(zidunn2);

zidunn2.pop();  //remove data from behind
console.log(zidunn2);

zidunn2.shift();   //remove data from the front
console.log(zidunn2);

const zidunn3 = zidunn.concat(zidunn1, zidunn2);   //combining arrays into a single array
console.log(zidunn3);