var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  bullet=createSprite(50,200,50,50);
wall=createSprite(1550,200,60,height/2)
bullet.velocityX = speed;
thickness=random(22,83);
wall=createSprite(1200,200,thickness,height/2)
speed=random(223,321)
weight=random(30,52)
}

function draw() {
  
  background(255,255,255); 
  
  if(hasCollided(bullet, wall));
  { 
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    
    if(damage>10)
    {
      wall.fill=color(255,0,0);

    }


    if(damage<10)
    {
      wall.fill=color(0,255,0);
    }
  
  }
  
  rectMode(CENTER);
  wall.fill=colour('purple');
  rect(wall.position.x,wall.positon.y);
  
  rectMode(CENTER);
  wall.fill=colour('purple');
  rect(wall.position.x,wall.positon.y);

  
  
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;
}
