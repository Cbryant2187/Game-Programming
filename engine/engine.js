class Engine{
    static canvas
    static ctx
    static currentScene

    static start(){

        //defining canvas
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        //function "listening" for key usage 
        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup) 

        Engine.currentScene.start()

        //begin gameloop
        requestAnimationFrame(Engine.gameLoop)

    }

    static gameLoop(){
        //full game loop
        Engine.update()
        Engine.draw()
        requestAnimationFrame(Engine.gameLoop)
    }

    static update(){
        //track updating any input or game changes by each frame
        Engine.currentScene.update()
    }

    static draw(){

        //defining canvas limits
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        
        //draw current game frame using any updates
        Engine.currentScene.draw(Engine.ctx)
    }
}