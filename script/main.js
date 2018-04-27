/*This function here triggers the animation
* of hamberger icon which has its before and
* after styled line transformed to form an arrow*/
function openFunction() {
    element = document.getElementById("navicon-arrow");
    element.classList.toggle("open");
    slideopen = document.getElementsByClassName("slider-wrapper")[0];
    slideopen.classList.toggle("slided");
}
/*This shows and hides sidebar menu*/
function showMenu(i){
    var expand = document.getElementsByClassName("menubar-menu")[i];
    if(i===1){
        expand.classList.toggle("show");
    }
    else{
    expand.classList.toggle("showExpanded");
    }
}
/*this closes the menu bar that had slided
*from the side even if user clicks anywhere on the screen */
var modal = document.getElementById('display01');
window.onclick = function(event) {
    if (event.target == modal) {
        slideopen.classList.remove("slided");
        element.classList.remove("open");
    }
}
