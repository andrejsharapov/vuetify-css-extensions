import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

// import VuetifyCssBorder from "@/sass/extends/vuetify-css-border.scss";
import VuetifyCssGrid from "@/sass/extends/vuetify-css-grid.scss";
import VuetifyCssIndex from "@/sass/extends/vuetify-css-index.scss";
import VuetifyCssLineClamp from "@/sass/extends/vuetify-css-line-clamp.scss";
import VuetifyCssMaxWidth from "@/sass/extends/vuetify-css-max-width.scss";
import VuetifyCssOpacity from "@/sass/extends/vuetify-css-opacity.scss";
import VuetifyCssOverflow from "@/sass/extends/vuetify-css-overflow.scss";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  // VuetifyCssBorder,
  VuetifyCssGrid,
  VuetifyCssIndex,
  VuetifyCssLineClamp,
  VuetifyCssMaxWidth,
  VuetifyCssOpacity,
  VuetifyCssOverflow,
  render: (h) => h(App),
}).$mount("#app");
