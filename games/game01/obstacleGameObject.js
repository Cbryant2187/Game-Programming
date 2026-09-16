class Obstacle extends Gameobject{

    constructor(){
        super()

        this.addComponent(new ObstacleLoop())

        this.addComponent(new Polygon(), {fillstyle:"yellow", points:[
            new Vector2(0, -15),
            new Vector2(10, -15),
            new Vector2(10, 10),
            new Vector2(-10, 10),
            
        ]}) 
    }
}

class ObstacleLoop extends Component{

    start(){
        this.timeSinceLastOp = 0    
    }

    update(){
        this.timeSinceLastOp += 1
        this.transform.position.y -= 2

        if(this.timeSinceLastOp > 20){
            //resetting laser timer
            this.timeSinceLastOp = 0
            //creating new laser object
            instantiate(new Obstacle(), this.transform.position.clone())

        }
    }
}