class EnemyController extends Component{

    direction = 1

    update(){
        this.transform.position.x += Time.deltatime * 100 * this.direction
        if(this.transform.position.x > 200){
            this.direction = -1
        
        }
        if(this.transform.position.x < 10)
            this.direction = 1
    }
}