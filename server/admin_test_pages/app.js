var url = "https://campus-eats.herokuapp.com";

var app = new Vue({
  el: "#app",
  data: {
    Restaurants: [],
    postings: [],
  },
  created: function () {
    this.getRestaurantServer();
  },

  methods: {
    getRestaurantServer: function () {
      fetch(`${url}/feed/`).then(function (response) {
        response.json().then(function (data) {
          console.log(data);
        });
      });
    },
    getSpecificRestaurant: function (restaurant_id) {
      fetch(`${url}/feed/` + restaurant_id).then(function (response) {
        response.json().then(function (data) {
          console.log.data;
          app.postings = data;
        });
      });
    },
  },
});
