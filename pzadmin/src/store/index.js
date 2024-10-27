
import { createStore } from 'vuex'
import menu from './menu'
import createPersistedstate from 'vuex-persistedstate'
// 创建一个新的 store 实例
export default createStore({
    plugins: [new createPersistedstate({
        key:'pz_wp' 
    })],
    modules: {
        menu
    }
})
