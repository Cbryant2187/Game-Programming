class UpdateComponent extends Component {

    speed = 50
    start() {
        this.timeSinceLastLaser = 0
    }
    update() {
        this.timeSinceLastLaser += 1
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed

        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed

        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed

        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed

        if(this.timeSinceLastLaser > 20 && Input.keysDown.includes("Space")){
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }
        
        Camera.main.transform.position = this.transform.position.clone()

        const enemies = GameObject.findGameObjectsWithTag("Enemy")
        for(const enemy of enamies){
            if(Collisions.isCollisionPointPolygon(this.gameObject, enemy)){
                console.log("collision")
            }
        }
    }
    onCollisionStay(other){
        console.log(other)
    }
    onMouseOver(){
        console.log("mouse over")
    }
}