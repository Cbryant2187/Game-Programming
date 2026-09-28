class InitialObstacleObject extends GameObject{

    constructor(){
        super("Obstacle", ["Obstacle"])

        this.addComponent(new SuperObstacleLoop())

        this.addComponent(new Polygon(), {fillstyle:"yellow", points:Assets.square})
    }
}