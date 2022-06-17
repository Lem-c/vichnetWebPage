<template>
<div id="ti">
  <span v-html="'\u00a0\u00a0\u00a0\u00a0'"></span>
  运行时长:XX小时
  <span v-html="'\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'"></span>
  时间:{{ FormatTime(nowTime) }}
</div>
</template>

<script>
export default {
  name: "Time",
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
      const weeks = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      );
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

#ti {

}

</style>
