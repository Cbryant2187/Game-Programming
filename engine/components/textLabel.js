class TextLabel extends Component{
    /** @type{string}*/
    fillStyle = "black"

    /** @type{string}*/
    text  = "[BLANK]"

    font = "10px Arial"

    textAlignment = "left"

    textBaseline = "alphabetic"

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {
        
        ctx.save()

        ctx.fillStyle = this.fillStyle
        ctx.font = this.font
        ctx.textAlign = this.textAlignment
        ctx.textBaseline = this.textBaseline
        ctx.fillText(this.text, 0, 0)

        ctx.restore()
    }
}