<template>
  <div class="css-overflow d-grid gap-6">
    <div class="d-grid grid-cols-md-3 gap-6">
      <div v-for="(item, index) in 5" :key="index" flat tile class="border overflow-hidden">
        <v-subheader> overflow-{{ op[index] }} </v-subheader>
        <v-card-text>
          <p :class="`overflow-${op[index]}`">{{ msg }}</p>
        </v-card-text>
      </div>
    </div>

    <div class="d-grid grid-cols-md-3 gap-6">
      <div v-for="(item, index) in 5" :key="index" flat tile class="border overflow-hidden">
        <v-subheader> text-no-wrap overflow-x-{{ op[index] }} </v-subheader>
        <v-card-text>
          <p :class="`text-no-wrap overflow-x-${op[index]}`">
            {{ msg }}
          </p>
        </v-card-text>
      </div>
    </div>

    <div class="d-grid grid-cols-md-3 gap-6">
      <div v-for="(item, index) in 5" :key="index" flat tile class="border overflow-hidden">
        <v-subheader> text-no-wrap overflow-x-md-{{ op[index] }} </v-subheader>
        <v-card-text>
          <p :class="`text-no-wrap overflow-x-md-${op[index]}`">
            {{ msg }}
          </p>
        </v-card-text>
      </div>
    </div>

    <div class="d-grid grid-cols-md-3 gap-6">
      <div v-for="(item, index) in 5" :key="index" flat tile class="border overflow-hidden">
        <v-subheader> overflow-y-visible overflow-md-hidden overflow-y-lg-{{ op[index] }} </v-subheader>
        <v-card-text>
          <p :class="`overflow-y-visible overflow-md-hidden overflow-y-lg-${op[index]}`">
            {{ msg }}
          </p>
        </v-card-text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssOverflow",
  data() {
    return {
      msg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae debitis quo facilis beatae nesciunt vitae cupiditate aut dignissimos, labore quos, iure magni.",
      op: ["auto", "hidden", "scroll", "clip", "visible"],
    };
  },
};
</script>

<style>
.css-overflow p {
  height: 3em;
  border: dotted;
}
</style>