document.addEventListener("DOMContentLoaded", function (){
    
    let grandpanier1 = document.querySelectorAll("#grandpanier1");
    let panier2 = document.querySelectorAll(".panier2");
    let panier3 = document.querySelectorAll(".panier3");
    let totalpanier = document.querySelector('.totalpanier');
    let sum = document.querySelector(".summarize");  
    const liste = [];
    
totalpanier.Value(grandpanier1) = "grandpanier1.innerHTML";
function test() {
    var m=0;
    for (i=1;i<2;i++) {
    if (eval("document.forms.e.checkbox"+i+".checked == true")){
    m=m+1;
    }
    }
    if (m>=3) {
      alert("Vous avez fait du grand panier");
    }else {
      alert("Vous avez fait le choix du petit panier");
    }
  }
    