//import _ from 'lodash'
import Vue from 'vue'
import App from './components/App.vue'
import store from './vuex/store'

Vue.component('app', App)

const todoMvcApp = new Vue({
    el: '#app',
    store
})