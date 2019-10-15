<template lang="pug">
button.promise-button(
  type="button",
  @click.stop="handle",
  :class="{ 'promise-button--notext': !isShowText }"
)
  span(v-if="isShowText")
    slot
      span.promise-button-text
  slot(name="spinner")
    span.promise-button-spinner(
      v-show="isProcessing || forceProcessing",
      role="status",
    )
      span.sr-only Loading...
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PromiseButton extends Vue {
  @Prop({ type: Function, required: true })
  promise!: Function

  @Prop({ type: Boolean, default: false })
  autoHide!: boolean

  @Prop({ type: Boolean, default: false })
  forceProcessing!: boolean

  isProcessing: boolean = false;

  /**
  * get computed of show text or not
  */
  get isShowText() {
    if (this.isProcessing) {
      return !this.autoHide;
    }

    return true;
  }

  /**
  * main handle function
  */
  handle() {
    if (!this.isProcessing) {
      this.isProcessing = true;
      this.promise()
        .catch((e: Error) => { // eslint-disable-line
          this.isProcessing = false;
          throw e;
        })
        .then(() => {
          this.isProcessing = false;
        });
    }
  }
};
</script>
<style lang="sass" scoped>
@import '~bootstrap/scss/functions'
@import '~bootstrap/scss/variables'
@import '~bootstrap/scss/mixins'

@import '~bootstrap/scss/utilities/screenreaders'
@import '~bootstrap/scss/spinners'

.promise-button
  display: inline-flex
  align-items: center
  justify-content: center

.promise-button-spinner
  @extend .spinner-border
  width: 1em
  height: 1em
  border-width: .15em
  margin-left: .5em

</style>
