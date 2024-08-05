
/* toggler*/
document.querySelector(".toggler").addEventListener("click", function () {
    document.querySelector(".nav-menu ul").classList.toggle("d-nav-menu")
});



// contact  form validation
let fullname = document.querySelector("#full_name");
let email = document.querySelector("#e_mail");
let sub = document.querySelector("#subject");


// All the error
let fullNameError = document.getElementById("full_name_error");
let emailError = document.getElementById("e_mail_error");
let SubError = document.getElementById("subject_error");


function ValidateForm() {
    let flag = 1;
    // fullname
    if (fullname.value == "") {
        fullNameError.innerHTML = "Full name is empty."
        flag = 0;
    }
    else if (fullname.value.length < 7) {
        fullNameError.innerHTML = "Full name must be at least 7 characters."
        flag = 0;
    }
    else {
        fullNameError.innerHTML = "";
        flag = 1;
    }

    // Email
    if (email.value.trim() === "") {
        emailError.innerHTML = "Email is Empty.";
        flag = 0;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailError.innerHTML = "Please enter a valid email address.";
        flag = 0;
    } else {
        emailError.innerHTML = "";
        flag = 1;
    }

    // Subject
    if (sub.value == "") {
        SubError.innerHTML = "Subject is empty.";
        flag = 0;
    }
    else if (sub.value.length < 10) {
        SubError.innerHTML = "Subject must be at least 10 characters.";
        flag = 0;
    }
    else {
        SubError.innerHTML = "";
        flag = 1;
    }

    if (flag) {
        return true;
    }
    else
        return false;
}
