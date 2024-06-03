import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    setIsLoggedIn(value) {
      this.isLoggedIn = value
    },
    login() {
      this.setIsLoggedIn(true)
      // You can add additional logic here, such as setting the user cookie
    },
    logout() {
      this.setIsLoggedIn(false)
      // You can add additional logic here, such as removing the user cookie
    }
  }
})
