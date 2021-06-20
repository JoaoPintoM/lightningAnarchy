var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');

// var canvas = document.querySelector("canvas");
var tilesetContainer = document.querySelector(".tileset-container");
var tilesetSelection = document.querySelector(".tileset-container_selection");
var tilesetImage = document.querySelector("#tileset-source");

canvas.width = window.innerWidth;

var selection = [0, 0]; //Which tile we will paint from the menu

var tileSize = 32;
// var zoom = 1;

let scale       = 1;
let scaleFactor = 0.2;
let scrollX     = 0;
let scrollY     = 0;

var originx = 0;
var originy = 0;

var isMouseDown = false;
var currentLayer = 0;
var map = [
    0, 1, 0, 0, 1, 0,
    0, 0, 0, 0, 1, 0,
    0, 0, 0, 1, 1, 0,
    0, 1, 0, 0, 0, 0,
]


(function () {
    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        draw();
    }
    resizeCanvas();
})();
