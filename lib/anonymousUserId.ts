import store from 'store2'

export const ANONYMOUS_USER_ID_KEY = 'anonymousUserId'

export const getAnonymousUserId = () => store.get(ANONYMOUS_USER_ID_KEY)

export const setAnonymousUserId = (id: string) =>
  store.set(ANONYMOUS_USER_ID_KEY, id)
