class PlayerUpdateComponent extends Component{

    speed = 100

    update(){
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + 5
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - 5

    }
}