class LaserGameObject extends GameObject{

    constructor(){
        super("Laser", [], "lasers")

        // Creating movement/ controller of laser
        this.addComponent(new LaserController())

        // Creating polygon for individual lasers
        this.addComponent(new Polygon(), {fillstyle:"red", points:Assets.triangle})

        this.transform.scale = new Vector2(.25, 1)
        
    }
}