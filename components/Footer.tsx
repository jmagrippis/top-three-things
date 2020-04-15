import * as React from 'react'

export const Footer = () => (
  <footer className="w-full bg-red-200 p-2 text-sm text-center">
    Copyright ©{new Date().getFullYear()}{' '}
    <a href="https://magrippis.com">Johnny Magrippis</a>
  </footer>
)
