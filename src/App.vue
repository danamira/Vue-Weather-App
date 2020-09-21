<template>
  <div class="container">
    <div class="head">
      <h2>Vue Weather App</h2>
      <navbar></navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Main/Nav'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
* {
  margin:0;
  padding: 0;
  font-family: "Roboto";
}
a {
  text-decoration: none;
}
.nav a {
  color: inherit !important;
}
.container {
  width: 1000px !important;
  margin:10px auto;
  padding-top: 20px;
  display: block;
}
.head {
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 10px;
}
.head h2 {
  font-size: 28px;
  color: #51657e;
}
</style>
