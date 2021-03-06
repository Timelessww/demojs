var dom=document.getElementById('clock');
var cxt=dom.getContext("2d");
var width=cxt.canvas.width;
var height=cxt.canvas.height;
var r=width/2;
 
function drawBackground(){
  cxt.save();
  cxt.translate(r,r);
  cxt.beginPath();
  cxt.lineWidth=10;
  cxt.arc(0,0,r-5,0,2*Math.PI,false);
  cxt.stroke();
  cxt.font="18px Arial";
  cxt.textAlign='center'
  cxt.textBaseline='middle'
  var hourNums=[3,4,5,6,7,8,9,10,11,12,1,2];
  hourNums.forEach(function(number,i){
 
    var rad=2*Math.PI/12*i;
    var x=Math.cos(rad)*(r-30);
    var y=Math.sin(rad)*(r-30);
    cxt.fillText(number,x,y);
 
  });
 
  for(var i=0;i<60;i++){
 
    var rad=2*Math.PI/60*i;
    var x=Math.cos(rad)*(r-18);
    var y=Math.sin(rad)*(r-18);
    cxt.beginPath();
    if(i % 5===0){
      cxt.fillStyle="#000"
      cxt.arc(x,y,2,0,2*Math.PI,false);
    }
    else{
      cxt.fillStyle="#ccc"
      cxt.arc(x,y,2,0,2*Math.PI,false);
    }
    cxt.fill(); 
  }
 
}
 
function drawHour(hour,minute){
  cxt.save();
  cxt.beginPath();
  var rad=2*Math.PI/12*hour;
  var mrad=2*Math.PI/12/60*minute
  cxt.rotate(rad+mrad);
  cxt.lineWidth=6;
  cxt.lineCap='round'
  cxt.moveTo(0,10);
  cxt.lineTo(0,-r/2);
  cxt.stroke();
  cxt.restore();
}
 
function drawMinute(minute){
  cxt.save();
  cxt.beginPath();
  var rad=2*Math.PI/60*minute;
  cxt.rotate(rad);
  cxt.lineWidth=3;
  cxt.lineCap='round'
  cxt.moveTo(0,10);
  cxt.lineTo(0,-r+30);
  cxt.stroke();
  cxt.restore();
}
 
function drawSecond(second){
  cxt.save();
  cxt.beginPath();
  cxt.fillStyle='#c14543'
  var rad=2*Math.PI/60*second;
  cxt.rotate(rad);  
  cxt.moveTo(-2,20);
  cxt.lineTo(2,20);
  cxt.lineTo(1,-r+18);
  cxt.lineTo(-1,-r+18);
  cxt.fill();
  cxt.restore();
}
 
function drawDot(){
 
  cxt.beginPath();
  cxt.fillStyle='#fff'
  cxt.arc(0,0,3,0,2*Math.PI,false);
  cxt.fill();
}
 
function draw(){
 
  cxt.clearRect(0,0,width,height);
  var now=new Date();
  var hour=now.getHours();
  var minute=now.getMinutes();
  var second=now.getSeconds();
  drawBackground();
  drawHour(hour,minute);
  drawMinute(minute);
  drawSecond(second);
  drawDot();
  cxt.restore();
}
draw();
setInterval(draw,1000);