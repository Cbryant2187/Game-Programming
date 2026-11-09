class LevelController extends Component{

    start(){
    }

    update(){
        if(Globals.levelTracker == 0){
            if(Globals.points > (Globals.difficulty * 1) + 1){
                SceneManager.loadScene(Scene2)
                Globals.levelTracker = Globals.levelTracker + 1
                Globals.points = 0
            }

        } else if (Globals.levelTracker == 1){
            if(Globals.points > (Globals.difficulty * 1.5) + 1){
                Globals.levelTracker = Globals.levelTracker + 1
                SceneManager.loadScene(Scene3)
                Globals.points = 0
            }
        } else if (Globals.levelTracker == 2){
            if(Globals.points > (Globals.difficulty * 2) + 1){
                Globals.levelTracker = Globals.levelTracker + 1
                SceneManager.loadScene(Scene4)
                Globals.points = 0
            }
        } else if (Globals.levelTracker == 3){
            if(Globals.points > (Globals.difficulty * 2.5) + 1){
                Globals.levelTracker = Globals.levelTracker + 1
                SceneManager.loadScene(WinScene)
                Globals.points = 0
            }
        }

        if(Globals.death > 1){
            SceneManager.loadScene(GameOverScene)
        }
    }
}
