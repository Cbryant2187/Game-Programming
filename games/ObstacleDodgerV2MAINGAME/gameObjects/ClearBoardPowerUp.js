class ClearBoardPowerUp extends GameObject{
    constructor(){
        super("ClearBoardPowerUp", ["PowerUp"], "default")
        this.addComponent(new Polygon(), {fillStyle: 'lime', points: Assets.square})
        this.addComponent(new Polygon(), {fillStyle: 'green', points: Assets.diamond})
        this.addComponent(new Collider())
        this.addComponent(new ClearBoardPowerUpController)
        this.transform.scale = new Vector2(12, 12)
    }
}
