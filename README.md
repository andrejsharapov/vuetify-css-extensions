# vuetify-css-extensions

Mini CSS extensions for Vuetify.js

1. [vuetify-css-border.scss][border]
2. [vuetify-css-grid.scss][grid] : [guide: how to use][how-to-use-grid]
3. [vuetify-css-index.scss][index]
4. [vuetify-css-line-clamp.scss][line-clamp]
5. [vuetify-css-opacity.scss][opacity]

## Import

If you are using Vue CLI add to `main.js`

```bash
import VuetifyCssGrid from "@/sass/extends/vuetify-css-grid.scss";

new Vue({
  VuetifyCssBorder,
}).$mount("#app");

```

or use it via `style lang='scss'` directly in components

```js
<style lang="scss">
@import '~/src/sass/extends/vuetify-css-border.scss';
</style>
```

[vuetify]: https://vuetifyjs.com/en/
[border]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/sass/extends/vuetify-css-border.scss
[grid]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/sass/extends/vuetify-css-grid.scss
[index]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/sass/extends/vuetify-css-index.scss
[line-clamp]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/sass/extends/vuetify-css-line-clamp.scss
[opacity]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/sass/extends/vuetify-css-opacity.scss

[how-to-use-grid]: https://dev.to/andrejsharapov/vuetify-use-css-grid-classes-17nl
