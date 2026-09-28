class ObstacleObjectH extends GameObject{

    constructor(){
        super()
        this.addComponent(new ObstacleLoopH())
        this.addComponent(new Polygon(), {fillstyle:"yellow", points:Assets.square})

    }

}