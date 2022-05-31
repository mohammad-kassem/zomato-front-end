
window.onload = function () {
  user_id = localStorage.getItem("user_id");
  if (!user_id) window.location.href = "./pages/login.html";

  axios({
    method: "get",
    url:
      "http://localhost/Project3-Zomato%20-Back%20-%20End/zomato-back-end/APIs/display-restaurants.php?user_id=" +
      user_id,
  }).then(function (response) {
    let restaurant_display = document.getElementById("restaurants-display");
    // every row contains 3 retsaurant boxes so at i=0,3,6..... we create a new row
    let restaurants = response.data;
    console.log(restaurants);
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
      restaurant_box.innerHTML = `<img class="img-sizing" src="data:image/png;base64,${restaurants[i].image} alt="">
        <div class="restaurant-heading indent">
            <h1> ${restaurants[i].restaurant_name} </h1>
            <div class="rating">
                <i class="fa-solid fa-star"></i>  ${restaurants[i].rating}
            </div>
        </div>
        <p class="category"> ${restaurants[i].category_name}</p>
        <p class="location"> ${restaurants[i].location}</p>`;

      //and always append the restaurant boxes to the most recent row
      row.appendChild(restaurant_box);

      // this takes you to the restaurant you clicked on with the restaurant id in the url
      restaurant_box.addEventListener("click", function () {
        window.location.href =
          "./pages/restaurant-reviews.html?user_id=" + user_id + "&restaurant_id=" + restaurant_box.id;
      });
    }
  });
};
