
import { useState, useEffect } from 'react';
import { UserApiSlice } from '../services/userApiSlice';
import { Post } from '../services/userTypes';

type UsePostsOptions = {
  userId: number | undefined;
  refetchPosts?: boolean;
}

export const useFetchAndSetPosts = ({ userId, refetchPosts }: UsePostsOptions) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchPosts = async () => {
    if (userId === undefined) return;
    setLoading(true);

    try {
      const userService = new UserApiSlice();
      const fetchedPosts = await userService.getPostsByUserId(userId);
      setPosts(fetchedPosts);
    } catch (error) {
     throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchPosts();
    }
  }, [userId, refetchPosts]);

  return { posts, loading, refetch: fetchPosts };
};