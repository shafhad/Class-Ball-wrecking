class Ground{
    constructor (){
        this.body = Bodies.rectangle(675,630,1350,30,{isSatic: true});
        this.width = 1350
        this.height = 30
        World.add(world,this.body)
    }

    display(){
        fill("brown")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        
    }
}