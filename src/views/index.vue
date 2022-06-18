<template>
    <v-container class="index" style="max-height: 600px; max-width: 800px" @touchmove.prevent @mousewheel.prevent>
        <!--
        <v-row align="center" justify="space-around" style="margin-top: 40px">
            <v-btn depressed @click="addAnchor"> Normal </v-btn>
            <v-btn depressed color="primary"> Primary </v-btn>
            <v-btn depressed color="error"> Error </v-btn>
            <v-btn depressed disabled> Disabled </v-btn>
        </v-row>
        -->


        <v-row class="cConten" style=" height: 550px; margin-top: 10px">

            <v-img :aspect-ratio="16/9"
                      max-height="400" max-width="550"
                    src="../assets/videoImg.png" elevation="5"
                   style="margin-left: 20px"></v-img>

            <v-card elevation="5" width="220" max-height="400">

<!--                <v-btn elevation="2" depressed outlined raised small> Draw </v-btn>
                <v-btn depressed disabled small> Disabled </v-btn>-->

            </v-card>

        </v-row>

        <v-bottom-navigation absolute>
            <v-col class="text-center"
                    cols="12">
                {{ new Date().getFullYear() }} <strong>Time</strong>
            </v-col>
        </v-bottom-navigation>

        <v-stage ref="stage" :config="stageConfig"> </v-stage>
    </v-container>
</template>

<script>
    //import Konva from 'konva';

export default {
        name: 'IndexPage',

        data: () => ({
        //
        }),
}
</script>

<style scoped>
    .v-btn {
        text-transform: none;
        min-width: 0;
        text-align: center;
    }
</style>
