


function Calculation(){
let angle = document.getElementById("angleinput").value;
let speed = document.getElementById("airinput").value;
let wind = document.getElementById("windinput").value;
let direct;
let radio = document.getElementsByName("windDirection");
    for (var i=0; i < radio.length; i++){
        if (radio[i].checked){
            direct = radio[i].value;
        }
    }
    let answer =  Math.cos(angle)*speed + (direct * wind);
    document.getElementById("answer").innerHTML=answer;
}