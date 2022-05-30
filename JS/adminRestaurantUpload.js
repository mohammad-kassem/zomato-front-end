window.onload = function () {

  let restaurant_name = document.getElementById('restaurant-name');
  let location = document.getElementById('location');
  let average_cost = document.getElementById('average-cost');
  let description = document.getElementById('description');
  let category = document.getElementById('category');
  // let date = document.getElementById('date-joined');
  let profile = document.getElementById('image-profile');
  let logo = document.getElementById('logo-profile');

  document.getElementById('submit-btn').addEventListener("click", submitFct);

  function submitFct() {
    let mydata = new FormData();
    mydata.append("name", restaurant_name.value);
    mydata.append("location", location.value);
    mydata.append("average_cost", average_cost.value);
    mydata.append("description", description.value);
    mydata.append("category_id", category.value);
    mydata.append("image", profile.value);
    mydata.append("logo", logo.value);
    // mydata.append("date_joined",date.value);

    axios({
      method: 'post',
      url: 'http://localhost/zomato-back-end/APIs/admin-upload.php',
      data: mydata,
    })
      .then(function (response) {
        console.log(response);
      })

  }
}