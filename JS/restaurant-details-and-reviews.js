let url_string = window.location.href;
let url = new URL(url_string);
let user_id = url.searchParams.get("user_id");
if (!user_id) window.location.href = "./login-and-singup.html";
let restaurant_id = url.searchParams.get("restaurant_id");


window.onload = function () {
  let reviews_section = document.getElementById("reviews-section");

  // for the restaurant details display
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

  // for the restaurant reviews display
  axios({
    method: "get",
    url: `http://localhost/Project3-Zomato%20-Back%20-%20End/zomato-back-end/APIs/display-reviews.php?user_id=${user_id}&restaurant_id=${restaurant_id}`,
  }).then(function (response) {
    let reviews = response.data;
    console.log(reviews);
    for (let i = 0; i < reviews.length; i++) {
      let review_item = document.createElement("div");
      review_item.classList.add("review");
      review_item.innerHTML = `<div class="review-header">
              <div class="user">
                  <img src="../assets/user_pro.jpg" alyt="">
                  <h1> ${reviews[i].full_name} </h1>
              </div>
              <div class="date">
                  <p>${reviews[i].date_posted}</p>
              </div>
          </div>
          <div class="review-content">
              <div class="rating rating-small">
                  <i class="fa-solid fa-star"></i> ${reviews[i].rating}
              </div>
              <h2>Highly recommended!</h2>
              <p> ${reviews[i].content} </p>
          </div>`;
      reviews_section.appendChild(review_item);
    }
  });
};

// submits the review to teh database hides the review popup and resets its values
let add_review_button = document.getElementById("add-review");
add_review_button.addEventListener("click", function () {
  let user_rating = document.getElementById("user-rating");
  let user_review = document.getElementById("user-review");
  let data = new FormData();
  data.append("user_id", user_id);
  data.append("restaurant_id", restaurant_id);
  data.append("rating", user_rating.value);
  data.append("content", user_review.value);
  axios({
    method: "post",
    url: "http://localhost/Project3-Zomato%20-Back%20-%20End/zomato-back-end/APIs/review-restaurant.php",
    data: data,
  }).then(function (response) {
    console.log(response.data);
    if (response.data.response == "Review added successfully") {
      let review_popup = document.getElementById("review-popup");
      review_popup.classList.add("hide");
      user_rating.value = " ";
      user_review.value = " ";
    }
  });
});

add_review = document.getElementById("add-review");
add_review.addEventListener("click", function(){
  review_popup = document.getElementById("review-popup");
  review_popup.Target.classList.toggle("hide");
})
