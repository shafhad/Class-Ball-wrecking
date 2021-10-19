class Ball{
    constructor (){
        var options = {
            density: 1,
            frictionAir: 0.5,
            // isStatic: true
        }
        this.body = Bodies.circle(400,300,80,options);
        this.radius = 80;
        World.add(world,this.body)
    }

    display(){
        push()
        fill("red")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        pop()
    }
}