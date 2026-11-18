class BTVerticalObstacleComponent extends Component{
    update(){
        if(Globals.obY < 0){
            this.transform.position.y -= 2
        } else {
            this.transform.position.y += 2
        }

        if(this.transform.position.y < -350 || this.transform.position.y > 350){
            this.gameObject.destroy()
        }
    }
}