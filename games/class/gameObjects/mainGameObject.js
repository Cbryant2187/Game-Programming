class Maingameobject extends Gameobject{
    constructor(){
        super()

        // creating central shape/ playable object
        this.addComponent(new Updatecomponent())
        
        // defining playable shape
        this.addComponent(new LaserPolygon(), {fillstyle:"yellow", points:[
            new Vector2(0, -20),
            new Vector2(10, 10),
            new Vector2(-10, 10)

        ] } )
    }
}