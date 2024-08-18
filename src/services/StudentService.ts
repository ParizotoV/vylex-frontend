import { api } from '@/utils/api'
import { parseCookies } from 'nookies'

export class StudentService {
  public static async getallPaginated(params: any): Promise<any> {
    const { ['ischoll.token']: token } = parseCookies()
    let filterParams = ''
    if (params?.page) {
      filterParams += `?page=${params?.page}`
    }

    if (params?.per) {
      filterParams += `&per=${params?.per}`
    }

    if (params?.email) {
      filterParams += `&email=${params?.email}`
    }

    const response = await api(token).get(`students${filterParams}`)

    return response
  }
}
