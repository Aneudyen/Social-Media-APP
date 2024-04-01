import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import Post from './Post';
import PostForm from './PostForm';
import Feed from './Feed';


function App(){ const [posts, setPosts] = useState([]); // State to store posts


const addPost = (newPost) => {
  setPosts([newPost, ...posts]); 
}

  
  return(
    <div>
      <h1>Fakebook!</h1>
      
        {/* CreatePostForm */}
        <PostForm addPost={addPost} />

        {/* Feed */}
        <Feed posts={posts}/>
        
        {/* Post*/}
        <Post content="This is a test post!" />
        <Post content="This is another test post!" />
    
    </div>
  )
}


export default App
