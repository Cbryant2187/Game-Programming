class LevelController extends Component{
    start(){
        SceneManager.loadScene(MainScene, true)
    }
    update(){
        if(Globals.points >= 5){
            Globals.points = 0
            SceneManager.loadScene(Scene2)
        }
    }
}