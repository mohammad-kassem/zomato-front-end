let login_button = document.getElementById("login-button");
login_button.addEventListener("click", function () {
  console.log("hello");

  let user_email = document.getElementById("user-email");
  let user_password = document.getElementById("user-password");
  let data = new FormData();
  data.append("email", user_email.value);
  data.append("password", user_password.value);
  axios({
    method: "post",
    url: "http://localhost/Project3-Zomato%20-Back%20-%20End/zomato-back-end/APIs/login.php",
    data: data,
  }).then(function (response) {
    if (response.data.response == "Logged in") {
      window.location.replace("../index.html?" + response.data[1]);
    }
  });
});
