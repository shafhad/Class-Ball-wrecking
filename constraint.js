class Chain{
    constructor (pointA,bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            length: 300,
            stiffness: 0.5
        }
        this.pointA = pointA
        this.constraint = Constraint.create(options);
        World.add(world,this.constraint)
    }

    display(){
        fill("red")
        strokeWeight(3)
        line(this.pointA.x,this.pointA.y,this.constraint.bodyB.position.x,this.constraint.bodyB.position.y)
    }
}