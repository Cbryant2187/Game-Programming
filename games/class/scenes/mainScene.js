class MainScene extends Scene{

    constructor(){
        super()
        //create main playable ship
        this.instantiate(new MainGameObject(), new Vector2(50, 300))
        //create enemy ship
        this.instantiate(new EnemyGameObject(), new Vector2(25, 150), Math.PI)

    }
}