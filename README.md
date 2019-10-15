# promise-button

## Installation
```
npm install vue-promise-button
or
yarn add vue-promise-button
```

## Usage
```
import PromiseButton from 'vue-promise-button';

// Set global if you want
Vue.component('promise-button', PromiseButton);

// Use it
<promise-button class="button" :promise="promise">
I'm a promise button
</promise-button>
```

Setup your promise function as a promise like this.
```
export default {
  methods: {
    promise() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true)
        }, 2000)
      })
    }
  }
}
```

With axios and api
```
export default {
  methods: {
    promise() {
      return axios.get('/users/1234')
    }
  }
}
```

## Development
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
