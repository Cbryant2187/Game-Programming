class SquareController extends Component{

  speed = 500

  start(){

  }

  update(){
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

        const objectives = GameObject.findGameObjectsWithTag("Objective")
        for(const objective of objectives){
             if(Collisions.isCollisionPolygonPolygon(this.gameObject, objective)){
                let newX = Math.floor(Math.random() * (-600 - 600 + 1)) + 600;
                let newY = Math.floor(Math.random() * (-300 - 300 + 1)) + 300;
                instantiate(new ObjectiveGameObject(), new Vector2(newX, newY))
                
                Globals.points++
                objective.destroy()
             }
        }
    }
}
