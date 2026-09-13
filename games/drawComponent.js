class Drawcomponent extends Component{

    draw(ctx) {
            let position = this.transform.position
            //signal to context about to draw, tutorial skip typical
            ctx.save()

            //centering, Y GOES DOWN
            ctx.translate(position.x, position.y)

            ctx.beginPath()
            ctx.lineTo(0, -20)
            ctx.lineTo(10, 10)
            ctx.lineTo(-10, 10)
            


            ctx.fillStyle = "blue"
            ctx.fill()

            ctx.restore()
        }

}