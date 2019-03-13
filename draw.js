
var x=600
var y=75
var y1=y
var x1=x
var w=300
var d=600
var h=600
var w1=w
var h1=h
var canvas;
var k=3
var a=270
var b=90


function draw() {
var ctx;
canvas = document.getElementById('canvas');

if(canvas.getContext)
{	        ctx=canvas.getContext('2d');
		ctx.beginPath();
		//ctx.strokeRect(x1,y1,w1,h1);
		ctx.moveTo(x1,y1);
		ctx.lineTo(x1,y1+h);
		ctx.moveTo(x1,y1+h);
		ctx.lineTo(x1+w,y1+h);
		ctx.moveTo(x1+w,y1+h);
		ctx.lineTo(x1+w,y1);
		ctx.moveTo(x1+w,y1);
		ctx.lineTo(x1,y1);

		ctx.stroke();

		ctx.lineWidth = 5;


		ctx.moveTo(105,(y+(h/2)));
		ctx.beginPath();
	        ctx.arcTo(x+w1,(y+(h/2)),1500,0,2*Math.PI,false);
	        ctx.stroke();
		ctx.lineWidth = 1;
    
    		ctx.stroke();
		ctx.closePath();
}
}


function up() {

if(canvas.getContext)
{

		var ctx=canvas.getContext('2d');
		ctx.lineWidth = 5;
		ctx.beginPath();
	        ctx.arcTo(x+w,(y+(h/2)),1500,0,2*Math.PI,false);
	        ctx.stroke();
		h=h-5;
		ctx.beginPath();
	        ctx.arcTo(x+w,(y+(h/2)),1500,0,2*Math.PI,false);
	        ctx.stroke();
		ctx.lineWidth = 1;
}
}

function down() {

if(canvas.getContext)
{

		var ctx=canvas.getContext('2d');
		ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.arcTo(x+w,(y+(h/2)),1500,0,2*Math.PI,false);
                ctx.stroke();
                h=h+5;
                ctx.beginPath();
                ctx.arcTo(x+w,(y+(h/2)),1500,0,2*Math.PI,false);
                ctx.stroke();
                ctx.lineWidth = 1;
}
}

function right() {
if(canvas.getContext)
{
		var ctx=canvas.getContext('2d');
		ctx.clearRect(0,0,1805,755);
		w=w+5;

		ctx.moveTo(x1,y1);
		ctx.lineTo(x1,y1+h1);
		ctx.moveTo(x1,y1+h1);
		ctx.lineTo(x1+w,y1+h1);
		ctx.moveTo(x1+w,y1+h1);
		ctx.lineTo(x1+w,y1);
		ctx.moveTo(x1+w,y1);
		ctx.lineTo(x1,y1);
		ctx.stroke();
//ctx.strokeRect(x1,y1,w,h1);
		ctx.lineWidth = 5;
		ctx.beginPath();
	        ctx.arcTo(x+w,(y+(h/2)),1500,0,2*Math.PI,false);
	        ctx.stroke();
		ctx.lineWidth = 1;
		}
}

function left() {

if(canvas.getContext)
{
		var ctx=canvas.getContext('2d');
		ctx.clearRect(0,0,canvas.width, canvas.height);
		w=w-5;
		ctx.moveTo(x1,y1);
		ctx.lineTo(x1,y1+h1);
		ctx.moveTo(x1,y1+h1);
		ctx.lineTo(x1+w,y1+h1);
		ctx.moveTo(x1+w,y1+h1);
		ctx.lineTo(x1+w,y1);
		ctx.moveTo(x1+w,y1);
		ctx.lineTo(x1,y1);
		ctx.stroke();
		ctx.lineWidth = 5;
		ctx.beginPath();
	        ctx.arcTo(x+w,(y+(h/2)),1500,0,2*Math.PI,false);
	        ctx.stroke();
		ctx.lineWidth = 1;
		}
}

