<template>
  <v-row>
    <v-col cols="12">
      <h3>CSS Grid</h3>
      <div class="mb-4">
        model: {
        <br />
        &nbsp;&nbsp;{{ grid }}
        <br />
        }
      </div>
      <div :class="grid">
        <div v-for="(item, index) in 12" :key="index" class="pa-4 text-center border">
          {{ item }}
        </div>
      </div>
    </v-col>
    <v-col cols="12">
      <h3>Vuetify base classes `v-row > v-col`</h3>
      <div class="mb-4">
        model: {
        <br />
        &nbsp;&nbsp;{{ flex }}
        <br />
        }
      </div>
      <v-row>
        <v-col v-for="(item, index) in 12" :key="index" :class="flex">
          <div class="pa-4 text-center border">
            {{ item }}
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CssGrid",
  data() {
    return {
      grid: "d-grid gap-y-6 grid-cols-sm-4 gap-x-sm-6 grid-cols-md-6 grid-cols-lg-12",
      flex: "col-sm-3 col-md-2 col-lg-1 col-12",
    };
  },
};
</script>
