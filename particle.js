class Particle{
    constructor(x,y) {
     var options = {
       isStatic:false,
       restitution:0,
       friction:0.1,
       density:1.2
   }
 
     
     this.body = Bodies.circle(x,y,10, options);
     this.radius = 10;
     this.color = color(random(0,255), random(0,255), random(0,255))
     World.add(world,this.body)
    }
 
    
    display(){
 
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     rotate(angle);
     translate(pos.x,pos.y)
     ellipseMode(RADIUS);
     ellipse(0,0,this.radius,this.radius);
     pop();
 }
 
 
 
 
 
 
 
 
 }