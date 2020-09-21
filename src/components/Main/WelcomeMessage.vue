<template>
  <transition name="fade">
    <div class="alert alert-success" role="alert">
    <p>Welcome to my Vue weather application .</p>
    </div>
  </transition>
</template>
<style>
.alert p {
  margin-bottom: 0 !important;
}
</style>
<script>
export default {
  name:'WelcomeMsg',
  data:function () {
    return {
      show:true
    }
  },
  props:['userName']
}
</script>