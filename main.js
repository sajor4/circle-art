const canvas = document.getElementById('canvas-container');
const ctx = canvas.getContext("2d");

ctx.beginPath();


const r1 = new Arc(100, 75, 50, 0, 2 * Math.PI)
r1.draw(ctx)

function moveArc() {
    ctx.clearArc(0,0,canvas.width, canvas.height);
    r1.animate();
    r1.draw(ctx);
}

setInterval(moveArc, 10)