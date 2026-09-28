class PlayerUpdateComponent extends Component{
    
    update(){
        
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + 5
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - 5
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y = this.transform.position.y + 5
        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y = this.transform.position.y - 5


    }
}