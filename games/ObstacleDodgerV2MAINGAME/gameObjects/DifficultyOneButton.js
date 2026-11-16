class DifficultyOneButton extends GameObject{
    constructor(){
        super("DifficultyOneButton", ["Button", "ButtonOne"], "default")
        this.addComponent(new Polygon(), {fillStyle: 'black', points: Assets.square})
        this.addComponent(new Collider())
        //this.addComponent(new DifficultyOneButtonController())
        this.addComponent(new ButtonController())
        this.transform.scale = new Vector2(15, 15)
    }
}
