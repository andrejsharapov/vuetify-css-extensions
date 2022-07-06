<template>
  <div
    class="d-grid gap-6 pos-relative"
    :class="`grid-cols-` + position.length"
  >
    <v-card
      v-for="item in position"
      :key="item.pos"
      outlined
      height="400"
      class="pa-4 rounded pos-relative"
    >
      <div class="pos-absolute bottom-0 d-grid mb-4">
        {
        <div class="pl-3">{{ item.pos }};</div>
        <div class="pl-3">{{ item.move }};</div>
        }
      </div>
      <v-sheet
        width="48"
        height="48"
        :color="setBg()"
        :class="item.pos + ' ' + item.move"
        class="z-index-1 rounded"
      />
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CssOverflow",
  data() {
    return {
      position: [
        {
          pos: "pos-absolute pos-md-relative",
          move: "bottom-25 bottom-md-0 left-50 left-md-auto",
        },
        {
          pos: "pos-relative pos-xl-sticky",
          move: "top-50 top-xl-25 left-75 left-lg-33",
        },
        {
          pos: "pos-static pos-md-absolute",
          move: "bottom-25 right-66",
        },
        {
          pos: "pos-sticky pos-lg-static",
          move: "top-66 top-lg-25",
        },
        // {
        //   pos: "fixed",
        //   move: "",
        // },
      ],
      positions: ["relative", "sticky", "static", "fixed", "absolute"],
      move: ["auto", 0, 25, 33, 50, 66, 75, "full"],
    };
  },
  methods: {
    setBg() {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

      return randomColor;
    },
  },
};
</script>
