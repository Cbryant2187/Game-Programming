class VerticalObstacleObject extends GameObject{
    constructor(){
        super("Obstacle", ["Obstacle"])
        this.addComponent(new Polygon(), {fillStyle:"Orange", points:Assets.square})
        this.addComponent(new VerticalObstacleComponent())
        this.transform.scale = new Vector2(2,2)
    }
}