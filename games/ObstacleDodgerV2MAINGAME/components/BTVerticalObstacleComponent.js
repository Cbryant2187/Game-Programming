class BTVerticalObstacleComponent extends Component{
    update(){
        if(Globals.obY < 0){
            this.transform.position.y -= 7
        } else {
            this.transform.position.y += 7
        }

        if(this.transform.position.y < -350 || this.transform.position.y > 350){
            this.gameObject.destroy()
        }
    }
}