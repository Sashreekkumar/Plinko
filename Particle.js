class Particle {
    constructor(x,y,r){
        var options={
            isStatic: false,
            'restitution': 0,
            'friction': 0.5,
            'density': 1.2
          }

          this.particle1= []
          this.x= x
          this.y= y
          this.r=r

          this.body = Bodies.circle(this.x, this.y, this.r, options);
          this.color= color(random(0,255), random(0,255), random(0, 255));
          World.add(world, this.body);
    }
    
    
    display(){
       
       
            
    push()
    translate(this.body.position.x, this.body.position.y)
    fill(this.color)
    strokeWeight(0)
    ellipseMode(RADIUS)
    ellipse(0,0, this.r, this.r)
    pop()
    
    }
    }

    
       
