const myname = {
    weather :{
        "Yangon" : {
            Temperature : 27,
            Humidity : "86%",
            Wind : "5km/h"
        },
        "Mandalay" :{
            Temperature : 26,
            Humidity : "90%",
            Wind : "2km/h"
        } ,
    
        "Pyinoolwin" :{
            Temperature : 19,
            Humidity : "94%",
            Wind : "2km/h"}
    
        ,
    }
}

let data = myname.weather;
let newdata = Object.values(data);



function cityweather(cityname){     
    let Newdata = Object.values(data[cityname]);

    console.log(`Data are:`);
    console.log(`Temperature:${Newdata[0]}`)
    console.log(`Humidity:${Newdata[1]}`)
    console.log(`Wind:${Newdata[2]}`)

    if(Newdata[0] > 25){
        console.log(`${cityname} is getting hot.`)
    }else{
        console.log(`${cityname} is getting cold.`)
    }         
}

function tchecker(cityname){
    console.log(`Temperature in ${cityname} is ${data[cityname]["Temperature"]}`)

}
cityweather("Pyinoolwin")
tchecker("Pyinoolwin")

