
    //you need to code here
    function signup() {

      var name = document.getElementById("name").value;
      
      var email = document.getElementById("email").value;
      var pass = document.getElementById("pass").value;

      localStorage.setItem("name1", name)
      
      localStorage.setItem("email1", email)
      localStorage.setItem("pass1", pass)

     document.getElementById("name").value="";
    
     document.getElementById("email").value="";
     document.getElementById("pass").value="";
     

if(name=="" && email=="" && pass==""){
  alert("please fill data correctly");
}
else{
  alert("user registered successfully...!!!");
  window.location.href="signin.html";
}
 
  }