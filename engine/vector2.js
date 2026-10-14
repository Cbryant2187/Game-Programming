class Vector2{
    /**
     * @type{Number} The x component of the vector
     */
    x

    /**
     * @type{Number} The y component of the vector
     */
    y

    
    /**
     * @param {Number} x
     * @param {Number} y
     */
    constructor(x, y){
        this.x = x
        this.y = y
    }

    /**
     * @param {Vector2} other
     * @returns
     */
    plus(other){
        return new Vector2(this.x + other.x, this.y + other.y)
    }


    /**
     * @param {Vector2} other
     * @returns
     */
    minus(other){
        return new Vector2(this.x - other.x, this.y - other.y)
    }

    get magnitude(){
        return Math.sqrt(this.x**2+this.y**2)
    }

    /**
     * @returns
     */
    clone(){
        return new Vector2(this.x, this.y)
    }

    dot(other){
        return this.x*other.x+this.y*other.y
    }

    orthogonel(){
        return new Vector2(this.y - this.x)
    }
}