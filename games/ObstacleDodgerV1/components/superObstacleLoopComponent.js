class SuperObstacleLoop extends Component{

    start(){
        this.timeSinceLastOp = 0
        this.progressOp = 0
        this.obCount = 0
    }

    update(){
        this.timeSinceLastOp += 1
        this.transform.position.y -= 5
        this.progressOp += 13 + this.obCount

        if (this.transform.position.y < 50){
            this.gameObject.destroy()
        }

        if(this.obCount < 100){
            if(this.timeSinceLastOp > 5){
                instantiate(new ObstacleObjectV(), new Vector2(this.timeSinceLastOp + this.progressOp, 800))
                instantiate(new ObstacleObjectH(), new Vector2(10, this.timeSinceLastOp + this.progressOp))
                this.timeSinceLastOp = 0
                this.obCount += 1
            }
        }

        if(this.progressOp > 1000){
            this.progressOp = 0
        }
    }
}
