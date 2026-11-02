class ObstacleObjectV extends GameObject{

    constructor(){
        super("Obstacle", ["Obstacle"])

        this.addComponent(new ObstacleLoopV())
        this.addComponent(new Polygon(), {fillstyle:"yellow", points:Assets.square})
    }
}