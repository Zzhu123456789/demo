<template>
  <div>
    <div class="cont">
      <div class="activity">
        <p class="acti-tit">钱包正式上线，活动火热进行中</p>
        <p class="acti-gengduo">更多></p>
      </div>
      <div class="acti-back">
        <img src="../assets/images/bg.png" alt class="acti-bg" />
        <div class="equity">
          <img src="../assets/images/icon_right.png" alt class="equity-image" />
          <div class="equity-text">汤钻权益</div>
        </div>
        <div
          :class="{zuan:true,zuang:d==index}"
          v-for="(item,index) in amount"
          :key="index"
          name="xiaoshi"
          @click="remo(index)"
          :style="{'left':posi[index].xChou+'rem','top':posi[index].yChou+'rem'}"
        >
          <div v-if="item!='false'">
            <img src="../assets/images/zuan.png" alt class="zuan-image" />
            <div class="zuan-text">{{item}}</div>
          </div>
        </div>
      </div>
      <div class="ge">
        <div class="watch">
          <div class="chakan">查看区块</div>
          <img src="../assets/images/img.png" alt class="photo" />
          <div class="txt">区块高度及资产</div>
        </div>
        <div class="watch">
          <div class="chakan">使用帮助</div>
          <img src="../assets/images/collection.png" alt class="photo" />
          <div class="txt">添加收藏领汤钻</div>
        </div>
      </div>
    </div>
    <footnav></footnav>
  </div>
</template>

<script>
import footnav from "./footnav";
export default {
  data() {
    return {
      posi: [],
      amount: [0.0004, 0.3232, 0.333, 0.5656, 0.3445],
      d: 100,
      zuan:12.2345
    };
  },
  methods: {
    remo(index) {
      this.d = index;
      var that = this;
      setTimeout(function() {
        that.zuan=(parseFloat(that.zuan)+parseFloat(that.amount[index])).toFixed(4);
        localStorage.setItem("zuan",that.zuan);
        that.amount.splice(index, 1, "false");
        localStorage.setItem("amount", that.amount); //设置缓存
        localStorage.setItem("posi", JSON.stringify(that.posi));
        
      }, 1000);
    }
  },
  created() {
    //判断是否有缓存
    var amount = localStorage.getItem("amount");
    // console.log(JSON.parse(localStorage.getItem('posi')));
    if (amount) {
      this.amount = amount.split(",");
      this.posi = JSON.parse(localStorage.getItem("posi"));
    } else {
      for (var i = 0; i < 10; i++) {
        //生成随机地址
        this.posi[i] = {
          xChou: parseInt(Math.random() * 570) / 75,
          yChou: parseInt(Math.random() * 800) / 75
        };
      }
    }
  },
  mounted() {
    var fz = 75;
    for (var i = 0; i < this.posi.length; i++) {
      for (var a = i; a < 9; a++) {
        if (
          //防止钻石重叠
          Math.abs(this.posi[a].xChou - this.posi[a + 1].xChou) < 80 / fz &&
          Math.abs(this.posi[a].yChou - this.posi[a + 1].yChou) < 100 / fz
        ) {
          if (this.posi[a].xChou > 500 / fz) {
            this.posi[a].yChou += 50 / fz;
          } else if (this.posi[a].yChou > 870 / fz) {
            this.posi[a].xChou += 50 / fz;
          } else {
            this.posi[a].yChou += 50 / fz;
          }
        }
      }
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
}
.activity {
  width: 690px;
  height: 60px;
  border-radius: 30px;
  background-color: #12205e;
  margin: 25px auto 0;
  font-size: 27px;
  line-height: 60px;
}
.acti-tit {
  margin: 0;
  float: left;
  width: 550px;
  height: 60px;
  color: #fff;
  text-indent: 60px;
  background: url("../assets/images/icon-acti.png") 25px center no-repeat;
  background-size: 27px;
}
.acti-gengduo {
  float: right;
  width: 90px;
  margin: 0;
  color: #4165b9;
}
.acti-back {
  width: 750px;
  height: 920px;
  position: relative;
}
.acti-bg {
  width: 100%;
  height: 100%;
}
.equity {
  position: absolute;
  width: 125px;
  height: 150px;
  top: 77px;
  right: 50px;
}
.equity-image {
  width: 120px;
  height: 120px;
}
.equity-text {
  width: 125px;
  height: 30px;
  text-align: center;
  font-size: 27px;
  color: #fff;
  line-height: 30px;
}
.zuan {
  position: absolute;

  width: 70px;
  height: 100px;
}
.zuang {
  opacity: 0;
  width: 0;
  height: 0;
  transition: all 2s;
}
.zuan-image {
  width: 70px;
  height: 70px;
}
.zuan-text {
  width: 70px;
  height: 20px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  line-height: 20px;
}
.ge {
  width: 10rem;
  height: 270px;
}
.watch {
  float: left;
  width: 200px;
  height: 220px;
  background-color: #061454;
  box-shadow: 2px 2px 2px #030b37;
  margin-left: 30px;
  border-radius: 10px;
  padding: 25px;
}
.chakan {
  width: 225px;
  height: 30px;
  font-size: 28px;
  line-height: 30px;
  text-align: center;
  color: #4165b9;
}
.photo {
  width: 100px;
  height: 100px;
  margin: 15px 62px;
}
.txt {
  width: 225px;
  height: 30px;
  font-size: 28px;
  line-height: 30px;
  text-align: center;
  color: #fff;
}
</style>

