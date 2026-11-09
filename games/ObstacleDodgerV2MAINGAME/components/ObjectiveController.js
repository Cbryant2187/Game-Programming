class ObjectiveController extends Component{

    start(){

    }

    update(){
        const objectives = GameObject.findGameObjectsWithTag("Objective")
        for(const objective of objectives){
            Globals.obX = objective.transform.position.x
            Globals.obY = objective.transform.position.y
        }
    }
}