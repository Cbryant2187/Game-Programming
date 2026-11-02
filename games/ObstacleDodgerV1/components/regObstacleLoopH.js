class ObstacleLoopH extends Component{

    start(){

    }

    update(){
        this.transform.position.x += 10
        if (this.transform.position.x > 800){
            this.gameObject.destroy()
        }
    }
}