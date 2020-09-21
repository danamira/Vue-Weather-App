<template>
<div>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/Login">Login</router-link>
    <router-link to="/SignUp">SignUp</router-link>
    <router-link to="/FAQ">FAQ</router-link>
  </div>
</div>
</template>
<script>
export default {
  name:'Navbar'
}
</script>
<style>
.nav {
  display: block;
  cursor: pointer;
  transition: 0.2s;
  color: #040d30;
  line-height: 40px;
  min-height: 40px;
  padding: 0;
  margin: 10px 0;
  border-radius: 4px;
}
.nav a {
  display: block;
  line-height: 40px;
  font-size: 15px;
  float: left;
  margin-right: 20px;
}
</style>