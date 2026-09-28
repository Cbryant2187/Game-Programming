class ObstacleLoopV extends Component{
    start(){

    }

    update(){
        this.transform.position.y -= 10
        if (this.transform.position.y < 50){
            this.gameObject.destroy()
        }
    }
}