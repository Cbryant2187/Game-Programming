class LevelControllerGameObject extends MainGameObject{
    constructor(){
        super("LevelControllerGameObject")
        this.addComponent(new LevelController())

    }
    

}