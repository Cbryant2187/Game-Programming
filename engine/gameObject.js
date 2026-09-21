class GameObject{

    //default list of components
    components = []
    markfordestroy = false
    name

    //find location of object
    get transform(){
        //not good syntax
        return this.components[0];

    }

    //create new component
    constructor(name){
        this.addComponent(new Transform())
        this.name = name
    }

    //connecting component to a gameobject
    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }

    //activate a component
    start(){
        for(const component of this.components){
            //activate only if found and able, otherwise ignore
            component.start?.()
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
        
        return Engine.currentScene.gameObjects.find(go=>go.name == name )

    }
}