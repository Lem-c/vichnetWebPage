<template>
  <v-app-bar app color="#0D47A1" height="68" clipped-right>
    <v-img position="left" contain src="../assets/vich_icon.png" height="45" width="200" />

    <v-container class="text-center mr-6">
      <h2 class="white--text" >人手防护安全预警系统</h2>
    </v-container>


    <v-container id="lang">
      <v-select :items="items" label="中文" solo></v-select>
    </v-container>

  </v-app-bar>
</template>

<script>
export default {
  name: "appHeader",
  data: () => ({
    items: ['中文', 'English'],
  }),
}
</script>

<style scoped>

#lang{
  position: relative;
  top: 15px;
  width: 240px;
}

</style>