<template>
  <div>
    <input class="form-control" placeholder="Search cities ..." @keyup.enter="search" v-model="query">
    <div class="alert alert-danger" v-if="error" style="margin-top: 10px;">
      {{error}}
    </div>
    <br>
    <div class="row">
    <div class="col col-lg-4 city_block"  v-for="n in weathers"  :key="n.index">
    <div class="card">
      <div class="card-body">
        <img :src="n.current.weather_icons[0]">
        <div class="h">
        <h5 class="card-title">{{n.location.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ n.current.weather_descriptions[0] }}</h6>
        </div>
        <div class="clearfix"></div>
        <span class="temp">{{n.current.temperature}}°</span>
        <br>
        <router-link :to="'/city/'+n.location.name" class="btn btn-primary" style="margin-right: 5px;">More ...</router-link>
        <span class="btn btn-dark" v-on:click="removeFromCities(n)">Remove</span>
<!--        <a href="#" class="card-link">Another link</a>-->
      </div>
    </div>
    </div>
    </div>
  </div>
</template>
<style>
.form-row {
  display: block;
  margin-bottom: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.city_block {
  margin-bottom: 30px;
}
.city_block .card {
  position: relative;
}
.city_block .card img {
  float: left;
  margin-right: 10px;
  width: 50px;
  border-radius: 4px;
}
.city_block .h {
  float: left;
  display: block;
}
.city_block .temp {
  position: absolute;
  right: 16px;
  top: 24px;
  font-size: 25px;
  color: #384048;
  font-weight: 500;
}
</style>
<script>
import axios from 'axios'
export default {
  name:'HelloWorld',
  data:function() {
    return {
      error:'',
      query:'',
      // cities:['New York','Detroit','Tehran','Eindhoven','Tabriz','Beijing'],
      cities:['Tehran'],
      apiBase:'http://api.weatherstack.com/current?access_key=5004a4915f49dec86058cdf84608fad0',
      weathers : [],

    }
  },
  computed:{
   name:function () { return 'Dana'+' '+'Mirafzal'}
  },
  created:function () {
    if(localStorage.cities) {
      this.cities=localStorage.cities.split(',');
    }
    let apiB=this.apiBase
    let ws=[];
    this.cities.forEach(function (city) {
      axios.get(apiB+'&query='+city)
          .then(function (response) {
            ws.push(response.data)
            // console.log(response.data.current);
          })
    });
    this.weathers=ws;
    console.log(ws)
  },
  methods:{
    'search':function () {
      let apiB=this.apiBase
      let pass = this
      let q = this.query
      axios.get(apiB+'&query='+this.query)
          .then(function (response) {
            if('error' in response.data&&response.data.error.code) {
              pass.error='Not found !';
            }
            else {
              if(response.data.request.type=="City") {
                pass.error=null;
                pass.weathers.push(response.data)
                pass.query='';
                pass.cities.push(q);
                localStorage.cities=pass.cities;
              }
              if(response.data.request.type!=="City") {
                pass.error="Please search a city ..."
              }
            }

          })

    },
    'removeFromCities':function (n) {
      console.log(n);
      console.log(this.weathers)
      let name=n.location.name;
      this.weathers.pop(n)
      this.cities.pop(name);
      localStorage.cities=this.cities;
    }
  }
}
</script>