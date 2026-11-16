class ButtonController extends Component{
    selected = 0
    flip = 0

    start(){
        
    }
    update(){
        const players = GameObject.findGameObjectsWithTag("Player")
        for(const player of players){
            if(Collisions.isCollisionPolygonPolygon(this.gameObject, player)){
                this.selected = 1
                instantiate(new ButtonConfirmGameObject(), this.gameObject.transform.position.clone())

            }
        }
    }
}
