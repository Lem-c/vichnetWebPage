<template>


  <v-footer app color="#0D47A1">

      <p class="ma-0 white--text font-weight-bold text-start">运行时间: XX 小时</p>

    <div style="position: relative; left: 360px">
      <p class="mb-0 white--text font-weight-bold">时间: {{ FormatTime(nowTime) }}</p>
    </div>

  </v-footer>


</template>

<script>
export default {
  name: "appFooter",
  data() {
    return {
      timer: undefined,
      nowTime: new Date(),
      latedata:"2020-1-9",
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.nowTime= new Date().toLocaleString();
    });
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    FormatTime() {
      const date = new Date();
      const year = this.formatTime(date.getFullYear());
      const month = this.formatTime(date.getMonth() + 1);
      const day = this.formatTime(date.getDate());
      const hour = this.formatTime(date.getHours());
      const minute = this.formatTime(date.getMinutes());
      const second = this.formatTime(date.getSeconds());
      const weekday = date.getDay();
      const weeks = ["星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六"];
      const week = weeks[weekday];
      return `${year}-${month}-${day} ${hour}:${minute}:${second} ${week}`;
    },
    formatTime(n) {
      if (n < 10) {
        return "0" + n;
      } else {
        return n;
      }
    },
  }
}
</script>

<style scoped>

</style>