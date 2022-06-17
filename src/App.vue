<template>
  <v-app>
   <!-- <appHeader/>-->
    <router-view/>
  </v-app>
</template>

<script>
    //import appHeader from "./components/appHeader.vue"

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.theme--dark.v-application {
  background: #393a3a
}
</style>