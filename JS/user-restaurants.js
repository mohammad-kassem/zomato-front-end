window.onload = function () {
  let restaurant_display = document.getElementById("restaurants-display");
  let url_string = window.location.href;
  let url = new URL(url_string);
  let user_id = url.searchParams.get("user_id");
  console.log(user_id);

  axios({
    method: "post",
    url:
      "http://localhost/Project3-Zomato%20-Back%20-%20End/zomato-back-end/APIs/display-restaurants.php?user_id=" +
      user_id,
  }).then(function (response) {
    let restaurants = response.data;
    console.log(restaurants);
    let row = document.createElement("div");
    row.classList.add("restaurants-row");
    restaurant_display.appendChild(row);

    for (let i = 0; i < restaurants.length; i++) {
      if (i % 3 === 0) {
        row = document.createElement("div");
        row.classList.add("restaurants-row");
        restaurant_display.appendChild(row);
      }
      const restaurant_box = document.createElement("div");
      restaurant_box.classList.add("restaurant-box");
      restaurant_box.innerHTML = `<img src="./assets/mcdonalds.jpg" alt="">
        <div class="restaurant-heading indent">
            <h1> ${restaurants[i].restaurant_name} </h1>
            <div class="rating">
                <i class="fa-solid fa-star"></i>  ${restaurants[i].restaurant_rating}
            </div>
        </div>
        <p class="category"> ${restaurants[i].category_name}</p>
        <p class="location"> ${restaurants[i].location}</p>`;
      row.appendChild(restaurant_box);
    }
  });
};
