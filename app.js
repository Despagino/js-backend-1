let baseURL = 'http://localhost:4000/api/users'

document.getElementById("getFriendsButton").onclick = function () {
        axios
          .get(baseURL)
          .then(function (response) {
            const data = response.data;
            document.getElementById("people").innerHTML = data
              .map(function (person) {
                return '<li class="row">' + person;
              })
              .join("");
          })
          .catch(function (err) {
            document.getElementById("people").innerHTML =
              '<li class="text-danger">' + err.message + "</li>";
          });
      };

      let nba = document.getElementById("nbaPlayer")

      nba.addEventListener("click", () => {
        axios.get("http://localhost:4000/api/players") 
        .then(res => {
          const data = res.data
          document.getElementById("nba").innerHTML = data
              .map(function (person) {
                return '<li class="row">' + person;
              })
              .join("");
          })
          .catch(function (err) {
            document.getElementById("people").innerHTML =
              '<li class="text-danger">' + err.message + "</li>";
          })
        })