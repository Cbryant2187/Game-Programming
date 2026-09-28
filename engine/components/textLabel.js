class TextLabel extends Component{
    fillstyle = "black"
    text = "[BLANK]"
    font = "10px Arial"

    draw(ctx){

        //begin drawing
        ctx.save()
        //centering drawing on x, y
        ctx.translate(this.transform.position.x, this.transform.position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        //coloring
        ctx.fillstyle = this.fillstyle

        ctx.font = this.font

        ctx.fillText(this.text, 0, 0)

        //end of drawing
        ctx.restore()

    }

}