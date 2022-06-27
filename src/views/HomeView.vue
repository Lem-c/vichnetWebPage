<template>
  <v-app>

    <app-header></app-header>


    <v-main style="background-color: #263238" class="pr-0">
      <v-container style="max-height: 450px; max-width: 800px;" @touchmove.prevent @mousewheel.prevent>
      <v-row style="height: 376px">
        <v-col cols="8" class="pt-10">
          <v-img :aspect-ratio="16/9" src="../assets/videoImg.png"/>
        </v-col>

      </v-row>
        <v-navigation-drawer absolute permanent right clipped dark style="background-color: #263238">
          <!-- -->
          <v-col cols="2" >

            <v-btn color="primary" @click.stop="drawer = !drawer" id="safeset" class="font-weight-bold"> 安全边界设置 </v-btn>
            <v-btn color="primary" @click.stop="drawerV = !drawerV" id="vsset" class="font-weight-bold"> 声/光设置 </v-btn>
            <v-btn class="ma-2" color="#263238" elevation="10" icon large style="background-color: white" id="setbt">
              <v-icon>
                mdi-wrench
              </v-icon>
            </v-btn>

            <v-btn class="ma-2" color="#263238" elevation="10" icon large style="background-color: white" id="pow">
              <v-icon>
                mdi-power-standby
              </v-icon>
            </v-btn>

          </v-col>
        </v-navigation-drawer>
      </v-container>






      <v-navigation-drawer v-model="drawer" app temporary right clipped>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-alarm-light</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>安全边界设置</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
          <v-list-item
              v-for="(item,index) in items"
              :key="item.title"
              link
              :class="{'mt-3':(index!==0)}"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>



      <v-navigation-drawer v-model="drawerV" app temporary right clipped>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-bell-ring</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>声/光设置</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
          <v-list-item
              v-for="(item,index) in itemsV"
              :key="item.title"
              link
              :class="{'mt-3':(index!==0)}"
          >
            <v-row class="pl-3">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>

              <v-switch
                  v-show="index!==3"
                  v-model="item.switch"
                  class="ml-12"
              ></v-switch>
            </v-row>

          </v-list-item>
        </v-list>
      </v-navigation-drawer>


      <app-footer></app-footer>


    </v-main>


  </v-app>
</template>

<script>
import appHeader from "@/components/appHeader";
import appFooter from "@/components/appFooter";
import jq from "@/components/jquaryJS.vue";

export default {
  name: 'Home',

  components: {
    appHeader,
    appFooter,
    jq
  },
  data () {
    return {
      drawer: null,
      items: [
        { title: '安全边界划定', icon: 'mdi-chevron-right-box' },
        { title: '安全边界取反', icon: 'mdi-chevron-right-box-outline' },
        { title: '修改安全边界', icon: 'mdi-wrench' },
        { title: '重置安全边界', icon: 'mdi-cached' },
      ],

      drawerV: null,
      itemsV: [
        { title: '警示灯', icon: 'mdi-lightbulb', switch: false},
        { title: '声音', icon: 'mdi-bullhorn', switch: false },
        { title: '补光灯', icon: 'mdi-brightness-5', switch: false },
        { title: '警示灯配置', icon: 'mdi-wrench', switch: false },
      ],

    }
  },
}
</script>

<style scoped>

  #safeset{
    position: relative;
    top: 30px;
    left: 10px;

    width: 200px;
  }

  #vsset{
    position: relative;
    top: 118px;
    left: 10px;

    width: 200px;
  }

  #setbt{
    position: relative;
    top: 200px;
    left: 6px;
  }

  #pow{
    position: relative;
    top: 140px;
    left: 146px;
  }
</style>
