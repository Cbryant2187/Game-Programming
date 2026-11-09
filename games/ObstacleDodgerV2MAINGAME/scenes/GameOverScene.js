class GameOverScene extends Scene{
    constructor(){
        super("white")
        this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
        this.instantiate(new TryAgainGameObject(), new Vector2(0, 100))

        
        let gameOverText = new GameObject("WrappedText", [], "UI")
        let tryAgain = new GameObject("WrappedText", [], "UI")

        gameOverText.addComponent(new TextLabel(), {fillStyle:"Black", text:"Dead :(", font:"120px Times"})
        tryAgain.addComponent(new TextLabel(), {fillStyle:"Black", text:"Try Again..?", font:"30px Times"})

        this.instantiate(gameOverText, new Vector2(480, 200))
        this.instantiate(tryAgain, new Vector2(575, 375))
    }
}