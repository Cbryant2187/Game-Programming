class LaserController extends Component{
    update(){
        // direction of "lasers"
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x -= Time.deltaTime * this.speed
        
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x += Time.deltaTime * this.speed

        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y += Time.deltaTime * this.speed

        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y -= Time.deltaTime * this.speed

        if(this.transform.position.y < 50){
            this.gameObject.destroy()
        }

        let myPosition = this.transform.position
        let enemyGameObject = Gameobject.find("Enemy")
        if (enemyGameObject){
            let enemyPosition = Gameobject.find("Enemy").transform.position
            let distance = myPosition.minus(enemyPosition).magnitude

            if(distance < 20){
                this.gameObject.destroy()
                Gameobject.find("Enemy").destroy()
            }
        }

    }
}