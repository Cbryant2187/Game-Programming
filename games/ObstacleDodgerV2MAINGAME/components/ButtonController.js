class ButtonController extends Component{

    start(){
        
    }
    update(){
        const players = GameObject.findGameObjectsWithTag("Player")
        for(const player of players){
            if(Collisions.isCollisionPolygonPolygon(this.gameObject, player)){
                const otherConfirms = GameObject.findGameObjectsWithTag("Confirm")
                for(const otherConfirm of otherConfirms){
                    otherConfirm.destroy()
                }

                instantiate(new ButtonConfirmGameObject(), this.gameObject.transform.position.clone())

            }
        }
    }
}
