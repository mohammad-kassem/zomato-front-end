window.onload = function () {
  var user_display = document.getElementById("users-display");

  axios({
    method: 'post',
    url: 'http://localhost/zomato-back-end/APIs/admin-display-users.php',
  }).then(function (response) {

    var users = response.data
    for (var i = 0; i < users.length; i++) {

      var gender;
      if (users[i]["gender"] == 1) {
        gender = "male"
      }
      if (users[i]["gender"] == 2) {
        gender = "female"
      }
      if (users[i]["gender"] == 3) {
        gender = "other"
      }
      // make it a drop down menu bl profile

      console.log(i);
      const card = document.createElement("tr");
      card.innerHTML = 
      `<td><img src="image/user.png" class="tab-img"></td>
      <td>${users[i]["first_name"]}</td>
      <td>${users[i]["last_name"]}</td>
      <td>${users[i]["email"]}</td>
      <td>${users[i]["dob"]}</td>
      <td>${gender}</td>
      <td>${users[i]["location"]}</td>
      <td>${users[i]["date_joined"]}</td>`

      // card.innerHTML = `<td><img src="image/user.png" class="tab-img">${users[i]["first_name"]}</td>
      // <td>12/2/2022</td>
      // <td>${gender}</td>`

      user_display.appendChild(card);
    }

    // <tr>
    //   <td><img src="image/user.png" class="tab-img">User Name</td>
    //   <td>12/2/2022</td>
    //   <td>Active</td>
    // </tr>

  })
}