function myFunction() {
    let x = document.getElementById("sidenav");
    x.classList.toggle("responsive");
  }
function active(el) {
    let  activeelems = document.querySelectorAll(".active");
    for(let i=0;i<activeelems.length;i++)
     {
         activeelems[i].classList.toggle('active');
     }
    el.classList.toggle('active');
    console.log(el);
}