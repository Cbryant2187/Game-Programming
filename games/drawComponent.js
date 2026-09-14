class Drawcomponent extends Component{

    draw(ctx) {
            let position = this.transform.position
            //signal to the context about to draw, tutorial skip typical
            ctx.save()

            //centering, Y GOES DOWN
            ctx.translate(position.x, position.y)

            //lineTo draws from corner to corner/ point to point
            ctx.beginPath()
            ctx.lineTo(0, -20)
            ctx.lineTo(10, 10)
            ctx.lineTo(-10, 10)
            

            //coloring
            ctx.fillStyle = "blue"
            ctx.fill()

            //signal for end of drawing
            ctx.restore()
        }
}