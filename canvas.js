var canvas = document.querySelector("canvas");
var d = canvas.getContext("2d");
d.beginPath();
d.arc(190, 50, 40, 0, 2 * Math.PI);
d.stroke();

d.fillStyle = "#8BC34A";
d.fillRect(90, 40, 60, 20);
