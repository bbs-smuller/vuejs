//import _ from 'lodash'
import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

Vue.component('app', App)

const todoMvcApp = new Vue({
	store,
    el: '#app'
})