import { createSlice } from '@reduxjs/toolkit';
import { fetchCatImage } from './postsAPI';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPostsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess(state, action) {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchPostsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(fetchPostsStart());
    
    const postsData = [
      {
        id: 1,
        title: 'Первый пост',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.',
      },
      {
        id: 2,
        title: 'Второй пост',
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 3,
        title: 'Третий пост',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ];

    // Получаем изображения для каждого поста
    const postsWithImages = await Promise.all(postsData.map(async (post) => {
      const imageUrl = await fetchCatImage();
      return { ...post, imageUrl };
    }));

    dispatch(fetchPostsSuccess(postsWithImages));
  } catch (error) {
    dispatch(fetchPostsFailure(error.toString()));
  }
};

export default postsSlice.reducer;