class TextLabel extends Component{
    fillstyle = "balck"
    text = "[BLANK]"

    draw(ctx){

        //begin drawing
        ctx.save()
        //centering drawing on x, y
        ctx.translate(this.transform.position.x, this.transform.position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        ctx.beginPath()

        //iterating over given points to create shape
        for(const point of this.points){
            ctx.lineTo(point.x, point.y)
        }

        //coloring
        ctx.fillstyle = this.fillstyle

        ctx.fillText(this.text, 0, 0)

        //end of drawing
        ctx.restore()

    }

}