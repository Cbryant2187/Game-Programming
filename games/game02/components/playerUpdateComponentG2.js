class PlayerUpdateComponentG2 extends Component{


    speed = 275

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

        let obstacleGameObjects = GameObject.findGameObjectsWithTag("Obstacle")
        if (!obstacleGameObjects){
            Engine.start(Level2)
        }
    }
}