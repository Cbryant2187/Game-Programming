class GenericLevel extends Scene{
    constructor(){
        super()
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(50, 300))
        this.instantiate(new PointsGameObject(), new Vector2(0, 20))
        let helperGameObject = this.instantiate(new HelperGameObject(), new Vector2(50,50))

        helperGameObject.transform.setParent(mainGameObject.transform)

        let sceneTimer = new GameObject("SceneTimer", [], "UI")
        sceneTimer.addComponent(new TextLabel(), {fillstyle: "white"})
        sceneTimer.addComponent(new SceneTimerController())
        this.instantiate(sceneTimer, new Vector2(0, 50))

        let wrappedText = new GameObject("WrappedText", [], "UI")
        this.instantiate()
    }
}