function reset() {

if(canvas.getContext)
{
		var ctx=canvas.getContext('2d');
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.beginPath();
		ctx.strokeRect(x1,y1,w1,h1);
		ctx.stroke();
}
}


function rotatecw() {

if(canvas.getContext)
	{
		var ctx=canvas.getContext('2d');
		ctx.clearRect(0,0,canvas.width,canvas.height);
		a=a+10	
		b=b+10
	
		ctx.lineWidth=1;
		ctx.moveTo(x1,y1);
		ctx.lineTo(x1,y1+h1);
		ctx.moveTo(x1,y1+h1);
		ctx.lineTo(x1+w,y1+h1);
		//ctx.moveTo(x1+w,y1+h1);
		//ctx.lineTo(x1+w,y1);
		ctx.moveTo(x1+w,y1);
		ctx.lineTo(x1,y1);
                ctx.stroke();
		ctx.closePath();
		ctx.lineWidth=5;
		ctx.arcTo(x+w,(y+(h/2)),1500,0,2*Math.PI,false);
                ctx.stroke();
		ctx.lineWidth=1;
		ctx.closePath();
		ctx.beginPath();
ctx.moveTo(x+w,y+(h/2));
ctx.lineTo(x+w+((h/2)*Math.cos(a*Math.PI/180)),y+(h/2)+((h/2)*Math.sin(a*Math.PI/180)));
ctx.moveTo(x+w,y+(h/2));
ctx.lineTo(x+w+((h/2)*Math.cos(b*Math.PI/180)),y+(h/2)+((h1-h/2)*Math.sin(b*Math.PI/180)));

ctx.stroke();
	}
}

function rotateacw() {

if(canvas.getContext)
	{
		var ctx=canvas.getContext('2d');
		ctx.clearRect(0,0,canvas.width,canvas.height);
		a=a-10
		b=b-10
		ctx.lineWidth=1;
		ctx.moveTo(x1,y1);
		ctx.lineTo(x1,y1+h1);
		ctx.moveTo(x1,y1+h1);
		ctx.lineTo(x1+w,y1+h1);
		//ctx.moveTo(x1+w,y1+h1);
		//ctx.lineTo(x1+w,y1);
		ctx.moveTo(x1+w,y1);
		ctx.lineTo(x1,y1);
                ctx.stroke();
		ctx.closePath();
		ctx.lineWidth=5;
		ctx.arcTo(x+w,(y+(h/2)),1500,0,2*Math.PI,false);
                ctx.stroke();
		ctx.lineWidth=1;
		ctx.closePath();
		ctx.beginPath();
		/*ctx.lineWidth=1;
		ctx.moveTo(x1,y1);
		ctx.lineTo(x1,y1+h1);
		ctx.moveTo(x1,y1+h1);
		ctx.lineTo(x1+w,y1+h1);
		ctx.moveTo(x1+w,y1+h1);
		ctx.lineTo(x1+w,y1);
		ctx.closePath();
		
		ctx.moveTo(x1+w,y1);
		ctx.lineTo(x1,y1);
		ctx.closePath();

		ctx.stroke();
		
		ctx.lineWidth=5;
		ctx.arcTo(x+w,(y+(h/2)),1500,0,2*Math.PI,false);
                ctx.stroke();
		ctx.lineWidth=1;
		ctx.closePath();
		ctx.beginPath();*/
		ctx.moveTo(x+w,y+(h/2));
		//ctx.lineTo(x+
ctx.lineTo(x+w+((h/2)*Math.cos(a*Math.PI/180)),y+(h/2)+((h/2)*Math.sin(a*Math.PI/180)));
ctx.moveTo(x+w,y+(h/2));
ctx.lineTo(x+w+((h/2)*Math.cos(b*Math.PI/180)),y+(h/2)+((h1-h/2)*Math.sin(b*Math.PI/180)));
ctx.stroke();
	}
}

