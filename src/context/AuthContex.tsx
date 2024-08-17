import { api } from '@/utils/api'
import { destroySession } from '@/utils/DestroySession'
import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { createContext, useContext, useMemo, useState } from 'react'

export type User = {
  name: string
}

type SignInParams = {
  email: string
  password: string
}

export type AuthContextType = {
  user: User | null
  signIn: (data: SignInParams) => Promise<any>
  signOut: () => void
}

type AuthProviderProps = {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(getUser)

  function getUser() {
    const { ['ischoll.token']: token, ['ischoll.name']: name } = parseCookies()

    if (token) {
      return {
        name
      } as User
    } else {
      destroySession()
      return null
    }
  }

  const saveCookies = async ({ response, token }: { response: any; token?: string }) => {
    if (response.status === 200) {
      const { name } = response.data
      const tok = token || response.data.token

      setCookie(undefined, 'ischoll.name', name, {
        maxAge: 60 * 60 * 24 * 6
      })

      setCookie(undefined, 'ischoll.token', tok, {
        maxAge: 60 * 60 * 24 * 6
      })

      setUser({
        name
      })

      Router.push('/alunos')
    }
  }

  async function signIn({ email, password }: SignInParams) {
    setUser(null)
    const data = {
      email: email.trim(),
      password
    }

    setCookie(undefined, 'nextauth.email', email, {
      maxAge: 60 * 60 * 24 * 6
    })

    const response = await api().post('/users/auth', data)
    await saveCookies({ response })
  }

  const signOut = async () => {
    destroySession()
    setUser(null)
    Router.push('/login')
  }

  const value = useMemo(
    () => ({
      signIn,
      signOut,
      user
    }),
    [user, signIn, signOut, user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const AuthContext = createContext({} as AuthContextType)

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext should be used within an AuthContext')
  }

  return context as AuthContextType
}
