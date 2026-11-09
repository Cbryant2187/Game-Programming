class TryAgainGameObject extends GameObject{
    constructor(){
        super("TryAgainGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: 'yellow', points: Assets.triangle})
        this.addComponent(new Collider())
        this.addComponent(new TryAgainGameObjectController)
        this.transform.scale = new Vector2(15, 15)
    }
}
