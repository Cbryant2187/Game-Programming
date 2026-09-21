class LaserGameObject extends GameObject{

    constructor(){
        super("Laser")

        // Creating movement/ controller of laser
        this.addComponent(new LaserController())

        // Creating polygon for individual lasers
        this.addComponent(new Polygon(), {fillstyle:"yellow", points:Assets.triangle})

        this.transform.scale = new Vector2(.25, 1)
        
    }
}