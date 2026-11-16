class MenuScene extends Scene{
    constructor(){
        super("white")
        this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
        this.instantiate(new TryAgainGameObject(), new Vector2(0, 180))
        this.instantiate(new DifficultyOneButton(), new Vector2(300, 0))
        this.instantiate(new DifficultyOneButton(), new Vector2(300, 50))
        this.instantiate(new DifficultyOneButton(), new Vector2(300, 100))

        
        let menuText = new GameObject("WrappedText", [], "UI")
        let playText = new GameObject("WrappedText", [], "UI")

        let difficulty1Text = new GameObject("WrappedText", [], "UI")
        let difficulty2Text = new GameObject("WrappedText", [], "UI")
        let difficulty3Text = new GameObject("WrappedText", [], "UI")

        menuText.addComponent(new TextLabel(), {fillStyle:"Black", text:"Obstacle Dodger", font:"120px Times"})
        playText.addComponent(new TextLabel(), {fillStyle:"Black", text:"PLAY", font:"40px Times"})

        difficulty1Text.addComponent(new TextLabel(), {fillStyle:"Black", text:"Difficulty I", font:"30px Times"})
        difficulty2Text.addComponent(new TextLabel(), {fillStyle:"Black", text:"Difficulty II", font:"30px Times"})
        difficulty3Text.addComponent(new TextLabel(), {fillStyle:"Black", text:"Difficulty III", font:"30px Times"})

        this.instantiate(menuText, new Vector2(230, 150))
        this.instantiate(playText, new Vector2(590, 530))
        this.instantiate(difficulty1Text, new Vector2(960, 310))
        this.instantiate(difficulty2Text, new Vector2(960, 360))
        this.instantiate(difficulty3Text, new Vector2(960, 410))
    }
}
