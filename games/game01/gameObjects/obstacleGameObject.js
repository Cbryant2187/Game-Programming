class ObstacleObject extends GameObject{

    constructor(){
        super()

        this.addComponent(new ObstacleLoop())

        this.addComponent(new Polygon(), {fillstyle:"yellow", points:Assets.square})
    }
}

class ObstacleLoop extends Component{

    start(){
        this.timeSinceLastOp = 0
        this.progressOp = 0
    }

    update(){
        this.timeSinceLastOp += 1
        this.transform.position.y -= 3

        if(this.transform.position.x < 500){
            if(this.timeSinceLastOp > 30){
                //resetting obstacle timer
                this.timeSinceLastOp = 0

                this.progressOp += 1
                //creating new obstacle objects that progress in a pattern
                instantiate(new ObstacleObject(), new Vector2(this.progressOp * 100, 700))

            }
        }

    }
}