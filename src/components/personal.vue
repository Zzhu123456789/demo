<template>
  <div>
    <div class="cont">
      <ul class="infor">
        <li>
          <div class="left-infor">用户昵称</div>
          <div class="right-infor">{{infor.returnObject.userInfo.nickName}}</div>
        </li>
        <li>
          <div class="left-infor">钻石</div>
          <div class="right-infor">{{zuan}}</div>
        </li>
        <li>
          <div class="left-infor">健康力信息</div>
          <div class="right-infor">{{infor.returnObject.userInfo.power}}</div>
        </li>
      </ul>
    </div>
    <footnav></footnav>
  </div>
</template>

<script>
import footnav from "./footnav";
export default {
  data() {
    return {
      infor: {
        errorCode: "00",
        errorMessage: "请求成功",
        returnObject: {
          amount: "0.0004",
          userInfo: {
            id: "e94301fbc62343c8b90ac36591a60dac",
            nickName: "用户昵称",
            diamond: 12.2345,
            power: 2000
          }
        }
      },
      zuan: 0
    };
  },
  created() {
    if (this.infor.errorCode != "00") {
      alert(this.infor.errorMessage);
    } else {
    }
    var zuan = localStorage.getItem("zuan");
    if (zuan) {
      this.zuan = zuan;
    } else {
      this.zuan = this.infor.returnObject.userInfo.diamond;
    }
  },
  components: {
    footnav
  }
};
</script>

<style scoped>
.cont {
  width: 750px;
  height: 1334px;
  background-color: #040f42;
  overflow: hidden;
  padding-bottom: 130px;
  margin: 0;
}
.infor {
  width: 100%;
  list-style: none;
  padding: 0;
}
.infor li {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #fff;
}
.left-infor {
  float: left;
  width: 300px;
  height: 100px;
  font-size: 35px;
  line-height: 100px;
  color: #fff;
  text-indent: 30px;
}
.right-infor {
  float: right;
  width: 300px;
  height: 100px;
  font-size: 35px;
  line-height: 100px;
  color: #fff;
  text-align: center;
}
</style>