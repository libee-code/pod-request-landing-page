"use strict";

// valid email

const button = document.querySelector(".btn"); // button element
const email = document.querySelector("#email"); // email input element
const errorMsg = document.querySelector(".email-error"); // email error empty div element

// below regex courtesy of https://www.emailregex.com/
let regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

button.addEventListener("click", function () {
  const emailValue = email.value;
  console.log(emailValue);

  if (emailValue.match(regex)) {
    // The email is valid, no error messages should be shown
    errorMsg.style.visibility = "hidden";
  } else if (emailValue == "") {
    // The Email address field is empty should show "Oops! Please add your email"
    errorMsg.innerHTML = "Oops! Please enter a valid email address";
    errorMsg.style.visibility = "visible";
  } else {
    // The email is not formatted correctly should show "Oops! Please check your email"
    errorMsg.innerHTML = "Oops! Please enter a valid email address";
    errorMsg.style.visibility = "visible";
  }
});
