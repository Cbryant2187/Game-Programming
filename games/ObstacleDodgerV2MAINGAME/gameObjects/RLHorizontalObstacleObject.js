class RLHorizontalObstacleObject extends GameObject{
    constructor(){
        super("Obstacle", ["Obstacle"])
        this.addComponent(new Polygon(), {fillStyle:"Blue", points:Assets.square})
        this.addComponent(new RLHorizontalObstacleComponent())
        this.transform.scale = new Vector2(8,8)
        this.addComponent(new Collider())
    }
}