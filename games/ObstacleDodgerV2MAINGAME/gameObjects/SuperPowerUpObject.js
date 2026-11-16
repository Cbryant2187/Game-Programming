class SuperPowerUpObject extends GameObject{
    constructor(){
        super("SuperPowerUpObject", ["PowerUpController"], "default")
        this.addComponent(new SuperPowerUpController)
    }
}
