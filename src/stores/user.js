import { defineStore } from 'pinia'
import Vue from 'vue'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

export const useStore = defineStore('main', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    setIsLoggedIn(value) {
      this.isLoggedIn = value
    },
    login() {
      const user = Vue.$cookies.get('user')
      if (user !== undefined && user !== null) {
        this.setIsLoggedIn(true)
      }
      // You can add additional logic here, such as setting the user cookie
    },
    logout() {
      const user = Vue.$cookies.get('user')
      if (user === undefined || user === null) {
        this.setIsLoggedIn(false)
      }
      // You can add additional logic here, such as removing the user cookie
    }
  }
})
