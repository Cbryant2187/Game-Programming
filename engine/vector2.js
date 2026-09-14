class Vector2{
    x
    y

    //creating tracking coordinates
    constructor(x, y){
        this.x = x
        this.y = y
    }

    //function clone positions
    clone(){
        return new Vector2(this.x, this.y)
    }
}