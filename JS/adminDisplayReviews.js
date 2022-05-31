window.onload = function () {
  var review_display = document.getElementById("reviews-display");

  axios({
    method: "post",
    url: "http://localhost/zomato-back-end/APIs/admin-display-reviews.php",
  }).then(function (response) {
    var reviews = response.data;
    for (var i = 0; i < reviews.length; i++) {
      var status;
      if (reviews[i]["status"] == 1) {
        status = "pending";
      }
      if (reviews[i]["status"] == 2) {
        status = "accept";
      }
      if (reviews[i]["status"] == 3) {
        status = "reject";
      }

      console.log(i);
      const card = document.createElement("tr");
      card.id = reviews[i].review_id;
      card.innerHTML = `<td>${reviews[i]["name"]}</td>
      <td>${reviews[i]["first_name"]}</td>
      <td>${reviews[i]["last_name"]}</td>
      <td>${reviews[i]["rating"]}</td>
      <td>${reviews[i]["content"]}</td>
      <td>${reviews[i]["date_posted"]}</td>
      <td>${status}</td>
      <td><div class="review-select">
      <select>
        <option value="1">Pending</option>
        <option value="2">Accept</option>
        <option value="3">Reject</option>
      </select></div></td>
      `;

      review_display.appendChild(card);
    }
  });
};
