import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

  
export default new Vuetify({
    theme: {
        themes: {
          dark: {
            primary: '#ea5514',
            secondary: '#b0bec5',
            anchor: '#8c9eff',
          },
        },
        dark: true,
      },
});
