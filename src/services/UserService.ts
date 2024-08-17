import { api } from '@/utils/api'

export class UserService {
  public static async createAccount(data: any) {
    const response = await api().post('/users', data)

    return response
  }
}
