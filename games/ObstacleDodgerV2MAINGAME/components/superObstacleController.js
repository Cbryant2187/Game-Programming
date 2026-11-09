class SuperObstacleController extends Component{
    timeSinceLastOp = 0
    start(){

    }
    update(){
        this.timeSinceLastOp += 1

        if(this.timeSinceLastOp > 15 - Globals.difficulty){
            this.progressOp = Math.random() * (-12 - 12) + 12
            instantiate(new BTVerticalObstacleObject(), new Vector2( this.progressOp * 50, 300))                
            instantiate(new RLHorizontalObstacleObject(), new Vector2(-625, this.progressOp * 30))
            this.timeSinceLastOp = 0
        }
    }
}