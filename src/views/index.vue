<template>
  <v-container class="index">
    <v-row align="center" justify="space-around" style="margin-top: 20px">
      <v-btn depressed @click="addAnchor"> Normal </v-btn>
      <v-btn depressed color="primary"> Primary </v-btn>
      <v-btn depressed color="error"> Error </v-btn>
      <v-btn depressed disabled> Disabled </v-btn>
    </v-row>

    <v-stage ref="stage" :config="stageConfig"> </v-stage>
  </v-container>
</template>

<script>
import Konva from 'konva'
const width = window.innerWidth * 0.9
const height = window.innerHeight * 0.9

export default {
  name: 'IndexPage',

  data: () => ({
    stageConfig: {
      width: width,
      height: height,
      draggable: false,
      scaleX: 1,
      scaleY: 1,
      x: 0,
      y: 0,
    },
    stage: {},
    videoLayer: {},
    dangerZoneLayer: {},
  }),

  mounted() {
    const vm = this

    this.stage = vm.$refs.stage.getNode()
    this.videoLayer = new Konva.Layer()
    this.dangerZoneLayer = new Konva.Layer()
    this.stage.add(this.videoLayer)
    this.stage.add(this.dangerZoneLayer)
  },

  methods: {
    addAnchor() {
      var anchor = new Konva.Circle({
        x: Math.random() * 200 + 100,
        y: Math.random() * 200 + 100,
        radius: 10,
        stroke: '#666',
        fill: '#FFF',
        strokeWidth: 2,
        draggable: true,
      })
      this.dangerZoneLayer.add(anchor)
    },
  },
}
</script>

<style scoped></style>
