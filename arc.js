class Arc{
    constructor(x, y, radius, startAngle, endAngle, color = '#00000'){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.color = color;
        this.velocityX = (2 * Math.random()) - 1;
        this.velocityY = (2 * Math.random()) - 1;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillArc(this.x, this.y, this.radius, this.startAngle, this.endAngle)
    }

    animate() {

}