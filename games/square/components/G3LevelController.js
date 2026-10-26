class LevelController extends Component{
    start(){
        console.log("pre start")
        SceneManager.loadScene(MainScene)
        console.log("post start")
    }
    update(){
        console.log("pre update")
        if(Globals.points > 1){
            console.log("in update")
            SceneManager.loadScene(Scene2)
        }
        console.log("post update")
    }
}
