
export class BaseApiService {
  protected readonly baseUrl: string = 'https://jsonplaceholder.typicode.com/';

  protected async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to fetch:", error);
      throw error;
    }
  }
}