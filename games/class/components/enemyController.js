class EnemyController extends Components{
    direction = 1
    update(){
        this.transform.position.x += Time.deltatime * 100 * this.direction
        if(this.transform.position.x > 200){
            this.direction = -1
        
        }
        if(this.transform.position.x < 100)
            this.direction = 1
    }

}