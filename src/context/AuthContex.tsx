import { UserService } from '@/services/UserService'
import { api } from '@/utils/api'
import { destroySession } from '@/utils/DestroySession'
import { AxiosError } from 'axios'
import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { createContext, useContext, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { SignInParams, SignUpParams, User } from './AuthContext.types'

export type AuthContextType = {
  user: User | null
  signIn: (data: SignInParams) => Promise<any>
  signUp: (data: SignUpParams) => Promise<any>
  signOut: () => void
}

type AuthProviderProps = {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(getUser)

  function getUser() {
    const { ['ischoll.token']: token, ['ischoll.scholl']: scholl, ['ischoll.email']: email } = parseCookies()

    if (token) {
      return {
        scholl,
        email
      } as User
    } else {
      destroySession()
      return null
    }
  }

  const saveCookies = async ({ response, token }: { response: any; token?: string }) => {
    const { email, scholl } = response
    const tok = token || response.token

    console.log('chamei aqui')

    setCookie(undefined, 'ischoll.scholl', scholl, {
      maxAge: 60 * 60 * 24 * 6
    })

    setCookie(undefined, 'ischoll.email', scholl, {
      maxAge: 60 * 60 * 24 * 6
    })

    setCookie(undefined, 'ischoll.token', tok, {
      maxAge: 60 * 60 * 24 * 6
    })

    setUser({
      scholl,
      email
    })

    Router.push('/alunos')
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

  async function signUp({ email, password, scholl }: SignUpParams) {
    try {
      setUser(null)
      const data = {
        email: email.trim(),
        password,
        scholl
      }

      const response = await UserService.createAccount(data)

      console.log(response)

      toast.success('Cadastro completo com sucesso.')

      saveCookies({ response })
    } catch (err) {
      const { response } = err as AxiosError<{ error: { message: string } }>
      toast.error(response?.data?.error?.message, { autoClose: 3000 })
    }
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
      signUp,
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
