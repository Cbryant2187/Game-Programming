class SuperObstacleObject extends GameObject{
    constructor(){
        super("ObstacleController", ["ObstacleController"])
        this.addComponent(new SuperObstacleController())
    }
}