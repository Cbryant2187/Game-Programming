class RectTranform extends GameObject {
    contructor(name, tags, layer){
        super(name, tags, layer)
        this.components[0] = new RectTranform()
    }
}