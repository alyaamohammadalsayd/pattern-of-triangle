const canvas = document.getElementById("triangle");
const ctx = canvas.getContext("2d");

// draw triangle
function drawTriangle(p1, p2, p3, color) {
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p3.x, p3.y);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

//midpoint between two points
function getMidpoint(p1, p2) {
  return { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
}

function triangle(p1, p2, p3, depth) {
  if (depth === 0) {
    // draw small tiangle
    drawTriangle(p1, p2, p3, "black");
  } else {
    //Midpoint of the sides of a triangle
    const m12 = getMidpoint(p1, p2);
    const m23 = getMidpoint(p2, p3);
    const m31 = getMidpoint(p3, p1);

    //draw Subtriangles
    triangle(p1, m12, m31, depth - 1);
    triangle(m12, p2, m23, depth - 1);
    triangle(m31, m23, p3, depth - 1);
  }
}

// Coordinates of the large basic triangle
const p1 = { x: 300, y: 50 }; // head
const p2 = { x: 50, y: 450 }; // left
const p3 = { x: 550, y: 450 }; // right

//Run for n=4
triangle(p1, p2, p3, 4);
