class GameObject{

    //default list of components
    components = []
    markfordestroy = false
    name
    tags = []

    //find location of object
    get transform(){
        //not good syntax
        return this.components[0];

    }

    //create new component
    constructor(name, tags = []){
        this.addComponent(new Transform())
        this.name = name
        this.tags = tags
    }

    //connecting component to a gameobject
    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }

    //activate a component
    start(){
        for(const component of this.components.filter(c=>|c.didStart)){
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
        for(const component of this.components){
            //only draw if able, otherwise ignore
            component.draw?.(ctx)
        }
    }

    destroy(){
        this.markForDestroy = true

    }

    getComponent(type){
        return this.components.find(c=>c instanceof type)

    }

    static find(name){
        
        return SceneManager.currentScene.gameObjects.find(go=>go.name == name )

    }

    static findGameObjectsWithTag(tag){
        
        return SceneManager.currentScene.gameObjects.filter(go=>go.tags.includes(tag))

    }
}