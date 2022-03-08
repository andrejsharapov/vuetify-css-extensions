<template>
  <v-app>
    <v-main>
      <v-container>
        <v-toolbar flat color="transparent">
          <v-toolbar-title class="grow d-sm-flex">
            <v-spacer />
            <pre>window: {{ $vuetify.breakpoint.width }}px</pre>
          </v-toolbar-title>
        </v-toolbar>
        <v-expansion-panels v-model="panel" accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>border</v-expansion-panel-header>
            <v-expansion-panel-content><CssBorder /></v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>grid css</v-expansion-panel-header>
            <v-expansion-panel-content><CssGrid /></v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>line-clamp</v-expansion-panel-header>
            <v-expansion-panel-content><CssLineClamp /></v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>opacity</v-expansion-panel-header>
            <v-expansion-panel-content><CssOpacity /></v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CssGrid from "./components/css-grid";
import CssLineClamp from "./components/css-line-clamp";
import CssOpacity from "./components/css-opacity";
import CssBorder from "./components/css-border";

export default {
  name: "App",
  components: {
    CssGrid,
    CssLineClamp,
    CssOpacity,
    CssBorder,
  },
  data() {
    return {
      panel: [],
    }
  },
};
</script>

<style lang="sass">
// TEST checking the health of breakpoints
// this.$vuetify.breakpoint.width
@mixin bg($breakpoint)
  @if map-has-key($grid-breakpoints, $breakpoint)
    @media (min-width: #{map-get($grid-breakpoints, $breakpoint)})
      @content

.v-main
  @include bg(xs)
    background: #fc5f5f
  @include bg(sm)
    background: #fcf05f
  @include bg(md)
    background: #90e89f
  @include bg(lg)
    background: #909be8
  @include bg(xl)
    background: #ce90e8
</style>