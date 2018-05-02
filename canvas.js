var canvas = document.querySelector("canvas");
var d = canvas.getContext("2d");
var gradient = d.createLinearGradient(30, 30, 300, 300);
// Circle
d.beginPath();
d.arc(190, 60, 60, 0, 2 * Math.PI);
d.stroke();

// Rectangle
d.fillStyle = "#8BC34A";
d.fillRect(90, 40, 60, 20);

// ArcTo
d.beginPath();
d.moveTo(450, 20);
d.arcTo(150, 100, 50, 20, 30);
d.lineTo(50, 20);
d.closePath();
d.stroke();

// BezierCurve
d.beginPath();
d.moveTo(50,20);
d.bezierCurveTo(230, 30, 150, 60, 50, 100);
d.closePath();
d.stroke();

// Linear Gradient
gradient.addColorStop(0, 'green');
gradient.addColorStop(1, 'yellow');
d.fillStyle = gradient;
d.fillRect(30, 30, 300, 300);

// Clearig block
d.clearRect(150, 50, 50, 50);
// Clearing full canvas
// d.clearRect(0, 0, canvas.width, canvas.height);