function binarySearch(array,tofind,start,end){
    while(start<=end){
        let median=Math.floor((start+end)/2);
        if(array[median]==tofind){
            return true;
        }else if(array[median]<tofind){
            start=median+1;

        }else{
            end=median-1;
        }
        
    }
}


let myData=[2,7,9,56,89,92,93,94,95,96,97];
var toFind=2;

if(binarySearch(myData,toFind,0,myData.length-1)){
    console.log("We found it.");
}else{
    console.log("We haven't found.")
}