class SuperObstacleComponent extends Component{
    timeSinceLastOp = 0
    progressOp = 0
    obCount = 0

    update(){
        this.timeSinceLastOp += 1
        this.progressOp = Math.random() * (-12 - 12) + 12

        if(this.obCount < 15){
            if(this.timeSinceLastOp > 9){
                instantiate(new VerticalObstacleObject(), new Vector2(this.progressOp * 50, 300))
                instantiate(new HorizontalObstacleObject(), new Vector2(-625, this.progressOp * 30))
                this.timeSinceLastOp = 0
                this.obCount += 1
            }
        }

        let superObPosition = this.transform.position
        let playerGameObject = GameObject.findGameObjectsWithTag("Player")
        for (const playerGameObject of playerGameObjects){
            let playerPosition = playerGameObject.transform.position
            let distance = superObPosition.minus(playerPosition).magnitude
            if (distance < 5) {
                this.gameobject.destroy()
            }
        }

        let obstacleGameObjects = GameObject.findGameObjectsWithTag("Obstacle")
        if (!obstacleGameObjects){
            Engine.start(Level2)
        }
    }
}
