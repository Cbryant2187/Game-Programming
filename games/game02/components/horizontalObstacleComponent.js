class HorizontalObstacleComponent extends Component{

    update(){
        this.transform.position.x += 7

        if(this.transform.position.x > 575){
            this.gameObject.destroy()
        }
    }
}