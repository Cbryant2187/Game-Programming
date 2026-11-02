class WinScene extends Scene{
    constructor(){
        super("light blue")
        this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
        

        
        let gameOverText = new GameObject("WrappedText", [], "UI")
        gameOverText.addComponent(new TextLabel(), {fillStyle:"Black", text:"Win :)", font:"120px Times"})
        this.instantiate(gameOverText, new Vector2(480, 200))
    }
}