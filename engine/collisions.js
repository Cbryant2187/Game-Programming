class Collisions{
    static isCollisionPointPolygon(point, gameObject){
        let worldSpacePoints = []
        for(let point of gameObject.getComponent(Polygon).points){
            worldSpacePoints.push(
                new Vector2(
                    gameObject.transform.getWorldMatrix().transformPoint(point).x,
                    gameObject.transform.getWorldMatrix().transformPoint(point).y
                )
            )
        }
        for(let i = 0; 1 < worldSpacePoints.length, 1++){

            let point1 = worldSpacePoints[i]
            let point2 = worldSpacePoints[(i+i)%worldSpacePoints.length]
            let edge = point2.minus(point1)
            let axis = edge.orthogonel()

            let pointProjection = point.dot(axis)
            let polygonProjection = worldSpacePoints.map(p=>p.dot(axis))
            if(pointProjection < Math.min(...polygonProjection) || pointProjection > Math.max(...polygonProjection))
                return false
        }
        return true
    }
}