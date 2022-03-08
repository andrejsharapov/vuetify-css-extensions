import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import VuetifyCssGrid from "@/sass/extends/vuetify-css-grid.scss";
import VuetifyCssIndex from "@/sass/extends/vuetify-css-index.scss";
import VuetifyCssOpacity from "@/sass/extends/vuetify-css-opacity.scss";
import VuetifyCssLineClamp from "@/sass/extends/vuetify-css-line-clamp.scss";
// import VuetifyCssBorder from "@/sass/extends/vuetify-css-border.scss";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  VuetifyCssGrid,
  VuetifyCssIndex,
  VuetifyCssOpacity,
  VuetifyCssLineClamp,
  // VuetifyCssBorder,
  render: (h) => h(App),
}).$mount("#app");
