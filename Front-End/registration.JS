


function create_button(){
	let name = document.getElementById("register_username");


let usrpassword = document.getElementById("register_password");


let user_email = document.getElementById("register_email");
	if (name.value === "" || usrpassword.value === "" || user_email.value === "")
	{
		alert("Please Enter all the required fields");
		return;
    }
	else
	{
		console.log("Creating");
		name.value="";
		usrpassword.value="";
		user_email.value="";
	
	}
}