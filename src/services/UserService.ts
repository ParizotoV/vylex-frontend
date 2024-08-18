import { api } from '@/utils/api'

export class UserService {
  public static async createAccount(data: any) {
    const response = await api().post('/users', data)

    return response
  }
  public static async login(data: any) {
    const response = await api().post('/users/auth', data)

    return response
  }
  public static async recoverPassword(email: string) {
    const response = await api().post('/users/password-recovery', { email })

    return response
  }
  public static async newPassword(data: any): Promise<any> {
    const response = api(data.token).put(`/users/${data.userId}`, {
      password: data.password
    })

    return response
  }
}
