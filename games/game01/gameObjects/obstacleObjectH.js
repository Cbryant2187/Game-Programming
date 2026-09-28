class ObstacleObjectH extends GameObject{

    constructor(){
        super("Obstacle", ["Obstacle"])
        this.addComponent(new ObstacleLoopH())
        this.addComponent(new Polygon(), {fillstyle:"yellow", points:Assets.square})

    }
}