import axios from 'axios'

export const axiosClient = (token: string) =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `bearer ${token}`
    }
  })

export const api = (token: string = 'noAuth') => {
  return {
    get: async <T>(endpoint: string, params?: any): Promise<T> => {
      const { data } = await axiosClient(token).get(`api/${endpoint}`, {
        params
      })
      return data
    },
    post: async <T>(endpoint: string, body: Partial<T>): Promise<T> => {
      const { data } = await axiosClient(token).post(`api/${endpoint}`, body)
      return data
    },
    patch: async <T>(endpoint: string, params?: Partial<T>): Promise<T> => {
      const { data } = await axiosClient(token).patch(`api/${endpoint}`, params)
      return data
    },
    delete: async <T>(endpoint: string, params?: any): Promise<T> => {
      const { data } = await axiosClient(token).delete(`api/${endpoint}`, params)
      return data
    }
  }
}
