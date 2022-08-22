const name = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

const male = document.getElementById('male');
const female = document.getElementById('female');
const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");
const submit = document.getElementById("btn_submit");

// const a1 = document.getElementById("a1");
// const hello = [];
// hello.push(JSON.parse(localStorage.getItem("h1")));


window.onload = function () {
    const name = document.getElementById("name");
    btn.disabled = true;
    name.addEventListener("keyup", disableSubmitButton);
    number.addEventListener("keyup", disableSubmitButton);
    email.addEventListener("keyup", disableSubmitButton);
    password.addEventListener("keyup", disableSubmitButton);
    getUserDetails();
    disableSubmitButton();
}

btn.addEventListener('click', (event) => {
    const name = document.getElementById("name");
    event.preventDefault();
    const name1 = name.value;
    const number1 = number.value;
    const password1 = password.value;
    const email1 = email.value;


    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exist = users.length && JSON.parse(localStorage.getItem("users")).some(data => data.email.toLowerCase() == email1.toLowerCase());

    if (!exist) {
        addUser(
            name1,
            number1,
            email1,
            password1);

        // const index = users.findIndex(data => data.email.toLowerCase() == email1.toLowerCase());
        // console.log("If ==>")
        // console.log(index);
        // // location.href = ("./new_page.html?" + index);
    }
    else {
        alert("User alredy exist !!!");
        // location.href = "./new_page.html";
        const index = users.findIndex(data => data.email.toLowerCase() == email1.toLowerCase() );
        // && data.number.toLowerCase() == number1.toLowerCase() && data.name.toLowerCase() == name1.toLowerCase() && data.password.toLowerCase() == password1.toLowerCase()
        console.log("Else ==>")
        console.log(index);
        location.href = ("./new_page.html?" + index);
    }
    // window.location.href = "./new_page.html"
}
);

const users = JSON.parse(localStorage.getItem("users")) || [];
const addUser = (name, number, email, password) => {
    const user = {
        name,
        number,
        email,
        password
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert("User Register Sucessfully")
}

submit.addEventListener('click', (event) => {
    event.preventDefault();
    const male1 = male.value;
    const female1 = female.value;
    const country1 = country.value;
    const state1 = state.value;
    const city1 = city.value;
    addUser2(
        male1,
        female1,
        country1,
        state1,
        city1
    );
});

// const users1 = JSON.parse(localStorage.getItem("users")) || [];
// const addUser2 = (male, female, country, state, city) => {
//     const user2 = {
//         male,
//         female,
//         country,
//         state,
//         city
//     };
//     users1.push(user2);
//     localStorage.setItem('users', JSON.stringify(users1));
// }

function disableSubmitButton() {
    const name = document.getElementById("name");
    if (name.value.length > 0 && password.value.length > 0 && email.value.length > 0 && number.value.length > 0) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function getUserDetails() {
    const name = document.getElementById("name");
    const number = document.getElementById("number");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const userDetails = JSON.parse(localStorage.getItem('users'));

    if (userDetails) {
        for (let i = 0; i < userDetails.length; i++) {
            if (userDetails[i].name && userDetails[i].number && userDetails[i].email && userDetails[i].password) {
                name.value = userDetails[i].hasOwnProperty("name") ? userDetails[i].name : "";
                number.value = userDetails[i].hasOwnProperty("number") ? userDetails[i].number : "";
                email.value = userDetails[i].hasOwnProperty("email") ? userDetails[i].email : "";
                password.value = userDetails[i].hasOwnProperty("password") ? userDetails[i].password : "";
            }
        }
    }

}
