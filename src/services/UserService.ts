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
}
