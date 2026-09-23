class Engine{
    static canvas
    static ctx

    static start(){

        //defining canvas
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        //function "listening" for key usage 
        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup) 



        SceneManager.nextScene = nextScene

        //begin gameloop
        requestAnimationFrame(Engine.gameLoop)

    }

    static gameLoop(){
        SceneManager.update()
        //full game loop
        Engine.update()
        Engine.draw()

        Time.update()
        requestAnimationFrame(Engine.gameLoop)
    }

    static update(){
        SceneManager.currentScene.start()
        //track updating any input or game changes by each frame
        SceneManager.currentScene.update()
    }

    static draw(){

        //defining canvas limits
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        
        //draw current game frame using any updates
        SceneManager.currentScene.draw(Engine.ctx)
    }
}