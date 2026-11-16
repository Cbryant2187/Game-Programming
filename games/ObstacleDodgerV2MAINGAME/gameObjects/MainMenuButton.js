class MainMenuButton extends GameObject{
    constructor(){
        super("MainMenuButton", [], "default")
        this.addComponent(new Polygon(), {fillStyle: 'orange', points: Assets.triangle})
        this.addComponent(new Collider())
        this.addComponent(new MainMenuButtonController)
        this.transform.scale = new Vector2(15, 15)
    }
}
