'use client'
import { SessionProvider } from 'next-auth/react';

export const AuthProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export const hola="hola";