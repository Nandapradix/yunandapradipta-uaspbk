import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useUserStore } from '../user'

describe('User Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia()) // setup Pinia mock setiap test
  })

  it('should set user correctly', () => {
    const store = useUserStore()
    store.setUser({ nama: 'Yunanda', role: 'admin' })

    expect(store.user).toEqual({ nama: 'Yunanda', role: 'admin' })
    expect(store.isLoggedIn).toBe(true)
    expect(store.getUserName).toBe('Yunanda')
  })

  it('should clear user correctly', () => {
    const store = useUserStore()
    store.setUser({ nama: 'Yunanda', role: 'admin' })
    store.clearUser()

    expect(store.user).toBe(null)
    expect(store.isLoggedIn).toBe(false)
    expect(store.getUserName).toBe('')
  })
})
