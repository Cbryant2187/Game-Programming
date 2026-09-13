class Updatecomponent extends Component{
    

    start(){
        this.timeSinceLastLaser = 0
    }
    
    update() {
        this.timeSinceLastLaser += 1
                
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + 1
        
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - 1

        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y = this.transform.position.y - 1

        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y = this.transform.position.y + 1

        if(this.timeSinceLastLaser > 20){
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
            
        }
    }
}