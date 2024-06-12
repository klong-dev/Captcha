import { defineStore } from 'pinia'
import VueCookies from 'vue-cookies';

export const useStore = defineStore('main', {
  state: () => ({
    isLoggedIn: false,
    user: VueCookies.get('user') || null
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    setUserMoney(money) {
      this.user.money = money;
      VueCookies.set('user', JSON.stringify(this.user))
    },
    setIsLoggedIn(value) {
      this.isLoggedIn = value
    },
    login() {
      this.setIsLoggedIn(true)
    },
    logout() {
      this.setIsLoggedIn(false)
    }
  }
})
