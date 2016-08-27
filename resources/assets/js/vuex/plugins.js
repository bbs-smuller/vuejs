import { STORAGE_KEY } from './store'
//import createLogger from '../../../../node_modules/vuex/src/plugins/logger'
import createLogger from 'vuex/src/plugins/logger'

const localStoragePlugin = store => {
	store.subscribe((mutation, { todos }) => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	})
}

export default (process.env.NODE_ENV !== 'production') ? [createLogger(), localStoragePlugin] : [localStoragePlugin]