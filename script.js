function validate(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    console.log(username);
    console.log(password);
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(username)){
        alert("You have entered wrong email format");
    }else{
        alert.apply("correct email");
        console.log("correct email format");
    }

    if(password === "SmartServTest@123"){
        console.log("Correct Password");
        location.href ="https://open-to-cors.s3.amazonaws.com/dashboard2.png";
        
    }else{
        alert("You have entered the wrong password");
    }

}

