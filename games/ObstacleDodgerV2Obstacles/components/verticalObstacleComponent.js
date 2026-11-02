class VerticalObstacleComponent extends Component{

    update(){
        this.transform.position.y -= 7

        if(this.transform.position.y < -250){
            this.gameObject.destroy()
        }
    }
}