window.onload = function () {
  var restaurant_display = document.getElementById("restaurants-display");

  axios({
    method: "post",
    url: "http://localhost/zomato-back-end/APIs/admin-display-restaurants.php",
  }).then(function (response) {
    var restaurants = response.data;
    for (var i = 0; i < restaurants.length; i++) {
      var category_id;
      if (restaurants[i]["category_id"] == 1) {
        category_id = "french cuisine";
      }
      if (restaurants[i]["category_id"] == 2) {
        category_id = "italian cuisine";
      }
      if (restaurants[i]["category_id"] == 3) {
        category_id = "american cuisine";
      }
      // make it a drop down menu bl profile

      console.log(i);
      const card = document.createElement("tr");
      card.innerHTML =
        ` 
        <td><img class="img-sizing" src="data:image/png;base64,${restaurants[i]["image"]}"></td>
      <td>${restaurants[i]["name"]}</td>
      <td>${restaurants[i]["location"]}</td>
      <td>${restaurants[i]["average_cost"]}</td>
      <td>${restaurants[i]["description"]}</td>
      <td>${category_id}</td>
      <td>${restaurants[i]["date_joined"]}</td>`;

      restaurant_display.appendChild(card);
    }
  });
};
