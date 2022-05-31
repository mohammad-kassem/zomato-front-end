window.onload = function () {
  let restaurant_display = document.getElementById("restaurants-display");
  let url_string = window.location.href;
  let url = new URL(url_string);
  let user_id = url.searchParams.get("user_id");
<<<<<<< HEAD
  // if (!user_id) window.location.href = "./pages/login-and-singup.html";
=======
  if (!user_id) window.location.href = "./pages/login.html";
>>>>>>> 35b10784f676c9489a15984fcd8389bf3c8c7deb

  axios({
    method: "get",
    url:
      "http://localhost/Project3-Zomato%20-Back%20-%20End/zomato-back-end/APIs/display-restaurants.php?user_id=" +
      user_id,
  }).then(function (response) {
    // every row contains 3 retsaurant boxes so at i=0,3,6..... we create a new row
    let restaurants = response.data;
    for (let i = 0; i < restaurants.length; i++) {
      if (i % 3 === 0) {
        row = document.createElement("div");
        row.classList.add("restaurants-row");
        restaurant_display.appendChild(row);
      }
      const restaurant_box = document.createElement("div");
      restaurant_box.classList.add("restaurant-box");
      restaurant_box.id = restaurants[i].restaurant_id;
      restaurant_box.href =
        "./pages/restaurant-reviews.html?restaurant_id=" + restaurant_box.id;
      restaurant_box.innerHTML = `<img src="./assets/mcdonalds.jpg" alt="">
        <div class="restaurant-heading indent">
            <h1> ${restaurants[i].restaurant_name} </h1>
            <div class="rating">
                <i class="fa-solid fa-star"></i>  ${restaurants[i].restaurant_rating}
            </div>
        </div>
        <p class="category"> ${restaurants[i].category_name}</p>
        <p class="location"> ${restaurants[i].location}</p>`;

      //and always append the restaurant boxes to the most recent row
      row.appendChild(restaurant_box);
      restaurant_box.addEventListener("click", function () {
        window.location.href =
          "./pages/restaurant-reviews.html?user_id=" + user_id + "&restaurant_id=" + restaurant_box.id;
      });
    }
  });
};
