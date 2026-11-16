class ClearBoardPowerUpController extends Component{
    start(){
        
    }
    update(){
        const players = GameObject.findGameObjectsWithTag("Player")

        for(const player of players){
            if(Collisions.isCollisionPolygonPolygon(this.gameObject, player)){

                const obstacles = GameObject.findGameObjectsWithTag("Obstacle")
                for(const obstacle of obstacles){
                    obstacle.destroy()
                    this.gameObject.destroy()
                    
                }
            }
        }
    }
}
