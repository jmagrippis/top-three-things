import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

export async function fetchToken() {
  const res = await fetch('/api/token')

  if (!res.ok) {
    return null
  }

  return res.text()
}
