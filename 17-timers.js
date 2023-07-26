"use strict"

window.addEventListener("load", function(){

    //TIMERS
    var tiempo = setInterval(function(){
        console.log("Set inerval ejecutado");
    }, 3000);

    var tiempo1 = setTimeout(function(){
        console.log("Set tiempo ejecutado");
    }, 3000);

})