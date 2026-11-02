class Level01 extends Scene{
    constructor(){
        super()
        this.instantiate(new PlayerObject(), new Vector2(200, 50))    
        this.instantiate(new InitialObstacleObject(), new Vector2(300, 800))
        this.instantiate(new LevelControllerGameObject01())

    }
}