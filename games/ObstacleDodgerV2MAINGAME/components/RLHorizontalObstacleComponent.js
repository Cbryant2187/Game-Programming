class RLHorizontalObstacleComponent extends Component{
    update(){
        if(Globals.obX < 0){
            this.transform.position.x -= 3
        } else {
            this.transform.position.x += 3
        }

        if(this.transform.position.x > 675 || this.transform.position.x < -675){
            this.gameObject.destroy()
        }
    }
}