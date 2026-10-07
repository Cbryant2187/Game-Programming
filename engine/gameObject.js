class GameObject{

    //default list of components
    components = []
    markForDestroy = false
    name
    tags = []
    layer = "default"

    //find location of object
    get transform(){
        //not good syntax
        return this.components[0];

    }

    //create new component
    constructor(name, tags = [], layer = 'default'){
        this.addComponent(new Transform())
        this.name = name
        this.tags = tags
        this.layer = layer
    }

    //connecting component to a gameobject
    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }

    broadcastMessgae(message, args =[]){
        for(const component of this.components){
            component[message]?.(...args)
        }
    }

    //activate a component
    start(){
        for(const component of this.components.filter(c=>!c.didStart)){
            //activate only if found and able, otherwise ignore
            component.start?.()
            component.didStart = true
        }
    }

    //update component
    update(){
        for(const component of this.components){
            //update only if found and able, otherwise ignore
            component.update?.()
        }
    }
    
    //draw component
    draw(ctx){

        ctx.save()

        ctx.setTransform(ctx.getTransform().multiply(this.transform.getWorldMatrix()))

        for(const component of this.components){
            //only draw if able, otherwise ignore
            component.draw?.(ctx)
        }
        ctx.restore()
    }

    destroy(){
        this.markForDestroy = true

    }

    getComponent(type){
        return (this.components.find(c=>c instanceof type))

    }

    static find(name){
        
        return SceneManager.currentScene.gameObjects.find(go=>go.name == name )

    }

    static findGameObjectsWithTag(tag){
        
        return SceneManager.currentScene.gameObjects.filter(go=>go.tags.includes(tag))

    }

    static findGameObjectsByType(type){
        return SceneManager.currentScene.gameObjects.filter(go=>go.components.find(c=>c instanceof type))
    }
}