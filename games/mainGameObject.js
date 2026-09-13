class Maingameobject extends Gameobject{
    constructor(){
        super()
        this.addComponent(new Updatecomponent())
        this.addComponent(new LaserPolygon(), {fillstyle:"black", points:[
            new Vector2(0, -20),
            new Vector2(10, 10),
            new Vector2(-10, 10),

            ] } )
    }
}