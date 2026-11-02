class VerticalObstacleObject extends GameObject{
    constructor(){
        super("Obstacle", ["Obstacle"])
        this.addComponent(new Polygon(), {fillStyle:"Red", points:Assets.square})
        this.addComponent(new VerticalObstacleComponent())
        this.transform.scale = new Vector2(8,8)
        this.addComponent(new Collider())
    }
}