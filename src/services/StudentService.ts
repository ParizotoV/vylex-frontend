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
  public static async createStudent(data: any): Promise<any> {
    const { ['ischoll.token']: token } = parseCookies()

    const response = await api(token).post(`students`, {
      ...data
    })

    return response
  }
  public static async getStudent(id: string): Promise<any> {
    const { ['ischoll.token']: token } = parseCookies()

    const response = await api(token).get(`students/${id}`)

    return response
  }
  public static async updateStudent(id: string, data: any): Promise<any> {
    const { ['ischoll.token']: token } = parseCookies()

    const response = await api(token).put(`students/${id}`, {
      ...data
    })

    return response
  }
  public static async deleteStudent(id: string): Promise<any> {
    const { ['ischoll.token']: token } = parseCookies()

    const response = await api(token).delete(`students/${id}`)

    return response
  }
}
