class SuperPowerUpController extends Component{
    powerUpTime = 0
    availablePowerUps = [ClearBoardPowerUp]
    acceptedTime = 0

    start(){
    }

    update(){
        this.powerUpTime++
        this.acceptedTime = (Math.floor(Math.random() * (10 - 0 + 1)))

        if(this.powerUpTime > 150 + (Globals.difficulty * 10)){
            if (this.acceptedTime = 1){
                let newX = Math.floor(Math.random() * (-500 - 500 + 1)) + 500;
                let newY = Math.floor(Math.random() * (-200 - 175 + 1)) + 175;
                instantiate(new ClearBoardPowerUp(), new Vector2(newX, newY))
                this.powerUpTime = 0
            }
        }
    }
}
