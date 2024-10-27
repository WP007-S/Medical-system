const localData = localStorage.getItem('pz_wp')
const state = localData? localData.menu : {
    isCollapse: false,
    selectMenu: [],
    routerList: [],
    menuActive: '1-1'
}

const mutations = {
    collapseMenu(state) {
        state.isCollapse = !state.isCollapse
    },
    addMenu (state, payload) {
        //对数据去重
        if(state.selectMenu.findIndex(item => item.path === payload.path) === -1) {
            state.selectMenu.push(payload)
        }
    },
    closeMenu (state, payload) {
        //找到点击数据的索引
        const index = state.selectMenu.findIndex(val => val.name ===payload.name)
        state.selectMenu.splice(index, 1)
    },
    dynamicMenu(state, payload){
        // console.log('111',payload)
        //通过glob导入
        const modules = import.meta.glob('../views/**/**/*.vue')
        // console.log('222',modules)
        function routerSet(router){
            router.forEach(route => {
                if(!route.children) {
                    const url = `../views${route.meta.path}/index.vue`
                    // console.log(route.meta.path)
                    // console.log(modules[url])
                    route.component =  modules[url]
                } else {
                    // console.log('444',route.children)
                    routerSet(route.children)
                }
            })
        }
        routerSet(payload)   
        //拿到完整的路由数据
        state.routerList = payload
        // console.log('333',payload)
    },
    updateMenuActive(state, payload){
        state.menuActive = payload
    }
}

export default {
    state,
    mutations
}