
   
    
  function validate(){
    window.location.href="register.html";
  }

  function login(){
    event.preventDefault()
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass2").value;

    var email1=localStorage.getItem("email1");
    var pass1=localStorage.getItem("pass1");

    if(email==email1 && pass==pass1){
      alert("Registered Successfully");
     window.location.href="./latest.html";
    
    }else{
      alert("Email and password is incorrect or if you don't registered please signup");
    }
  }