class Scene3 extends Scene{
  constructor(){
    super("grey")
    this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
    this.instantiate(new ObjectiveGameObject(), new Vector2(100, 100), 0)
    this.instantiate(new LevelControllerObject())
    this.instantiate(new SuperObstacleObject())
    this.instantiate(new SuperObstacleObject())
    this.instantiate(new SuperObstacleObject())
  }
}