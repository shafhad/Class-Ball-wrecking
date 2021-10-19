class Block{
    constructor (x,y){
        var options = {
            restitution: 2,
            density: 0.04,
            friction:0.5
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50
        this.height = 50
        World.add(world,this.body)
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("white")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}