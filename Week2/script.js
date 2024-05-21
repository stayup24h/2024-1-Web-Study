var time = 5;
var sec = "";

var x = setInterval(function(){
    if (time > 0){
        time = time -1;
    sec = time%60;

    document.getElementById("timer").innerHTML =  sec + "초";

    }
    if (time <= 0 ){
        clearInterval(x);
        document.getElementById("timer").innerHTML = "시간초과";
        window.close();
    }
}, 1000);