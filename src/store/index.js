import { defineStore } from 'pinia'

export const useStore = defineStore('Oliver', {
    state: () => {
        return {
            isCollapse: true,
            currentMenu: null,
            tabsList: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 'home'
                }
            ],
            menu: [],
        }
    },

    getters: {

    },

    actions: {
        updateIsCollapse() {
            this.isCollapse = !this.isCollapse
        },
        selectMenu(val) {
            if (val.name == 'home') {
                this.currentMenu = null
            }
            else {
                this.currentMenu = val
                let result = this.tabsList.findIndex(item => item.name == val.name)
                result == -1 ? this.tabsList.push(val) : ''
            }
        },
        closeTag(val) {
            let result = this.tabsList.findIndex(item => item.name == val.name)
            console.log(result);
            console.log(this.tabsList);
            this.tabsList.splice(result, 1)
            console.log(this.tabsList);
        },
        setMenu(val) {
            this.menu = val
            localStorage.setItem('menu', JSON.stringify(val))
        },
        addMenu(router) {
            if (!localStorage.getItem('menu')) {
                return
            }
            const menu = JSON.parse(localStorage.getItem('menu'))
            this.menu = menu

            const menuArray = []
            console.log(menu);
            menu.forEach(item => {
                if (item?.children) {
                    item.children = item.children.map(itemchild => {
                        let url = `../views/${itemchild.url}.vue`
                        itemchild.component = () => import(url)
                        return itemchild
                    })
                    menuArray.push(...item.children)
                }
                else {
                    let url = `../views/${item.url}.vue`
                    item.component = () => import(url)
                    menuArray.push(item)
                }
            })

            menuArray.forEach(item => {
                router.addRoute('home1', item)
            })
        },
        cleanMenu() {
            this.menu = []
            localStorage.removeItem('menu')
        },
    }
})

export const useStoreWithout = (pinia) => {
    return useStore(pinia)
}