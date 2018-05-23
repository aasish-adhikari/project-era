document.getElementsByClassName('sidenav-trigger')[0].addEventListener('click', showMenu);
// window.addEventListener('scroll',scrolling());
function showMenu(){
    var expand = document.getElementsByClassName("sidenav")[0];
    console.log('noth');
        expand.classList.toggle("show");
}
/*
function scrolling(){
  var nav = document.getElementsByClass('mainnav')[0];
  //var body  = document.getElementsByClassName("container")[0];
  if(document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight-45){
    nav.classList.add('change');
  }

}*/
