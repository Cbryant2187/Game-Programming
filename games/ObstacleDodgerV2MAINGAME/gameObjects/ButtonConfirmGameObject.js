class ButtonConfirmGameObject extends GameObject{
    constructor(){
        super("ButtonConfirmGameObject", ["Confirm"], "default")
        this.addComponent(new Polygon(), {fillStyle: 'orange', points: Assets.square})
        this.transform.scale = new Vector2(10,10)
    }
}
