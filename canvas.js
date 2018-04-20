var canvas = document.querySelector("canvas");
var d = canvas.getContext("2d");
d.beginPath();
d.arc(185, 50, 40, 0, 2 * Math.PI);
d.stroke();