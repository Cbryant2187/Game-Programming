class Input{

    static keysDown = []
    static keydown(event){
        //check if key is already in list of keys
        if(!Input.keysDown.includes(event.code))
            //add key to list
            Input.keysDown.push(event.code)
    }

    static keyup(event){
        //find where key is in list
        let index = Input.keysDown.indexOf(event.code)
        //remove key from key list
        Input.keysDown.splice(index,1)
    }



}