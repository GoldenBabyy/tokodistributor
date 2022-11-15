<template>
  <div class="docs">
    <div class="title">
      <h1>Button</h1>
    </div>
    <section class="box-group td-vertical">
      <div class="box">
        <h2>Default Button</h2>
      </div>
      <div class="box bg-red">
        <div class="flex">
          <Button :type="typeValue" :size="sizeValue" :disabled="stateValue">
            <IconChevronLeft />
            <span>Button</span>
            <IconChevronRight />
          </Button>
          <Button :type="typeValue" :size="sizeValue" :disabled="stateValue" icon-only>
            <IconChevronRight />
          </Button>
        </div>
      </div>
      <div class="box flex">
        <div class="box-property">
          <h3>Choose Button Type</h3>
          <div class="box-property__form" v-for="(type, i) in types" :key="i">
            <input type="radio" :id="'type-'+i" name="radio-group-type" :value="type.value" v-model="typeValue">
            <label :for="'type-'+i">{{type.value}}</label>
          </div>
        </div>
        <div class="box-property">
          <h3>Choose Button Size</h3>
          <div class="box-property__form" v-for="(size, i) in sizes" :key="i">
            <input type="radio" :id="'size-'+i" name="radio-group-size" :value="size.value" v-model="sizeValue">
            <label :for="'size-'+i">{{size.value}}</label>
          </div>
        </div>
        <div class="box-property">
          <h3>Disabled State</h3>
          <div class="box-property__form" v-for="(state, i) in states" :key="i">
            <input type="radio" :id="'state-'+i" name="radio-group-state" :value="state.value" v-model="stateValue">
            <label :for="'state-'+i">{{state.value}}</label>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Button from '@/design-system/components/button/Button.vue'
import IconChevronRight from '@/design-system/components/icons/ChevronRight.vue'
import IconChevronLeft from '@/design-system/components/icons/ChevronLeft.vue'

export default {
  name: 'DesignSystem',
  components: {
    Button,
    IconChevronRight,
    IconChevronLeft
  },
  data () {
    return {
      typeValue: 'secondary',
      sizeValue: 'base',
      stateValue: false,
      types: [
        {
          value: 'secondary'
        },
        {
          value: 'ghost'
        }
      ],
      sizes: [
        {
          value: 'xs'
        },
        {
          value: 'sm'
        },
        {
          value: 'base'
        },
        {
          value: 'md'
        },
        {
          value: 'lg'
        }
      ],
      states: [
        {
          value: true
        },
        {
          value: false
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/ds-docs';
</style>
