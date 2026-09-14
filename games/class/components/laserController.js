class LaserController extends Component{
    update(){
        // direction of "lasers"
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x -= 1
        
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x += 1

        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y += 1

        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y -= 1

        if(this.transform.position.y < 50){
            this.gameObject.destroy()
        }

    }
}