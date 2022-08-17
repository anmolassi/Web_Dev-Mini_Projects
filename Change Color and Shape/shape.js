var main_shape= "circle";
var shapes=["circle", "ellipse" , "half-ellipse1" , "half-ellipse2" , "half-ellipse3" , "half-ellipse4", "quarter-ellipse1", "quarter-ellipse2" , "quarter-ellipse3", "quarter-ellipse4"];
var color=["red","orange","Aquamarine","pink","#F5F5DC","#7FFF00","CornflowerBlue","DarkGoldenRod","DarkRed","Gold","GoldenRod","#F8F8FF"];
document.getElementById("change-color").onclick = function(){
    var temp=color[Math.floor(Math.random()*color.length)];
    console.log(temp);
    document.getElementById(main_shape).style.backgroundColor=temp;
}
document.getElementById("change-shape").onclick = function(){
    var temp=shapes[Math.floor(Math.random()*shapes.length)];
    console.log(temp);
    document.getElementById(main_shape).setAttribute("id",temp);
    main_shape=temp;
}