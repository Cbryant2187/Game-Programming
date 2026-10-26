class SquareController extends Component{

  speed = 500

  start(){

  }

  update(){
      if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed

        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed


        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed

        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed

        const objectives = GameObject.findGameObjectsWithTag("Objective")
        for(const objective of objectives){
            if(Collisions.isCollisionPolygonPolygon(this.gameObject, objective)){
                let newX = Math.floor(Math.random() * (-600 - 600 + 1)) + 600;
                let newY = Math.floor(Math.random() * (-300 - 275 + 1)) + 275;
                instantiate(new ObjectiveGameObject(), new Vector2(newX, newY))
                
                Globals.points = Globals.points + 1
                console.log(Globals.points)
                objective.destroy()
            }
        }
    }
}
