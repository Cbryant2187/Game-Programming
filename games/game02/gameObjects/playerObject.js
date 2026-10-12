class PlayerObject extends GameObject{

    constructor(){
        super("Player", ["Player"])
        this.addComponent(new Polygon(), {fillStyle:"blue", points:Assets.triangle})
        this.addComponent(new PlayerUpdateComponentG2)
    }
}