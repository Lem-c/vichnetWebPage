<template>

  <div class="op-box" :class="{'alert':alertColor}">
      <card id="cardID">
        <FunctionButton></FunctionButton>
      </card>
  </div>

</template>

<script>
  import alertNote from './Notifications/alertNotification';
  import { BaseAlert } from '@/components';
  import FunctionButton from "@/pages/Dashboard/FunctionButton";

  export default {
    components: {
      FunctionButton,
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
  };
</script>

<style scoped type="text/scss">
  @import "../assets/sass/Dashboard/videoBoard.scss";

  #cardID{
    width: 100%;
    margin:0;

    position: relative;
    top: -20px;
    height: 500px;
  }
</style>
