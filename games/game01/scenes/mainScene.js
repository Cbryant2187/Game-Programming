class MainScene extends Scene{

    constructor(){
        super()

        this.instantiate(new PlayerObject(), new Vector2(200, 50))
        this.instantiate(new ObstacleObject(), new Vector2(300, 800))
    } 
}