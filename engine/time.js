class Time{
    /**
     * @type{Number}
     */
    static deltaTime = 1/60

    /**
     * @type{Number}
     */
    static time = 0
    static update(){
        Time.time += Time.deltaTime
    }
}