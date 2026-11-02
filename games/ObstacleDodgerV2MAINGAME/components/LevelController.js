class LevelController extends Component{

    start(){
    }

    update(){
        if(Globals.levelTracker < 1){
            if(Globals.points > (Globals.difficulty * 1)){
                SceneManager.loadScene(Scene2)
                Globals.levelTracker = Globals.levelTracker + 1
                Globals.points = 0
            }

        } else if (Globals.levelTracker < 2){
            if(Globals.points > (Globals.difficulty * 1)){
                SceneManager.loadScene(WinScene)
                Globals.levelTracker = Globals.levelTracker + 1
            }
        }

        if(Globals.death > 1){
            SceneManager.loadScene(GameOverScene)
        }
    }
}
