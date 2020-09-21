<template>
  <div id="cityPage">
    <div v-if="!loading">
      <div class="row">
      <div class="col col-lg-8">
      <img :src="data.current.weather_icons[0]" class="icon">
      <div class="info">
        <h3>{{ data.location.name }}</h3>
        <h4>{{ data.location.country }}</h4>
      </div>
      </div>
      <div class="col col-lg-4">
        <span class="cityTemp">{{data.current.temperature}}°</span>
      </div>
      </div>
      <br>
      <div class="row">
        <div class="col col-lg-12">
          <ul class="list-group details_list">
            <li class="list-group-item">{{data.location.name}} , {{data.location.country}}</li>
            <li class="list-group-item">
            <span v-if="data.current.is_day=='yes'">Day</span>
            <span v-else>Night</span>
            </li>
            <li class="list-group-item">Wind speed : {{data.current.wind_speed}} (km/h)</li>
            <li class="list-group-item">Wind degree : {{data.current.wind_degree}}</li>
            <li class="list-group-item">Observation time : {{data.current.observation_time}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="loading">
      <h4>Loading ...</h4>
    </div>
  </div>
</template>
<script>
import Api from '@/api'
import axios from 'axios'

export default {
  name: 'cityPage',
  data: () => {
    return {
      name: '',
      loading: true,
      data: null,

    }
  },
  created: function () {
    this.name = this.$route.params.city
    console.log(Api.baseUrl + '&query=' + this.name);
    axios.get(Api.baseUrl + '&query=' + this.name).then(response => {
      this.data = response.data;
      this.loading = false
    });


  }
}
</script>
<style>
#cityPage h3 {
  color: #0c6ff8;
}

#cityPage h4 {
  color: #486270;
}
#cityPage .info h4 {
  font-size: 16px;
}
#cityPage .info {
  float: left;
}
#cityPage .icon {
  float: left;
  margin-right: 20px;
  width: 64px;
  border-radius: 4px;
}
.details_list li {
  border:none;
  border-bottom:1px solid #e6e6e6;
}
.cityTemp {
  
    display: block;
    font-size: 32px;
    color: #0c6ff8;
    float: right;
    padding-top: 4px;
}
</style>