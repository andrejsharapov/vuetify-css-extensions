# vuetify-css-extensions

Mini CSS extensions for Vuetify.js

1. [vuetify-css-border.scss][border]
2. [vuetify-css-grid.scss][grid]
3. [vuetify-css-index.scss][index]
4. [vuetify-css-line-clamp.scss][line-clamp]
5. [vuetify-css-max-width.scss][max-width]
6. [vuetify-css-opacity.scss][opacity]
7. [vuetify-css-overflow.scss][overflow]

## Use

You can easily use any of these extensions as normal [Vuetify 2][vuetify] classes inside your components. It is enough just to import the necessary styles into your application. The examples are in the [components][examples] folder.

Tutorial [How to use CSS Grid][how-to-use-grid]

## Import

If you are using Vue CLI add to `main.js`

```js
import VuetifyCssGrid from "@/sass/extends/vuetify-css-border.scss";

new Vue({
  VuetifyCssBorder,
}).$mount("#app");
```

or use it via `<style lang='scss'></style>` directly in components

```js
<style lang="scss">@import '~/src/sass/extends/vuetify-css-border.scss';</style>
```

If you’re using [nuxt] you can add styles to the nuxt.config.\* file.

```js
export default {
  css: [{ src: "~/base-dir/path/vuetify-css-***", lang: "scss" }],
};
```

Before you start using them, copy the variables you need and put them in your [variables.scss][variables] file.

[vuetify]: https://github.com/vuetifyjs/vuetify
[nuxt]: https://github.com/nuxt/nuxt.js
[variables]: https://github.com/andrejsharapov/vuetify-css-extensions/blob/master/src/sass/variables.scss
[border]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/sass/extends/vuetify-css-border.scss
[grid]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/sass/extends/vuetify-css-grid.scss
[index]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/sass/extends/vuetify-css-index.scss
[line-clamp]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/sass/extends/vuetify-css-line-clamp.scss
[max-width]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/sass/extends/vuetify-css-max-width.scss
[opacity]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/sass/extends/vuetify-css-opacity.scss
[overflow]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/sass/extends/vuetify-css-overflow.scss
[how-to-use-grid]: https://dev.to/andrejsharapov/vuetify-use-css-grid-classes-17nl
[examples]: https://github.com/andrejsharapov/vuetify-css-extensions/tree/master/src/components
