class LaserGameObject extends Gameobject{
    constructor(){
        super()

        // Creating movement/ controller of laser
        this.addComponent(new LaserController())

        // Creating polygon for individual lasers
        this.addComponent(new Polygon(), {fillstyle:"yellow", points:[
            new Vector2(0, -10),
            new Vector2(5, 5),
            new Vector2(-5, 5),
        ] } )
    }
}