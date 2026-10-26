class SuperObstacleObject extends GameObject {
    constructor(){
        super("ObstacleController", ["ObstacleController"])
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.square})
        this.addComponent(new SuperObstacleComponent())
        this.transform.scale = new Vector2(0.5, 0.5)
        this.addComponent(new Collider())
        
    }
}