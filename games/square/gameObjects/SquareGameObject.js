class SquareGameObject extends GameObject{
  constructor(){
    super("Player", ["Player"], "default")
    this.addComponent(new Polygon(), {fillStyle: "black", points: Assets.square})
    this.addComponent(new SquareController())
    this.transform.scale = new Vector2(15, 15)
    this.addComponent(new Collider())
  }
}
