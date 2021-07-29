var url = "https://campus-eats.herokuapp.com";

var app = new Vue({
  el: "#app",
  data: {
    Restaurants: [],
    categories: [],

    // for a new restaurant
    new_res_path: "",
    new_res_name: "",
    new_res_logo: "",
    new_res_background_image: "",
    new_res_description: "",
    new_res_location: "",

    // for new hours
    new_hour_date: "",
    new_hour_open: "",
    new_hour_close: "",

    // for a new category
    new_cat_name: "",

    // for a new menu
    new_menu_name: "",
    new_menu_image_url: "",
    new_menu_description: "",
    new_menu_calories: "",
    new_menu_price: "",

    // for a new custom option
    new_custom_option_type: "",
    new_custom_option_name: "",
    new_custom_option_calories: "",
    new_custom_option_price: "",
    new_custom_option_selected: false,
  },
  created: function () {
    this.getRestaurantServer();
  },

  methods: {
    getRestaurantServer: function () {
      fetch(`${url}/feed`).then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          app.Restaurants = data;
        });
      });
    },

    deleteRestaurantServer: (restaurant_id) => {
      fetch(`${url}/restaurant/` + restaurant_id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(function () {
        app.getRestaurantServer();
      });
    },

    getSpecificRestaurant: function (restaurant_id) {
      fetch(`${url}/feed/` + restaurant_id).then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          app.categories = data;
        });
      });
    },

    newRestaurantServer: function () {
      var newRestaurantVar = {
        path: this.new_res_path,
        name: this.new_res_name,
        logo: this.new_res_logo,
        background_image: this.new_res_background_image,
        description: this.new_res_description,
        location: this.new_res_location,
      };
      fetch(`${url}/restaurant`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRestaurantVar),
      }).then(function (response) {
        console.log(newRestaurantVar);
        if (response.status === 400) {
          response.json().then(function (data) {
            alert(data.message);
          });
        } else if (response.status == 201) {
          app.new_res_path = "";
          app.new_res_name = "";
          app.new_res_logo = "";
          app.new_res_background_image = "";
          app.new_res_description = "";
          app.new_res_location = "";
          app.getRestaurantServer();
        }
      });
    },

    // getCategories: function(restaurant_id) {
    //   fetch(`${url}/category`)
    // }

    newCategory: function (restaurant_id) {
      console.log(restaurant_id);
      var newCategoryVar = {
        restaurant_id: restaurant_id,
        name: this.new_cat_name,
      };
      fetch(`${url}/category`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCategoryVar),
      }).then(function (response) {
        console.log(newCategoryVar);
        if (response.status === 400) {
          response.json().then(function (data) {
            alert(data.message);
          });
        } else if (response.status === 201) {
          app.getRestaurantServer();
          app.new_cat_name = "";
        }
      });
    },
  },
});
