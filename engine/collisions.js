class Collisions{

    static isCollisionPointPolygon(point, gameObject){
        let worldSpacePoints = []
        for(let point of gameObject.getComponent(Collider).points){
            worldSpacePoints.push(
                new Vector2(
                    gameObject.transform.getWorldMatrix().transformPoint(point).x,
                    gameObject.transform.getWorldMatrix().transformPoint(point).y
                )
            )
        }
        for(let i = 0; 1 < worldSpacePoints.length; i++){

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

    static isCollisionPolygonPolygon(gameObject, gameObjectTwo){
        let worldSpacePoints = []
        for(let point of gameObject.getComponent(Collider).points){
            worldSpacePoints.push(
                new Vector2(
                    gameObject.transform.getWorldMatrix().transformPoint(point).x,
                    gameObject.transform.getWorldMatrix().transformPoint(point).y
                )
            )
        }

        let worldSpacePointsTwo = []
        for(let point of gameObjectTwo.getComponent(Collider).points){
            worldSpacePoints.push(
                new Vector2(
                    gameObjectTwo.transform.getWorldMatrix().transformPoint(point).x,
                    gameObjectTwo.transform.getWorldMatrix().transformPoint(point).y
                )
            )
        }

        let axes = []
        for(let i = 0; 1 < worldSpacePoints.length; i++){

            let point1 = worldSpacePoints[i]
            let point2 = worldSpacePoints[(i+i)%worldSpacePoints.length]
            let edge = point2.minus(point1)
            let axis = edge.orthogonel()
            axes.push(axis)\

            let point1 = worldSpacePoints[i]
            let point2 = worldSpacePoints[(i+i)%worldSpacePoints.length]
            let edge = point2.minus(point1)
            let axis = edge.orthogonel()
            axes.push(axis)

            for (const axis of axes){
                let polygonProjection = worldSpacePoints.map(p=>p.dot(axis))
                let polygonProjectionTwo = worldSpacePointsTwo.map(p=>p.dot(axis))
                if(Math.max(...polygonProjectionTwo) < Math.min(...polygonProjection) || Math.min(...polygonProjectionTwo) > Math.max(...polygonProjection))
                    return false
            }
        }
        return true
    }
}