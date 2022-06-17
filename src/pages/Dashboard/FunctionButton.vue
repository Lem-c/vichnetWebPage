<template>
  <div style="height: 350px">
    <div>
      <Video></Video>
    </div>
    <div class="parent">
      <button class="gb gb-bordered hover-slide hover-fill gb-rounded div1" id="gb11"> 安全边界规划 </button>
      <button class="gb gb-bordered hover-slide hover-fill gb-rounded div2" id="gb11"> 修改安全边界 </button>
      <button class="gb gb-bordered hover-slide hover-fill gb-rounded div3" id="gb11" @click="alertbtn"> 警示灯开/关 </button>
      <button class="gb gb-bordered hover-slide hover-fill gb-rounded div4" id="gb11"> 声音开/关 </button>
      <button class="gb gb-bordered hover-slide hover-fill gb-rounded div5" id="gb11"  @click="notifyVue('top', 'center')"> 重置安全边界 </button>
      <button class="gb gb-bordered hover-slide hover-fill gb-rounded div6" id="gb11"> 安全边界取反 </button>
      <button class="gb gb-bordered hover-slide hover-fill gb-rounded div7" id="gb11"> 警示灯配置 </button>
      <button class="gb gb-bordered hover-slide hover-fill gb-rounded div8" id="gb11"> 补光灯开/关 </button>

      <div>
      <img src="img/images.png" id="img2"/>
      <img src="img/image2.png" id="img1"/>
      </div>
    </div>
  </div>

</template>

<script>
import alertNote from '../Notifications/alertNotification';
import { BaseAlert } from '@/components';

require('../../assets/css/buttonstyle.css')
import Video from "@/pages/Dashboard/Video";
export default {
  name: "FunctionButton",
  components: {
    Video,
    BaseAlert
  },
  data() {
    return {
      alertColor: false,
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false
      }
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        component: alertNote,
        icon: "tim-icons icon-bell-55",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
        timeout: 0
      });
    },
    alertbtn() {
      this.alertColor = true;
    }
  }
}
</script>

<style scoped>
#img1{
  width: 100px;
  transform:scale(1.8);

  position: relative;
  top: -230px;
  left: -1050px;

}
#img2{
  width: 100px;
  transform:scale(1.8);

  position: relative;
  top: -230px;
  left: -1850px;

}

</style>
