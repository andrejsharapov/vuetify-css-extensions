<template>
  <v-app>
    <a href="https://github.com/andrejsharapov/vuetify-css-extensions" aria-label="View source on Github" target="_blank" class="github-logo z-index-lg-10 z-index-md-none z-index-none z-index-sm-2">
      <svg viewBox="0 0 250 250" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" class="arm" />
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" />
      </svg>
    </a>
    <v-main>
      <v-container>
        <v-toolbar flat color="transparent">
          <v-toolbar-title class="grow d-sm-flex">
            <pre>window: {{ $vuetify.breakpoint.width }}px</pre>
            <v-spacer />
          </v-toolbar-title>
        </v-toolbar>
        <v-expansion-panels v-model="panel" multiple>
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
          <v-expansion-panel>
            <v-expansion-panel-header>overflow</v-expansion-panel-header>
            <v-expansion-panel-content><CssOverflow /></v-expansion-panel-content>
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
import CssOverflow from "./components/css-overflow";

export default {
  name: "App",
  components: {
    CssGrid,
    CssLineClamp,
    CssOpacity,
    CssBorder,
    CssOverflow,
  },
  data() {
    return {
      panel: [1],
    };
  },
};
</script>

<style lang="sass">
// TEST checking the health of breakpoints (this.$vuetify.breakpoint.width)
@mixin bg($breakpoint)
  @if map-has-key($grid-breakpoints, $breakpoint)
    @media (min-width: #{map-get($grid-breakpoints, $breakpoint)})
      @content

.v-main
  // @include bg(xs)
  //   background: #fc5f5f
  @include bg(sm)
    background: #fcf05f
  @include bg(md)
    background: #90e89f
  @include bg(lg)
    background: #909be8
  @include bg(xl)
    background: #ce90e8

.github-logo
  position: absolute
  top: 0
  right: 0
  display: block
  width: 80px
  height: 80px

  svg
    width: 80px
    fill: #242424

    path:nth-child(n+2)
      fill: #fff

  &:hover .arm
    transform-origin: 130px 106px
    animation: octocat-wave 560ms ease-in-out

@keyframes octocat-wave
  0%,
  100%
    -webkit-transform: rotate(0)
    transform: rotate(0)

  20%,
  60%
    -webkit-transform: rotate(-25deg)
    transform: rotate(-25deg)

  40%,
  80%
    -webkit-transform: rotate(10deg)
    transform: rotate(10deg)
</style>