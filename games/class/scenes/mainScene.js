class MainScene extends Scene{

    constructor(){
        super()
        //create main playable ship
        this.instantiate(new Maingameobject(), new Vector2(600, 100))
        //create enemy ship
        this.instantiate(new EnemyGameObject(), new Vector2(25, 150), Math.PI)

    }
}