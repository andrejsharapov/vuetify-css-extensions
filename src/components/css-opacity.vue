<template>
  <div class="d-grid gap-6">
    <v-subheader>opacity-*</v-subheader>
    <div class="d-grid grid-cols-md-6 gap-6">
      <div v-for="(item, index) in opacity" :key="index">
        <div class="pa-4 text-center border" :class="`opacity-${item}`">
          <p class="mb-0">{{ `opacity-${item}` }}</p>
        </div>
      </div>
    </div>

    <v-subheader>opacity-lg-*</v-subheader>
    <div class="d-grid grid-cols-md-6 gap-6">
      <div v-for="(item, index) in opacity" :key="index">
        <div class="pa-4 text-center border" :class="`opacity-lg-${item}`">
          <p class="mb-0">{{ `opacity-lg-${item}` }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssOpacity",
  data() {
    return {
      opacity: [0, 10, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100],
    };
  },
};
</script>
