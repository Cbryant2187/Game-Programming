class ButtonController extends Component{

    start(){
        Globals.difficulty = 1
        if (this.gameObject.tags.includes("DiffOne")){
            instantiate(new ButtonConfirmGameObject(), this.gameObject.transform.position.clone())
        }
    }

    update(){

        const players = GameObject.findGameObjectsWithTag("Player")
        for(const player of players){

            if(Collisions.isCollisionPolygonPolygon(this.gameObject, player)){

                if (this.gameObject.tags.includes("DiffOne")){
                    Globals.difficulty = 1
                } else 
                    if (this.gameObject.tags.includes("DiffTwo")){
                        Globals.difficulty = 2
                } else {
                    Globals.difficulty = 3
                }
                

                const otherConfirms = GameObject.findGameObjectsWithTag("Confirm")
                for(const otherConfirm of otherConfirms){
                    otherConfirm.destroy()
                }

                instantiate(new ButtonConfirmGameObject(), this.gameObject.transform.position.clone())

            }
        }
    }
}
