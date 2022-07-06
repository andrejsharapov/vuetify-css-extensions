<template>
  <div class="d-grid gap-6">
    <template v-for="item in breakpoints">
      <v-card
        :key="item"
        outlined
        :class="`max-w-` + item"
        height="5rem"
        class="d-grid place-items-center"
      >
        .max-w-{{ item }}
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  name: "CssMaxWidth",
  data() {
    return {
      breakpoints: ["sm", "md", "lg", "xl"],
    };
  },
};
</script>
