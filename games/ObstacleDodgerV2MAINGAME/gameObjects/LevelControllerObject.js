class LevelControllerObject extends GameObject{
    constructor(){
        super("LevelControllerObject")
        this.addComponent(new LevelController())
    }
}