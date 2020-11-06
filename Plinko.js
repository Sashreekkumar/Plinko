class Plinko {
    constructor(x,y,r){
        var options={
            isStatic: true,
            'restitution': 0,
            'friction': 0.5,
            'density': 1.2
      
          }
          this.x= x
          this.y= y
          this.r= r 

          this.body = Bodies.circle(this.x, this.y, this.r, options);
          World.add(world, this.body);
    }
    
    display(){
        push()
    translate(this.body.position.x, this.body.position.y)
    fill("black")
    strokeWeight(0)
    ellipseMode(RADIUS)
    ellipse(0,0, this.r, this.r)
    pop()
    }
    }