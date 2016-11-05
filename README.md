## Website Performance Optimization portfolio project

###How to Run

*Run `http-server` in frontend-nanodegree-mobile-portfolio\dist.

*Run `ngrok http 8080`.

*Visit the url ngrok gives to you.

###Optimization

####Part 1: Optimize PageSpeed Insights score for index.html

*Minified HTML, CSS, JS and image with Grunt.

*Inline style CSS code and the CSS google font.

*Add media="print" to print.css link tag.

*Move all JS tag to the bottom.

*Add async attribute to JS.

####Part 2: Optimize Frames per Second in pizza.html

1.Consistent frame-rate at 60fps when scrolling

*Add requestAnimationFrame to updatePositions function.

*making two loops, one for the phases (0 to 4) and the other for the positions.

*In updatePositions function Change function querySelectorAll to getElementsByClassName;Assign `document.body.scrollTop / 1250` to variable scroll and move variable scroll out of loop.

*Add style `transform: translateZ(0);backface-visiblity: hidden;` to mover class.

*Reduce the number of pizzas to `height / s * cols`.

2.Time to resize pizzas is less than 5 ms using the pizza size slider

*In changePizzaSizes function Change function querySelectorAll to getElementsByClassName.

*Move variable dx and newwidth out of loop.
