document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Perform validation and login logic
    // For the sake of simplicity, we'll just display an alert message here
    

    const user =localStorage.getItem('user')
    const userInfo =JSON.parse(user)
    if(userInfo.password==password && userInfo.email==email )
    {
        const loginUser = JSON.stringify({email,name:userInfo.name})
        localStorage.setItem("loginUser",loginUser)
        alert('login successful')
        window.location.href= "client.html"
    }else{
        alert('wrong credentials')
    }
    // Clear input fields
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });