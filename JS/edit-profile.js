let url_string = window.location.href;
let url = new URL(url_string);
let user_id = url.searchParams.get("user_id");
let full_name = document.getElementById("full-name");
let first_name = document.getElementById("first-name");
let last_name = document.getElementById("last-name");
let dob = document.getElementById("dob");
let gender = document.getElementById("gender");
let user_location = document.getElementById("location");
let old_password = document.getElementById("old-password");
let new_password = document.getElementById("new-password");
let confirm_password = document.getElementById("confirm-password");

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
