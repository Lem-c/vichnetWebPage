<template>
    <v-container class="index" style="max-height: 550px; max-width: 800px" @touchmove.prevent @mousewheel.prevent>
        <!--
        <v-row align="center" justify="space-around" style="margin-top: 40px">
            <v-btn depressed @click="addAnchor"> Normal </v-btn>
            <v-btn depressed color="primary"> Primary </v-btn>
            <v-btn depressed color="error"> Error </v-btn>
            <v-btn depressed disabled> Disabled </v-btn>
        </v-row>
        -->


        <v-row class="cConten" style="height: 550px; margin-top: 10px">
            <v-col cols="8">
                <v-img :aspect-ratio="16/9"
                       max-height="550" max-width="550"
                       src="../assets/videoImg.png" elevation="5"
                       style="margin-left: 20px"></v-img>
            </v-col>

            <v-col cols="2">
                <v-btn color="primary">  </v-btn>
                <v-btn color="primary">  </v-btn>
                <v-btn color="primary">  </v-btn>
                <v-btn color="primary">  </v-btn>
                <v-btn disabled> </v-btn>
            </v-col>
        </v-row>

        <v-bottom-navigation absolute>
            <v-col class="text-center"
                   cols="2">
                XX
            </v-col>

            <v-col class="text-center"
                   cols="2">
                <strong>Time :</strong>
            </v-col>
        </v-bottom-navigation>

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
        text-align: left;
        margin-bottom:20px;
    }

    v-btn {
        max-width: 50px;
        margin-bottom:30px;
    }

    ::-webkit-scrollbar {
        width: 0 !important;
    }

    ::-webkit-scrollbar {
        width: 0 !important;
        height: 0;
    }
</style>
