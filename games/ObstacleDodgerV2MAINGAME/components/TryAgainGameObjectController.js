class TryAgainGameObjectController extends Component{
    start(){
        
    }
    update(){
        const players = GameObject.findGameObjectsWithTag("Player")
        for(const player of players){
            if(Collisions.isCollisionPolygonPolygon(this.gameObject, player)){
                SceneManager.loadScene(MainScene)
            }
        }
    }
}
