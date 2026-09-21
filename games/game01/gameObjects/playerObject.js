class PlayerObject extends GameObject{

    constructor(){
        super("Player")

        this.addComponent(new PlayerUpdateComponent())
        this.addComponent(new Polygon(), {fillstyle:"blue", points:Assets.triangle})

    }
}