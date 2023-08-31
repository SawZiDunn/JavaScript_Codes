const personal = {

    name : "ZiDunn",
    age : 19,
    occupation : "student",
    hobby :{
        o1:"reading",
        o2:"writing,",
        o3:"listening"
    },

    work: function(){console.log("Hello, this is from work key")},

    life :function(){console.log("Hello, this is from life key")},


}

personal["age"]=20;

personal.work()
personal.life()

