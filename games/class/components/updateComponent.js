class UpdateComponent extends Component {

    speed = 50
    start() {
        this.timeSinceLastLaser = 0
    }
    update() {
        this.timeSinceLastLaser += 1
        //Check to see if the right arrow key is down.
        //If it is, move our character right
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed

        //Check to see if the left arrow key is down.
        //If it is, move our character left
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed

        //Check to see if the up arrow key is down.
        //If it is, move our character up
        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed

        //Check to see if the down arrow key is down.
        //If it is, move our character down
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed

        if(this.timeSinceLastLaser > 20 && Input.keysDown.includes("Space")){
             this.timeSinceLastLaser = 0
             instantiate(new LaserGameObject(), this.transform.position.clone())
         }
         if (Input.keysUpThisFrame.includes("Space"))
             instantiate(new LaserGameObject(), this.transform.position.clone())

        Camera.main.transform.position = this.transform.position.clone()
        //Camera.main.transform.scale = new Vector2(1/2, 1/2)
        //Camera.main.transform.rotation = 1

        const enemies = GameObject.findGameObjectsWithTag("Enemy")
        for(const enemy of enemies){
             if(Collisions.isCollisionPolygonPolygon(this.gameObject, enemy)){
                 console.log("Collision")
             }
        }
    }
    onCollisionStay(other){
        console.log(other)
    }
    onMouseOver(){
        console.log("Mouse Over")
    }
}