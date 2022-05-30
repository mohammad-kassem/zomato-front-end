window.onload = function () {

  let restaurant_name = document.getElementById('restaurant-name');
  let location = document.getElementById('location');
  let average_cost = document.getElementById('average-cost');
  let description = document.getElementById('description');
  let category = document.getElementById('category');
  let profile = document.getElementById('image-profile');
  let logo = document.getElementById('logo-profile');

  document.getElementById('submit-btn').addEventListener("click", submitFct);

  function submitFct() {
    if (restaurant_name.value == "" || location.value == "" || average_cost.value == "" || description.value == ""
      || profile.files.length == 0 || logo.files.length == 0) {
      // the images are empty arrays, its not a string 
      alert("Fill all elements please");
    }
    else {


      // didnt work, gave me a fake path (?)
      var base64String = "";
      const selectedFile = profile.files[0];
      var reader = new FileReader();


      reader.onload = function () {
        base64String = reader.result.replace("data:", "")
          .replace(/^.+,/, "");

        console.log(base64String);


        let mydata = new FormData();
        mydata.append("name", restaurant_name.value);
        mydata.append("location", location.value);
        mydata.append("average_cost", average_cost.value);
        mydata.append("description", description.value);
        var category_id = category.options[category.selectedIndex].value;
        mydata.append("category_id", category_id);
        mydata.append("image", base64String);
        mydata.append("logo", logo.value);

        
        axios({
          method: 'post',
          url: 'http://localhost/zomato-back-end/APIs/admin-upload.php',
          data: mydata,
        })
          .then(function (response) {
            console.log(response);
          })


      }
      reader.readAsDataURL(selectedFile);
    }
  }
}