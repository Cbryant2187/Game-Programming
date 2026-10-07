class HelperGameObject extends GameObject{
    constructor(){
        super("HelperGameObject", [], "ships")
        this.addComponent(new Polygon(), {fillstyle: "pruple", point:Assets.triangle})
        this.transform.scale = new Vector2(1, 1)

    }
}
