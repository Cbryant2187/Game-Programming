class ObjectiveGameObject extends GameObject{
  constructor(){
    super("Objective", ["Objective"], "default")
    this.addComponent(new Polygon(), {fillStyle: "orange", points: Assets.square})
    this.addComponent(new ObjectiveController())
    this.transform.scale = new Vector2(10, 10)
    this.addComponent(new Collider())
  }
}
