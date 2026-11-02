class GameOverScene extends Scene{
    constructor(){
        super("white")
        this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
    }
}