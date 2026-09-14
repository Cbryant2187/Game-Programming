class LaserPolygon extends Component{

    draw(ctx){
        let position = this.transform.position

        //signal to context about to draw
        ctx.save()

        //centering drawing on current player position
        ctx.translate(position.x, position.y)

        //drawing laser
        ctx.beginPath()
        ctx.lineTo(0, -10)
        ctx.lineTo(5, 5) 
        ctx.lineTo(-5, 5)

        //coloring
        ctx.fillStyle = "red"
        ctx.fill()

        //signal to context end of drawing
        ctx.restore()
    }
}