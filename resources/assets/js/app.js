import _ from 'lodash'
import Vue from 'vue'
import Counter from './components/Counter.vue'
import store from './store'

Vue.component('counter', Counter)

const app = new Vue({
    el: '#app',
    store
})