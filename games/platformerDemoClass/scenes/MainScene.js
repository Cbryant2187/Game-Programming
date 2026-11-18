class MainScene extends Scene{
  constructor(){
    super()
    this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
    this.instantiate(new PlatformGameObject(), new Vector2(0,50), 0)

    const ioButton = this.instantiate(new UIButton())
    uiButton.transform.anchorMin = new Vector2(.5, .5)
    uiButton.transform.anchorMax = new Vector2(.5, .5)
    uiButton.transform.offSetUpperLeft = new Vector2(.5, .5)
    uiButton.transform.offSetUpperRight = new Vector2(.5, .5)
  }
}