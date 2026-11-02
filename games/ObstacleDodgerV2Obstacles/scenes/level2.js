class Level2 extends Scene{
    constructor(){
        super()
        this.instantiate(new PlayerObject(), new Vector2(0, 0))
        this.instantiate(new SuperObstacleObject(), new Vector2(0, 200))
    }
}