<template>
  <div class="d-grid gap-6">
    <div class="d-grid grid-cols-md-6 gap-6">
      <div v-for="(item, index) in border" :key="index">
        <div class="pa-4 border text-center" :class="`border-${item}`">
          <p class="mb-0">{{ `border-${item}` }}</p>
        </div>
      </div>
    </div>
    
    <div class="d-grid grid-cols-md-6 gap-6">
      <div v-for="(item, index) in border" :key="index">
        <div class="pa-4 border border-y-0 text-center" :class="`border-x-${item}`">
          <p class="mb-0">{{ `border-x-${item}` }}</p>
        </div>
      </div>
    </div>
    
    <div class="d-grid grid-cols-md-6 gap-6">
      <div v-for="(item, index) in border" :key="index">
        <div class="pa-4 border border-x-0 text-center" :class="`border-y-${item}`">
          <p class="mb-0">{{ `border-y-${item}` }}</p>
        </div>
      </div>
    </div>
    
    <div class="d-grid grid-cols-md-6 gap-6">
      <div v-for="(item, index) in border" :key="index">
        <div class="pa-4 border border-x-0 border-b-0 text-center" :class="`border-t-${item}`">
          <p class="mb-0">{{ `border-t-${item}` }}</p>
        </div>
      </div>
    </div>
    
    <div class="d-grid grid-cols-md-6 gap-6">
      <div v-for="(item, index) in border" :key="index">
        <div class="pa-4 border border-y-0 border-l-0 text-center" :class="`border-r-${item}`">
          <p class="mb-0">{{ `border-r-${item}` }}</p>
        </div>
      </div>
    </div>
    
    <div class="d-grid grid-cols-md-6 gap-6">
      <div v-for="(item, index) in border" :key="index">
        <div class="pa-4 border border-x-0 border-t-0 text-center" :class="`border-b-${item}`">
          <p class="mb-0">{{ `border-b-${item}` }}</p>
        </div>
      </div>
    </div>
    
    <div class="d-grid grid-cols-md-6 gap-6">
      <div v-for="(item, index) in border" :key="index">
        <div class="pa-4 border border-y-0 border-r-0 text-center" :class="`border-l-${item}`">
          <p class="mb-0">{{ `border-l-${item}` }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssBorder",
  data() {
    return {
      border: [0, 2, 3, 4, 6, 8],
    };
  },
};
</script>

<style lang="scss">
@import '~/src/sass/extends/vuetify-css-border.scss';
</style>
