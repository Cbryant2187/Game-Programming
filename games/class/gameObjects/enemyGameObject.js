class EnemyGameObject extends GameObject {

    constructor(){
        super("Enemy", ["Enemy"])
        this.addComponent(new Polygon(), {fillstyle: "green", points:Assets.triangle})
        this.addComponent(new EnemyController())
        this.addComponent(new Health())

    }
}