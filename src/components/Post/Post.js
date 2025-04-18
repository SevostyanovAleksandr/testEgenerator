import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <article className="post">
      <h2>{post.title}</h2>
      <img 
        src={post.imageUrl} 
        alt={`Пост ${post.id}`} 
        className="post-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x300';
        }}
      />
      <p>{post.content}</p>
    </article>
  );
};

export default Post;