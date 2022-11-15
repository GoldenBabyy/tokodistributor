export default {
  name: 'Button',
  props: {
    anchor: Boolean,
    disabled: Boolean,
    fullWidth: Boolean,
    iconOnly: Boolean,
    size: {
      type: String,
      default: 'base'
    },
    type: {
      type: String,
      default: 'secondary'
    }
  },
  computed: {
    componentType () {
      return this.anchor ? 'a' : 'button'
    },
    buttonClasses () {
      return {
        [`button-${this.type}`]: this.type,
        [`button-${this.size}`]: this.size,
        'button-disabled': this.disabled,
        'button-icon-only': this.iconOnly,
        'button-full-width': this.fullWidth
      }
    },
    focusIndex () {
      return this.disabled ? -1 : 0
    },
    hasIcon () {
      return this.$slots['leading-icon']
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
