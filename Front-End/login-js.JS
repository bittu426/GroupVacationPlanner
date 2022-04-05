function login_button(){
    let username = document.getElementById("login-username");
    let usr_password = document.getElementById("login-password");
    if (username.value === "" || usr_password.value === ""){
        alert("Please enter Username and Password");
        return;
    }
    else{
        console.log("Hello world");
        username.value="";
        usr_password.value="";
    }
    
}