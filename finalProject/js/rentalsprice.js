let rentals= `[{
    "name" : "MetroScooter",
    "reservation":{
        "fullday" : 30,
        "halfday" : 20}
    ,
    "walk in":{
        "halfday":25,
        "fullday":35
    }
},
{
    "name" : "DioScooter",
    "reservation":{
        "fullday" : 40,
        "halfday" : 30}
    ,
    "walk in":{
        "halfday":35,
        "fullday":45
    }
}
]
`
console.log(JSON.parse(rentals[1].name));