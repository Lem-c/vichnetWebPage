<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="https://www.vichnet.cn/" target="_blank">
            宁波纬诚科技
          </a>
        </li>
      </ul>
      <div class="copyright">
        © {{year}} vichnet.cn
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  };
</script>
<style>
</style>
