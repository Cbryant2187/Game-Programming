class GameObject{
    /**
     * @type{Component[]}
     */
    components = []

    /**
     * @type{Boolean}
     */
    markForDestroy = false

    /**
     * @type{String}
     */
    name

    tags = []

    layer = "default"

    /** 
     * @returns{Transform}
    */
    get transform(){
        return /** @type {Transform} */ (this.components[0]);
    }

    /**
     * 
     * @param {String} name
     */
    constructor(name, tags = [], layer = 'default'){
        this.addComponent(new Transform())
        this.name = name
        this.tags = tags
        this.layer = layer
    }

    /**
     * 
     * @param {Component} component 
     * @param {Object} parameters 
     */
    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }

    broadcastMessage(message, args = []){
        for(const component of this.components){
            component[message]?.(...args)
        }
    }

    start(){
        for(const component of this.components.filter(c=>!c.didStart)){
            // @ts-expect-error
            component.start?.()
            component.didStart = true
        }

    }

    update(){
        for(const component of this.components){
            // @ts-expect-error
            component.update?.()
        }

    }

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx){

        ctx.save()
        ctx.setTransform(ctx.getTransform().multiply(this.transform.getWorldMatrix()))
        for(const component of this.components){
            // @ts-expect-error
            component.draw?.(ctx)
        }
        ctx.restore()
    }

    destroy(){
        this.markForDestroy = true
    }

    /**
     * @template {Component} T
     * @param {new (...args: any[]) => T} type
     * @returns {T|undefined}
     */
    getComponent(type){
        return /** @type {T|undefined} */ (this.components.find(c=>c instanceof type))
    }

    /**
     * @param {String} name
     * @returns
     */
    static find(name){
        return SceneManager.currentScene.gameObjects.find(go=>go.name == name )
    }

    static findGameObjectsWithTag(tag){
        return SceneManager.currentScene.gameObjects.filter(go=>go.tags.includes(tag) )
    }

    static findGameObjectsByType(type){
        return SceneManager.currentScene.gameObjects.filter(go=>go.components.find(c=>c instanceof type))
    }
}