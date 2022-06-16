<template>

  <div class="op-box">

    <div class="buttons">
      <div class="col-md-2">
        <base-button type="info" block @click="notifyVue('top', 'center')">安全边界规划</base-button>
      </div>

      <div class="col-md-2" style="margin-top:30px">
        <base-button type="info" block @click="notifyVue('top', 'center')">重置安全边界</base-button>
      </div>

      <div class="col-md-2" style="margin-top:30px">
        <base-button type="info" block @click="notifyVue('top', 'center')">修改边界规划</base-button>
      </div>

      <div class="col-md-2" style="margin-top:30px">
        <base-button type="info" block @click="notifyVue('top', 'center')">安全边界取反</base-button>
      </div>

      <div class="col-md-2" style="margin-top:30px">
        <base-button type="info" block @click="notifyVue('top', 'center')">警示灯</base-button>
      </div>

      <div class="col-md-2" style="margin-top:30px">
        <base-button type="info" block @click="notifyVue('top', 'center')">声音开/关</base-button>
      </div>
    </div>

  </div>

</template>

<script>
  import alertNote from './Notifications/alertNotification';
  import { BaseAlert } from '@/components';

  export default {
    components: {
      BaseAlert
    },
    data() {
      return {
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
      }
    }
  };
</script>

<style scoped lang="sass">
  @import "../assets/sass/Dashboard/videoBoard.scss";

</style>
