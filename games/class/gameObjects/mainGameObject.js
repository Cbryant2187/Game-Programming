class MainGameObject extends GameObject{
    constructor(){
        super("Main", [], "ships")

        // creating central shape/ playable object
        this.addComponent(new UpdateComponent())
        
        // defining playable shape
        this.addComponent(new Polygon(), {fillstyle:"blue", points:Assets.triangle})
    }
}