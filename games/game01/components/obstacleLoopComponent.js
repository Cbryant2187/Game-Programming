class ObstacleLoop extends Component{

    start(){
        this.timeSinceLastOp = 0
        this.progressOp = 0
    }

    update(){
        this.timeSinceLastOp += 1
        this.transform.position.y -= 5
        this.progressOp += .25

        if (this.transform.position.y < 50){
            this.gameObject.destroy()
        }

        if(this.timeSinceLastOp > 0){
            if(this.progressOp > 50) {
                this.progressOp = 0
            }
       
            //creating new obstacle objects that progress in a pattern
            instantiate(new ObstacleObject(), new Vector2(this.progressOp * 10, 600))

        }

    }
}
