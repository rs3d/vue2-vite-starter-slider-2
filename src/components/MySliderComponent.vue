<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import VueSlider from 'vue-slider-component'

@Component({
  components: {
    VueSlider: () =>
      import('vue-slider-component').then((module) => {
        console.log(module.default)
        //debugger
        return module?.default
        //return module
      }),
  },
})
export default class MySliderComponent extends Vue {
  value = 50

  created() {
    console.log('MySliderComponent.vue')
  }
}
</script>

<template>
  <div class="example">
    <h3>MySliderComponent.vue</h3>
    <vue-slider v-model="value"></vue-slider>

    <p>
      <a href="https://github.com/NightCatSama/vue-slider-component/issues/642" target="_blank"
        >https://github.com/NightCatSama/vue-slider-component/issues/642</a
      >
    </p>
  </div>
</template>

<style lang="scss">
@import 'vue-slider-component/lib/theme/antd.scss';

.example {
  border: 1px solid red;
  padding: 1rem;
  border-radius: 1rem;
  text-align: left;
}
code {
  background: #eee;
  padding: 5px;
}
</style>
