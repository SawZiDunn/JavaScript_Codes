const profile = {
    name : ["Saw", "Zi", "Dunn"],
    age : 19,

    ambition : function() {
        console.log(`${this.name} ${this.name[1]} Hello World ${this.age}`)
    }
};

function god(himama){
    console.log(profile[himama])
}

god("age")
god("name")