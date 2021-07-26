<template>
  <div class="my_restaurant_infos">
    <div class="restaurant_description">
      <div class="information_icon">
        <i class="las la-info-circle"></i>
      </div>
      <div class="description_info">{{ description }}</div>
    </div>
    
    <div class="location_and_more">
      <div class="restaurant_location">
        <div class="location_icon">
          <i class="las la-map-marker-alt"></i>
        </div>
        <div class="location_info">{{ location }}</div>
      </div>
      <div class="more_button" @click="view_map_and_hours">More</div>
    </div>
    
    <div class="overlay_section" v-if="show_map_and_hours" 
      @click.self="close_map_and_hours">
      <div class="pop_up_modal">
        <div class="map_and_close_button">
          <div class="close_button" @click="close_map_and_hours">
            <span class="material-icons">close</span>
          </div>
          <div class="restaurant_map">
            <iframe :src="map" allowfullscreen="" loading="lazy"></iframe>
          </div>

          <img src="../../assets_others/loading.gif" alt="Loading gif">
        </div>

        <div class="location_and_hours">
          <div class="title">Location and hours</div>

          <div class="restaurant_location">
            <div class="location_icon">
              <i class="las la-map-marker-alt"></i>
            </div>
            <div class="location_info">{{ location }}</div>
          </div>

          <div class="restaurant_hours">
            <div class="hours_icon">
              <i class="las la-clock"></i>
            </div>

            <div class="all_hours_wrapper">
              <div class="hours_info" v-for="hour in hours" :key="hour.date">
                <div class="date">{{ hour.date }}</div>
                <div class="hours">{{ hour.open }} - {{ hour.close }}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    location: String,
    hours: Array,
    map: String
  },
  data() {
    return {
      show_map_and_hours: false
    }
  },
  methods: {
    view_map_and_hours() {
      this.show_map_and_hours = true;
    },
    close_map_and_hours() {
      this.show_map_and_hours = false;
    }
  }
}
</script>

<style scoped>
.my_restaurant_infos {
    padding: 20px 40px;
    color: var(--navy);
}

.restaurant_description, .restaurant_location {
    display: flex;
    align-items: center;
}

.restaurant_description {
    margin-bottom: 10px;
}

.information_icon, .location_icon, .hours_icon {
    font-size: 25px;
    color: var(--red);
}

.description_info, .location_info {
    margin-left: 10px;
}

.location_and_more {
    display: flex;
    align-items: center;
}

.more_button {
    margin-left: 10px;
    border: 1px solid var(--gray-dark);
    border-radius: 25px;
    padding: 5px 16px;
    font-size: 15px;
}

.more_button:hover {
    cursor: pointer;
    border: 1px solid var(--red);
    background-color: var(--red);
    color: white;
}

.overlay_section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
}

.pop_up_modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
}

.map_and_close_button {
    position: relative;
}

.close_button {
    position: absolute;
    top: 12%;
    left: 5%;
    border: 1px solid var(--navy);
    border-radius: 50%;
    background-color: white;
    color: var(--navy);
    padding: 7px;
    display: flex;
}

.close_button > span {
    font-size: 30px;
}

.close_button:hover {
    cursor: pointer;
    background-color: var(--red);
    color: white;
    border: 1px solid var(--red);
}

iframe, .map_and_close_button > img{
    width: 700px;
    height: 400px; 
    border:0;
    border-bottom: 2px solid var(--navy);
}

.map_and_close_button > img {
    position: absolute;
    top: 0;
    left: 0;
    animation-name: disappears_after_2s;
    animation-duration: 5s;
    animation-delay: 0;
    animation-fill-mode: forwards;
}

@keyframes disappears_after_2s {
    0% {
      opacity: 1;
      z-index: 1;
    }
    100% {
      opacity: 0;
      z-index: -1;
    }
}

.location_and_hours {
    padding: 20px 40px 10px;
}

.title {
    font-size: 30px;
    font-family: 'Roboto Slab';
    margin-bottom: 20px;
}

.restaurant_hours {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
}

.hours_info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
}

.date {
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 5px;
    margin-top: 3px;
}
</style>