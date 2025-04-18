import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import Post from '../components/Post/Post';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="content">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}

export default HomePage;