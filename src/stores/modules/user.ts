import { defineStore } from 'pinia'
import piniaPersistConfig from '@/stores/helper/persist'
import type { UserState } from '@/stores/interface'

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: '',
    userInfo: { name: 'Rain' }
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = userInfo
    }
  },
  persist: piniaPersistConfig('user')
})
