class Polygon extends Component{

    //set default polygon attributes
    fillstyle = "magenta"
    points = []

    draw(ctx){
        let position = this.transform.position

        //begin drawing
        ctx.save()
        //centering drawing on x, y
        ctx.translate(position.x, position.y)

        ctx.beginPath()

        //iterating over given points to create shape
        for(const point of this.points){
            ctx.lineTo(point.x, point.y)
        }

        //coloring
        ctx.fillstyle = this.fillstyle
        ctx.fill()

        //end of drawing
        ctx.restore()

    }

}