var toggle=false;
var heading= document.getElementById("intro");
var circle= document.getElementById("circle");
var back_color= document.getElementById("background-div");
document.getElementById("toggle-slider").onclick=function(){
    if(!toggle)
    {
        circle.style.marginLeft="40px";
        circle.style.backgroundColor="red";
        heading.style.color="white";
        back_color.style.transitionDuration="1s";
        back_color.style.backgroundColor="black";
        toggle=true;
    }
    else{
        toggle=false;
        circle.style.marginLeft="1px";
        heading.style.color="black";
        circle.style.backgroundColor="black";
        back_color.style.transitionDuration="1s";
        back_color.style.backgroundColor="white";
    }
}