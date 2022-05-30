window.onload = function () {
  let reviews_section = document.getElementById("reviews-section");
  let url_string = window.location.href;
  let url = new URL(url_string);
  let user_id = url.searchParams.get("user_id");
  let restaurant_id = url.searchParams.get("restaurant_id");

  axios({
    method: "get",
    url: `http://localhost/Project3-Zomato%20-Back%20-%20End/zomato-back-end/APIs/retaurant-details.php?user_id=${user_id}&restaurant_id=${restaurant_id}`,
  }).then(function (response) {
    let details = response.data;
    let restaurant_details_content = document.createElement("div");
    restaurant_details_content.id = "restaurant-details";
    restaurant_details_content.innerHTML = `<div class="restaurant-images page-content">
      <div class="restaurant-image-box">
      <img src="../assets/mcdonalds.jpg" alt="">
      </div>
      <div class="restaurant-image-box">
          <img src="../assets/mcdonalds.jpg" alt="">
      </div>
      <div class="restaurant-image-box">
          <img src="../assets/mcdonalds.jpg" alt="">
      </div>
  </div>
  <div class="restaurant-details page-content">
      <div class="restaurant-details-box">
          <div class="restaurant-main">
              <div class="restaurant-main-details">
                  <div class="restaurant-logo">
                      <img src="../assets/mcdonalds.jpg" alt="">
                  </div>  
                  <div class="restaurant-headers">
                      <h1> ${details.restaurant_name} </h1>
                      <h2> ${details.category_name} </h2>
                      <h2> ${details.location} </h2>
                  </div>
              </div>
              <div class="rating">
                  <i class="fa-solid fa-star"></i> ${details.restaurant_rating} 
              </div>
          </div>
          <p> ${details.restaurant_description} </p>
          <h3> average cost</h3>
          <p>
              ${details.average_cost}$ for two people (appprox) 
          </p>
      </div>
        </div>`;
    restaurant_details_section = document.getElementById(
      "restaurant-details-section"
    );
    restaurant_details_section.appendChild(restaurant_details_content);
  });
};
