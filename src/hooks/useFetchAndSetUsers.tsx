import { useEffect, useState } from 'react';
import { UserApiSlice } from '../services/userApiSlice';
import { User } from '../services/userTypes';

export const useFetchAndSetUsers = ({refetchUsers}:{refetchUsers: boolean}) => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    const userService = new UserApiSlice();

    try {
      const usersData = await userService.getUsers();
      setUsers(usersData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw e;
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [refetchUsers]);

  return { users, loading, refetch: fetchUsers };
};