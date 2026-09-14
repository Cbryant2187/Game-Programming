class Scene{

    //default list of game objects in scene
    gameObjects = []

    //create game object in game
    instantiate(gameObject, position = new Vector2(0,0)){
        this.gameObjects.push(gameObject)
        gameObject.transform.position = position
    }

    //start a gameobject in a scene
    start(){
        for(const gameObject of this.gameObjects){
            gameObject.start()
        }
    }

    //update every frame
    update(){
        for(const gameObject of this.gameObjects){
            gameObject.update()
        }
    }

    //draw object
    draw(ctx){
        for(const gameObject of this.gameObjects){
            gameObject.draw(ctx)
        }
    }
}

//function to instantiate gameobjects
function instantiate(gameObject, position = new Vector2(0,0)){
    //set game object location
    Engine.currentScene.instantiate(gameObject, position)
}