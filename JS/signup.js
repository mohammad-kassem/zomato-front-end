let signup = document.getElementById("signup");
signup.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("hello");
  let user_email = document.getElementById("user-email");
  let user_password = document.getElementById("user-password");
  let first_name = document.getElementById("first-name");
  let last_name = document.getElementById("last-name");
  let data = new FormData();
  data.append("email", user_email.value);
  data.append("password", user_password.value);
  data.append("first_name", first_name.value);
  data.append("last_name", last_name.value);
  console.log(user_email.value);
  axios({
    method: "post",
    url: "http://localhost/Project3-Zomato%20-Back%20-%20End/zomato-back-end/APIs/signup.php",
    data: data,
  }).then(function (response) {
    if (response.data.response == "User added successfully") {
      window.location.href = "./login.html";
      console.log("added");
      
    } else if (response.data.response == "User already exists") {
        console.log("not added");
      
    }
});
})