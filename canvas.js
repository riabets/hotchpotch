var canvas = document.querySelector("canvas");
var d = canvas.getContext("2d");
var gradient = d.createLinearGradient(0, 0, 500, 500);

// Linear Gradient
// gradient.addColorStop(0, '#c4f8ff');
// gradient.addColorStop(1, '#00bcd4');
// d.fillStyle = gradient;
// d.fillRect(0, 0, 1000, 800);

d.beginPath();
d.arc(190, 60, 60, 0, 2 * Math.PI);
d.stroke();

// Rectangle
d.fillStyle = "#8BC34A";
d.fillRect(300, 300, 200, 200);

// ArcTo
d.beginPath();
d.moveTo(200, 200);
d.arcTo(300, 300, 500, 200, 300);
d.lineTo(500, 400);
d.closePath();
d.stroke();

// BezierCurve
d.beginPath();
d.moveTo(50,20);
d.bezierCurveTo(230, 30, 150, 60, 50, 100);
d.closePath();
d.stroke();

// Clearig block
// d.clearRect(150, 50, 50, 50);
// Clearing full canvas
// d.clearRect(0, 0, canvas.width, canvas.height);
