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
      <div class="more_button">More</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    location: String
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

.information_icon, .location_icon {
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
</style>