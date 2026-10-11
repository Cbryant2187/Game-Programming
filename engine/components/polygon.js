class Polygon extends Component {
    
    /** @type{String}*/
    fillStyle = "magenta"

    /** @type{Vector2[]}*/
    points = []

    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {
        ctx.save()

        ctx.beginPath()
        for(const point of this.points){
            ctx.lineTo(point.x, point.y)
        }

        ctx.fillStyle = this.fillStyle

        ctx.fill()

        ctx.restore()
    }
}