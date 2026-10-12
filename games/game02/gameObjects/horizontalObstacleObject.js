class HorizontalObstacleObject extends GameObject{
    constructor(){
        super("Obstacle")
        this.addComponent(new Polygon(), {fillStyle:"Yellow", points:Assets.square})
        this.addComponent(new HorizontalObstacleComponent())
        this.transform.scale = new Vector2(2,2)
    }
}