document.getElementsByClassName('sidenav-trigger')[0].addEventListener('click', showMenu);
expand = document.getElementsByClassName("sidenav")[0];
function showMenu(){
        expand.classList.toggle("show");
}

window.addEventListener('scroll',function(e){
  var nav = document.getElementsByClassName("nav-home")[0];
  //var body  = document.getElementsByClassName("container")[0];
  if((document.documentElement.scrollTop || document.body.scrollTop) > window.innerHeight){
    nav.classList.add('change');
  }
  else{
    nav.classList.remove('change');
  }

});


/*this closes the menu bar that had slided
*from the side even if user clicks anywhere on the screen */
var modal = document.getElementById("display01");
window.onclick = function(event) {
    if (event.target == modal) {

          console.log('noth');
        expand.classList.remove("show");
    }
}
