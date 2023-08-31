class Zidunn{

    constructor(name, fetish){
        this.namae = name;
        this.fet = fetish;
    }

    memory(){
        let dat = new Date();
        console.log(dat);
    }

    myname(){
        return this.myname;
    }

}

let me1 = new Zidunn("Saw", "Tights")
let me2 = new Zidunn("Azari", "Pants")

console.log(me1.namae)
console.log(me2.namae)

console.log(me1["fet"])
console.log(me2["fet"])

me2.memory()
console.log(me2.myname())