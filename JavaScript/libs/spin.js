/*
http://spin.js.org/  
https://github.com/fgnass/spin.js  
https://cdnjs.com/libraries/spin.js  

<script src="https://cdnjs.cloudflare.com/ajax/libs/spin.js/2.3.2/spin.min.js" integrity="sha256-PieqE0QdEDMppwXrTzSZQr6tWFX3W5KkyRVyF1zN3eg=" crossorigin="anonymous"></script>

*/


var opts = {
    lines: 13,
    // The number of lines to draw
    length: 28,
    // The length of each line
    width: 12,
    // The line thickness
    radius: 42,
    // The radius of the inner circle
    scale: 1,
    // Scales overall size of the spinner
    corners: 1,
    // Corner roundness (0..1)
    color: '#000',
    // #rgb or #rrggbb or array of colors
    opacity: 0.25,
    // Opacity of the lines
    rotate: 0,
    // The rotation offset
    direction: -1,
    // 1: clockwise, -1: counterclockwise
    speed: 1,
    // Rounds per second
    trail: 60,
    // Afterglow percentage
    fps: 20,
    // Frames per second when using setTimeout() as a fallback for CSS
    zIndex: 2e9,
    // The z-index (defaults to 2000000000)
    className: 'spinner',
    // The CSS class to assign to the spinner
    top: '50%',
    // Top position relative to parent
    left: '50%',
    // Left position relative to parent
    shadow: false,
    // Whether to render a shadow
    hwaccel: false,
    // Whether to use hardware acceleration
    position: 'absolute',
    // Element positionin
}
var target = document.getElementById('foo')
var spinner = new Spinner(opts).spin(target);