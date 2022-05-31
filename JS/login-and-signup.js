localStorage.clear();

let login = document.getElementById("login");
login.addEventListener("submit", function (event) {
  event.preventDefault();
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
    if (response.data.response == "User Logged in") {
      window.location.href = "../index.html?user_id=" + response.data.user_id;
      
    } else if (response.data.response == "Admin Logged in") {
      window.location.href =
        "./adminRestaurants.html?user_id=" + response.data.user_id;
      
    }
    localStorage.setItem("user_id", response.data.user_id);
  });
});
