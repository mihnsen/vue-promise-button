<template>
  <div class="hello">
    <h2>{{ msg }}</h2>

    <div style="margin-bottom: 20px">
      <PromiseButton class="btn" :promise="fakePromise">Success promise</PromiseButton>
    </div>
    <div>
      <PromiseButton class="btn" :promise="failurePromise">Failure promise</PromiseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PromiseButton from './PromiseButton.vue'

@Component({
  components: {
    PromiseButton,
  }
})
export default class HelloWorld extends Vue {

  @Prop() private msg!: string;

  fakePromise() {
    return new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }

  failurePromise() {
    return new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        reject(new Error('This promise failure'));
      }, 2000);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.btn {
  padding: 5px 15px;
  background: rgba(0, 0, 0, .05);
  border: 1px solid rgba(0, 0, 0, 1);
  outline: none;
}
</style>
