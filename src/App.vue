<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

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