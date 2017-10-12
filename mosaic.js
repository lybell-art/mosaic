function cell(i,j)
{
	this.Xno=i;
	this.Yno=j;
	this.onoff=(random(1)>0.5);
	this.col=color(0,0,int(random(9))*32);
}
cell.prototype.setting=function()
{
	this.col=color(0,0,int(random(9))*32);
  this.onoff=(random(1)>0.5);
}
cell.prototype.draw=function()
{
	if(this.onoff)
  {
    fill(this.col);
    switch(mode)
    {
      case SQUARE:
        rect(this.Xno*r,this.Yno*r,r,r);
        break;
      case ROUND:
        ellipse(this.Xno*r,this.Yno*r,r,r);
        break;
    }
  }
}

var max_=64;
var mode;
var r;
var c=new Array(max_);
function setup()
{
  createCanvas(windowWidth,windowHeight);
  stroke(255);
  strokeWeight(0.5);
  mode=SQUARE;
  ellipseMode(CORNER);
  for(var i=0;i<max_;i++)
  {
    c[i]=new Array(max_)
		for(var j=0;j<max_;j++)
    {
      c[i][j]=new cell(i,j);
    }
  }
}
function draw()
{
  cellDraw();
}
function cellDraw()
{
  background(0);
  r=width/map(mouseX,0,width,0,max_);
  for(var i=0;i<max_;i++)
  {
    for(var j=0;j<max_;j++)
    {
      c[i][j].draw();
    }
  }
}
function mousePressed()
{
  for(var i=0;i<max_;i++)
  {
    for(var j=0;j<max_;j++)
    {
      c[i][j].setting();
    }
  }
}
function keyPressed()
{
  mode=0;
  if(key=='s'||key=='S') mode=SQUARE;
  if(key=='r'||key=='R') mode=ROUND;
}