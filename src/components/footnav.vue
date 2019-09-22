<template>
  <div>
    <nav class="nav">
      <div class="item" @click="$router.push('/')">
        <img src="../assets/images/shouye.png" alt />
        <p class="nav-font">首页</p>
      </div>
      <div class="item" @click="$router.push('/find')">
        <img src="../assets/images/faxian.png" alt />
        <p class="nav-font">发现</p>
      </div>
      <div class="item" @click="$router.push('/tesk')">
        <img src="../assets/images/renwu.png" alt />
        <p class="nav-font">任务</p>
      </div>
      <div class="item" @click="$router.push('/personal')">
        <img src="../assets/images/admin.png" alt />
        <p class="nav-font">我的</p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 750px;
  height: 100px;
  display: flex;
  background-color: #01092e;
  margin: 0;
}
.item {
  width: 25%;
  height: 100px;
  padding: 20px 60px;
}
.item img {
  width: 35px;
  height: 35px;
  margin-left: 10px;
}
.nav-font {
  font-size: 20px;
  width: 50px;
  height: 24px;
  margin: 0px;
  text-align: center;
  color: #fff;
}
</style>
