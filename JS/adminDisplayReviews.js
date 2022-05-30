window.onload = function () {
  var review_display = document.getElementById("reviews-display");

  axios({
    method: 'post',
    url: 'http://localhost/zomato-back-end/APIs/admin-display-reviews.php',
  }).then(function (response) {

    var reviews = response.data
    for (var i = 0; i < reviews.length; i++) {

      var status;
      if (reviews[i]["status"] == 1) {
        status = "accept"
      }
      if (reviews[i]["status"] == 2) {
        status = "reject"
      }

      console.log(i);
      const card = document.createElement("tr");
      card.innerHTML =
        `<td>${reviews[i]["name"]}</td>
      <td>${reviews[i]["first_name"]}</td>
      <td>${reviews[i]["last_name"]}</td>
      <td>${reviews[i]["rating"]}</td>
      <td>${reviews[i]["content"]}</td>
      <td>${reviews[i]["date_posted"]}</td>
      <td>${status}</td>`


      review_display.appendChild(card);
    }

  })
}