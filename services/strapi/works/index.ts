import apiClient from "@/services/client";

export const getWorkHistory = async (): Promise<any[]> => {
  const response = await apiClient.get('/works')
  return response.data.data
}