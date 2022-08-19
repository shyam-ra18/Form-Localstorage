
window.onload = function() {
    getUserDetails();
}


function getFormData() {
    const name = document.getElementById("name");
    const number = document.getElementById("number");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    var userObject = {
        name: name.value,
        number: number.value,
        email: email.value,
        password: password.value
    };

    if (localStorage.getItem("userDetails") != null) {
        var userDetails = JSON.parse(localStorage.getItem("userDetails"));
        var flag = false;
        for (var i = 0; i < userDetails.length; i++) {
            if (userDetails[i].name == userObject.name && userDetails[i].email == userObject.email) {
                flag = true;
                break;
            }
        }
        if (flag) {
            getUserDetails();
        } else {
            userDetails.push(userObject);
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            alert("User registered successfully");
        }

    } else {
        var userDetails = [];
        userDetails.push(userObject);
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        alert("User registered successfully");
        
    }




    
    localStorage.setItem("userDetails", JSON.stringify(userObject));

        

}

function getUserDetails() {
    const name = document.getElementById("name");
    const number = document.getElementById("number");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    name.value = userDetails.name;
    number.value = userDetails.number;
    email.value = userDetails.email;
    password.value = userDetails.password;

}








