import React from 'react';
import { API_URL } from '../Project/utils.js/urls';
import { PopularBlog } from './PopularBlog';
import { useFetchBlog } from './useFetchBlog';

const url = `${API_URL}/blogs`;

function PopularBlog1() {
  const {blog} = useFetchBlog(url);
  function shuffleBlog(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  const shuffledPosts = shuffleBlog(blog); 
  return (
   <React.Fragment>
      {shuffledPosts.map(popularBlog => {
        return <PopularBlog {...popularBlog}/>
      })}
   </React.Fragment>
  )
}

export default PopularBlog1
