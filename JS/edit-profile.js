// defining the input variables
user_id = localStorage.getItem("user_id");
if (!user_id) window.location.href = "./pages/login.html";
let full_name = document.getElementById("full-name");
let first_name = document.getElementById("first-name");
let last_name = document.getElementById("last-name");
let dob = document.getElementById("dob");
let gender = document.getElementById("gender");
let user_location = document.getElementById("location");
let old_password = document.getElementById("old-password");
let new_password = document.getElementById("new-password");
let confirm_password = document.getElementById("confirm-password");


// gets the values of the user's profile from the database and displays them
window.onload = function () {
  axios({
    method: "get",
    url: `http://localhost/Project3-Zomato%20-Back%20-%20End/zomato-back-end/APIs/get-profile-details.php?user_id=${user_id}`,
  }).then(function (response) {
    profile_details = response.data;
    full_name.innerText = profile_details.full_name;
    first_name.value = profile_details.first_name;
    last_name.value = profile_details.last_name;
    dob.value = profile_details.dob;
    if (profile_details.gender) gender.value = profile_details.gender;
    user_location.value = profile_details.user_location;
  });
};

// applies the changes by the user to the database
let apply_changes = document.getElementById("apply-changes");
apply_changes.addEventListener("click", function () {
  let data = new FormData();
  data.append("user_id", user_id);
  data.append("first_name", first_name.value);
  data.append("last_name", last_name.value);
  data.append("dob", dob.value);
  data.append("gender", gender.value);
  data.append("location", user_location.value);
  data.append("old_password", old_password.value);
  data.append("new_password", new_password.value);
  data.append("confirm_password", confirm_password.value);
  axios({
    method: "post",
    url: "http://localhost/Project3-Zomato%20-Back%20-%20End/zomato-back-end/APIs/edit-profile.php",
    data: data,
  }).then(function (response) {
    console.log(response.data);
    if (response.data.response === "Password update successfully")
      location.reload();
  });
});

// cancels the changes and takes the user back to the display restaurants page
let cancel_changes = document.getElementById("cancel-changes");
cancel_changes.addEventListener("click", function () {
  user_id = localStorage.getItem("user_id");
  location.href = "../index.html?user_id=" + user_id;
});
