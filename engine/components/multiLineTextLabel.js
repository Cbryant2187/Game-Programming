class MultiLineTextLabel extends Component{
    /** @type{string}*/
    fillStyle = "black"

    /** @type{string}*/
    text  = "[BLANK]"

    font = "10px Arial"

    maxWidth = 200

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {
        
        ctx.save()

        ctx.fillStyle = this.fillStyle
        ctx.font = this.font

        //let measurement = ctx.measureText(this.text)
        let fontHeight = ctx.measureText("").fontBoundingBoxAscent + ctx.measureText("").fontBoundingBoxAscent
        let y = 0
        let safeLine = ""
        let possibleLine = ""
        for(let word of this.text.split(" "))
        {
            possibleLine = safeLine + " " + word
            if(ctx.measureText(possibleLine).width > this.maxWidth){
                ctx.fillText(safeLine, 0, y)
                y += fontHeight
                safeLine = word
            }
            else{
                safeLine = possibleLine
            }
        }
        ctx.fillText(possibleLine, 0, y)


        //ctx.fillText(this.text, 0, 0)

        ctx.restore()
    }
}