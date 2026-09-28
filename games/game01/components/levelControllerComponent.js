class LevelControllerComponent extends Component{

    start(){
        SceneManager.loadScene(MainScene, true)

    }
    update(){
        let obstacleGameObject = GameObject.find("Obstacle")
        if(!obstacleGameObject){
            SceneManager.loadScene(Level01)

        }
    }
}