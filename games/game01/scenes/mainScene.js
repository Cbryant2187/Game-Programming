class MainScene extends Scene{

    constructor(){
        super()

        this.instantiate(new PlayerObject(), new Vector2(200, 50))
        
        this.instantiate(new VerticalObstacleObject(), new Vector2(300, 800))
    } 
}