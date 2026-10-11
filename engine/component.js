class Component{

    /** @type{GameObject} */
    gameObject

    didStart = false

    /**
     * @returns{Transform}
     */
    get transform(){
        return this.gameObject.transform
    }
}