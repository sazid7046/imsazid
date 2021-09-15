import React from 'react';
import { API_URL } from './../utils.js/urls';
import { PopularBlog } from './PopularBlog';
import { useFetchBlog } from './useFetchBlog';

const url = `${API_URL}/blogs`;

function PopularBlog1() {
  const {blog} = useFetchBlog(url);

  function shuffleBlog(blog) {
    let i = blog.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = blog[i];
      blog[i] = blog[j];
      blog[j] = temp;
    }
    return blog;
  }
  React.useEffect(()=> {
    shuffleBlog(blog)
  }, [blog])
  return (
   <React.Fragment>
      {blog.map((popularBlog, index) => {
        return <PopularBlog key={index} {...popularBlog}/>
      })}
   </React.Fragment>
  )
}

export default PopularBlog1
