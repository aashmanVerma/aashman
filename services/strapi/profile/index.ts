import apiClient from "@/services/client";

export const getLinks = async (): Promise<{
  resume: string
  cover: string
  skills: string[]
}> => {
  const response = await apiClient.get('/portfolio-link')
  return response.data.data
}