class Updatecomponent extends Component{
    
    speed = 10
    
    start(){
        // set starting time
        this.timeSinceLastLaser = 0
    }
    
    update() {
        //time since laser increaces each frame
        this.timeSinceLastLaser += 1
                
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + Time.delataTime
        
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - 2

        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y = this.transform.position.y - 1

        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y = this.transform.position.y + 0.5

        //checking for time since last laser
        if(this.timeSinceLastLaser > 20){
            //resetting laser timer
            this.timeSinceLastLaser = 0
            //creating new laser object
            instantiate(new LaserGameObject(), this.transform.position.clone())
            
        }
    }
}