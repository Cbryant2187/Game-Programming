class Input{

    static keysDown = []
    static keysDownThisFrame = []
    static keysUpThisFrame = []

    static mouseButtonsDownThisFrame = []
    static mouseButtonsUpThisFrame = []

    static mousedown(event){
        if(!Input.mouseButtonsDownThisFrame.includes(event.code))
            //add key to list
            Input.mouseButtonsDownThisFrame.push(event.code)
            Input.mouseButtonsDownThisFrame.push(event.code)
    }

    static mouseup(event){
        let index = Input.keysDown.indexOf(event.code)
        //remove key from key list
        Input.keysDown.splice(index,1)
        Input.keysUpThisFrame.push(event.code)
    }

    static keydown(event){
        //check if key is already in list of keys
        if(!Input.keysDown.includes(event.code))
            //add key to list
            Input.keysDown.push(event.code)
            Input.keysDownThisFrame.push(event.code)
    }

    static keyup(event){
        //find where key is in list
        let index = Input.keysDown.indexOf(event.code)
        //remove key from key list
        Input.keysDown.splice(index,1)
        Input.keysUpThisFrame.push(event.code)
    }

    static update(){
        Input.keysDownThisFrame = []
        Input.keysUpThisFrame = []
        Input.mouseButtonsDownThisFrame = []
        Input.mouseButtonsUpThisFrame = []
    }
}
