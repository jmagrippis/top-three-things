import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

export type User = {
  given_name: string
  family_name: string
  nickname: string
  name: string
  picture: string
  locale: string
  updated_at: string
  email: string
  email_verified: boolean
  sub: string
}

declare global {
  interface Window {
    __3_user?: User
  }
}

export async function fetchUser(cookie = '') {
  if (typeof window !== 'undefined' && window.__3_user) {
    return window.__3_user
  }

  const res = await fetch(
    '/api/me',
    cookie
      ? {
          headers: {
            cookie,
          },
        }
      : {}
  )

  if (!res.ok) {
    delete window.__3_user
    return null
  }

  const json = await res.json()
  if (typeof window !== 'undefined') {
    window.__3_user = json
  }
  return json
}

export function useFetchUser() {
  const [loading, setLoading] = useState(
    () => !(typeof window !== 'undefined' && window.__3_user)
  )
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') {
      return null
    }

    return window.__3_user || null
  })

  useEffect(
    () => {
      if (!loading && user) {
        return
      }
      setLoading(true)
      let isMounted = true

      fetchUser().then((user) => {
        // Only set the user if the component is still mounted
        if (isMounted) {
          setUser(user)
          setLoading(false)
        }
      })

      return () => {
        isMounted = false
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return { user, loading }
}
