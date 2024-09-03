import { BaseApiService } from './baseApiService';
import { Post, User } from './userTypes';

export class UserApiSlice extends BaseApiService {
  public async getUsers(): Promise<User[]> {
    return await this.get('/users');
  }

  public async getPostsByUserId(userId: number): Promise<Post[]> {
    return await this.get(`/users/${userId}/posts`);
  }
}