class LaserPolygon extends Component{

    draw(ctx){
        let position = this.transform.position

        ctx.save()
        ctx.translate(position.x, position.y)

        ctx.beginPath()
        ctx.lineTo(0, -10)
        ctx.lineTo(5, 5) 
        ctx.lineTo(-5, 5)

        ctx.fillStyle = "red"

        ctx.fill()
        ctx.restore()

    }

}