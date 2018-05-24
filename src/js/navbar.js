document.getElementsByClassName('sidenav-trigger')[0].addEventListener('click', showMenu);
function showMenu(){
    var expand = document.getElementsByClassName("sidenav")[0];
    console.log('noth');
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
