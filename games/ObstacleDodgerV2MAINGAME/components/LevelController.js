class LevelController extends Component{
    //automatically evaluates to load GameOverScene when loop starts?
    start(){
    }
    update(){
        if(Globals.points > 7){
            SceneManager.loadScene(Scene2)
        }
        //if(Globals.death = 1){
        //    SceneManager.loadScene(GameOverScene)
        //}
    }
}
