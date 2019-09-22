<template>
  <div class="hello">
   <div class="kuang"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kuang{
  width:150px;
  height:150px;
  background-color: red;
}
</style>
