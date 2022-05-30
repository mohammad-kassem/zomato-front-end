window.onload = function () {
  var restaurant_display = document.getElementById("restaurants-display");

  axios({
    method: 'post',
    url: 'http://localhost/zomato-back-end/APIs/admin-display-restaurants.php',
  }).then(function (response) {

    var restaurants = response.data
    for (var i = 0; i < restaurants.length; i++) {

      var category_id;
      if (restaurants[i]["category_id"] == 1) {
        category_id = "french cuisine"
      }
      if (restaurants[i]["category_id"] == 2) {
        category_id = "fast food"
      }
      if (restaurants[i]["category_id"] == 3) {
        category_id = "italian"
      }
      // make it a drop down menu bl profile

      console.log(i);
      const card = document.createElement("tr");
      card.innerHTML =
        ` <td><img src="image/user.png" class="tab-img"></td>
      <td>${restaurants[i]["name"]}</td>
      <td>${restaurants[i]["location"]}</td>
      <td>${restaurants[i]["average cost"]}</td>
      <td>${restaurants[i]["description"]}</td>
      <td>${category_id}</td>
      <td>${restaurants[i]["date_joined"]}</td>`

        // <td><img src="image/user.png" class="tab-img"></td>
      restaurant_display.appendChild(card);
    }

  })
}