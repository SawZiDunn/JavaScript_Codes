const object_name = { 
    name : "WinHtut", 
    age : 0,
    hobby:{
        h1:"Research",
        h2:"Writing and Reading",
        h3:"do something"
    },
    work:function(){console.log("This is form Work Key")},
    success: function(){console.log("Success True")}

}

object_name["age"]=120;
      
object_name.work();


// JSON JavaScript Object Notation 