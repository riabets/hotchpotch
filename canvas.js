const c = document.getElementById('canvas');
const d = c.getContext("2d");
d.beginPath();
d.arc(95, 50, 40, 0, 2 * Math.PI);
d.stroke();
