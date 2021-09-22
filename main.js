canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouse_event = "empty";
var last_position_of_x, last_position_of_y;

color = "black";
width = 10;

canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e) {
    
    mouse_event = "mouseDown";
}

canvas.addEventListener("mousemove", my_mouse_move);

function my_mouse_move(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.lineWidth = width;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }


last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouse_up);

function my_mouse_up(e) {
    mouse_event = "mouseUP";
}
