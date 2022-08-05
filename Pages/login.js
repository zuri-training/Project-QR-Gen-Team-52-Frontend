function failText(){
    var x = document.getElementById("pop");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
   }
}


function succeed(){
   var x = document.getElementById("pop1");
   if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
  }
}

function logIn(){
       var uname = document.getElementById("email").value;
       var pword = document.getElementById("password").value;
       var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       if(uname ==''){
           failText();
       }
       else if(pword==''){
           failText();
       }
       else if(!filter.test(uname)){
           failText();
       }
       else if(pword.length < 6){
           failText();
       }
       else{
           succeed();
       }
    }