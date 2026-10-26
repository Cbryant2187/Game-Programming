class Scene2 extends Scene{
  constructor(){
    super("yellow")
    this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
    this.instantiate(new ObjectiveGameObject(), new Vector2(100, 100), 0)
  }
}