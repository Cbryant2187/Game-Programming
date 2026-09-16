class LaserGameObject extends Gameobject{
    constructor(){
        super("Laser")

        // Creating movement/ controller of laser
        this.addComponent(new LaserController())

        // Creating polygon for individual lasers
        this.addComponent(new Polygon(), {fillstyle:"yellow", points.assets.triangle}

        this.transform
        )
    }
}