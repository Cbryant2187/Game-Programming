class SuperObstacleController extends Component{
    timeSinceLastOp = 0
    start(){

    }
    update(){
        this.timeSinceLastOp += 1

        if(this.timeSinceLastOp > 11 - Globals.difficulty){
            this.progressOp = Math.random() * (-12 - 12) + 12
            instantiate(new VerticalObstacleObject(), new Vector2( this.progressOp * 50, 300))                
            instantiate(new HorizontalObstacleObject(), new Vector2(-625, this.progressOp * 30))
            this.timeSinceLastOp = 0
        }
    }
}