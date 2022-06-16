<template>

  <div class="op-box" :class="{'alert':alertColor}">

    <div class="row ml-auto">
      <div class="col-lg-8 col-md-12">
        <card>
          <img src="img/videoImg.png" />
        </card>
      </div>
      <!--buttons-->

      <div class="col-md-4">
        <card>
          <div class="row">
            <div class="col-lg-8 ml-auto mr-auto">
              <div class="coloum">
                <div class="col-md-6" style="margin-top:35px">
                  <base-button type="info" block>安全边界规划</base-button>
                </div>
                <div class="col-md-6" style="margin-top:35px">
                  <base-button type="info" block @click="notifyVue('top', 'center')">重置安全边界</base-button>
                </div>
                <div class="col-md-6" style="margin-top:35px">
                  <base-button type="info" block>修改边界规划</base-button>
                </div>
              </div>

              <div class="coloum">
                <div class="col-md-6" style="margin-top:35px">
                  <base-button type="info" block>安全边界取反</base-button>
                </div>
                <div class="col-md-6" style="margin-top:35px">
                  <base-button type="primary" block @click="alertbtn">警示灯</base-button>
                </div>
                <div class="col-md-6" style="margin-top:35px; margin-bottom:50px">
                  <base-button type="info" block>声音开/关</base-button>
                </div>
              </div>

            </div>
          </div>
        </card>
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

<style scoped lang="sass">
  @import "../assets/sass/Dashboard/videoBoard.scss";

</style>
