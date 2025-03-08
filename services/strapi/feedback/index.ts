import apiClient from "@/services/client";

export const getFeedbacks = async (): Promise<any[]> => {
  const response = await apiClient.get('/feedbacks')
  return response.data.data
}