class SquareController extends Component {
  speed = 50
  start() {
    this.isGrounded = false
    this.lastJumpTime = -100
    this.rigidBody = this.gameObject.getComponent(RigidBody)
  }

  fixedUpdate(){
    //Check to see if the right arrow key is down.
    //If it is, move our character right
    if (Input.keysDown.includes("ArrowRight"))
      this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed

    //Check to see if the left arrow key is down.
    //If it is, move our character left
    if (Input.keysDown.includes("ArrowLeft"))
      this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed

    this.isGrounded = false
  }

  update() {
    if( Input.keysDown.includes("Space") && this.isGrounded){
      this.rigidBody.velocity.y = 100
    }
  }

  onCollisionStay(other, minimumTransformVector){
    if(minimumTransformVector.y < 0 && this.rigidBody.velocity.y > 0){
      this.rigidBody.velocity.y = 0
      this.isGrounded = true
    }
    if(minimumTransformVector.y < 0 && this.rigidBody.velocity.y > 0){
      this.rigidBody.velocity.y = 0
      this.isGrounded = true
    }huewoqhfpaI
  }
}