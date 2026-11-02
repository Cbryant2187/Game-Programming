class SuperObstacleController extends Component{
    obCount = 0
    timeSinceLastOp = 0
    start(){

    }
    update(){
        this.timeSinceLastOp += 1

        //will change to conditional of points when working
        if(this.obCount < 100){
            if(this.timeSinceLastOp > 7){
                this.progressOp = Math.random() * (-12 - 12) + 12
                instantiate(new VerticalObstacleObject(), new Vector2( this.progressOp * 50, 300))
                instantiate(new HorizontalObstacleObject(), new Vector2(-625, this.progressOp * 30))
                this.timeSinceLastOp = 0
                this.obCount += 1
            }
        }
    }
}