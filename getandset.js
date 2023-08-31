class Myself{
    constructor(){
        this.year = "";
    }

    getter (){
        return this.year;
    }

    setter (nyear){
        this.year = nyear;
    }

}

let myobj = new Myself();

myobj.setter("nineteen")
console.log(myobj.getter())