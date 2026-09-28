class ObstacleObject extends GameObject{

    constructor(){
        super()

        this.addComponent(new ObstacleLoop())

        this.addComponent(new Polygon(), {fillstyle:"yellow", points:Assets.square})
    }
}