<template>
  <div class="d-grid grid-cols-sm-3 gap-6">
    <div v-for="(item, index) in clamps" :key="index" flat tile class="border">
      <v-card-subtitle>
        {{ `line-clamp-${item}` }}
      </v-card-subtitle>
      <v-card-text>
        <p class="mb-0" :class="`line-clamp-${item}`">{{ msg }}</p>
      </v-card-text>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssLineClamp",
  data() {
    return {
      msg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae debitis quo facilis beatae nesciunt vitae cupiditate aut dignissimos, labore quos, iure magni. Debitis dicta cupiditate nemo voluptatibus repellat illum impedit!",
      clamps: [0, 1, 2, 3, 4, 5, 6],
    };
  },
};
</script>
