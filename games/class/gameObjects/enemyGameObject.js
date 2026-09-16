class EnemyGameObject extends GameObject {
    constructor(){
        super("Enemy")
        this.addComponent( new Polygon(), {fillstyl: "green", points.Assets.triangle})
        this.addComponent(new EnemyController())

    }


}