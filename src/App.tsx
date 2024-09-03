
import { useState } from 'react';
import './index.css';
import { useFetchAndSetUsers } from './hooks/useFetchAndSetUsers';
import { useFetchAndSetPosts } from './hooks/useFetchAndSetPosts';

const  App = () => {
  const [refetchUser, setRefetchUser] = useState<boolean>(false);
  const [refetchPosts, setRefetchPosts] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<number | undefined>(undefined);
  const [selectedPost, setSelectedPost] = useState<number | undefined>(undefined);

  const { users, loading:userLoading } = useFetchAndSetUsers({refetchUsers: refetchUser});
  const { posts, loading:postLoading } = useFetchAndSetPosts({refetchPosts: refetchPosts, userId: selectedUser});

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(Number(event.target.value));
  }

  const handlePostChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPost(Number(event.target.value));
  }

  return (
		<div className="bg-white flex flex-col items-center justify-center h-screen">
			<div className=" flex w-full h-full justify-around items-center">
				<div className="flex flex-col items-center space-y-2">
					<h2 className="font-semibold underline">Users</h2>
					<select
						value={selectedUser}
						onChange={handleUserChange}
						className="border-2 border-black"
					>
						{userLoading ? (
							<option value="">Loading...</option>
						) : (
							<option value="">-- Select a user --</option>
						)}
						{users &&
							users.map((user) => (
								<option key={user.id} value={user.id}>
									{user.name} ({user.username})
								</option>
							))}
					</select>
				</div>
				<div className="flex flex-col items-center space-y-2">
					<h2 className="font-semibold underline">Posts</h2>
					<select
						value={selectedPost}
						onChange={handlePostChange}
						className="border-2 border-black w-[300px]"
					>
						{postLoading ? (
							<option value="">Loading...</option>
						) : (
							<option value="">-- Select a post--</option>
						)}
						{posts &&
							posts.map((post) => (
								<option key={post.id} value={post.id}>
									{post.title}
								</option>
							))}
					</select>
				</div>
			</div>
		</div>
	);
};
 export default App;


