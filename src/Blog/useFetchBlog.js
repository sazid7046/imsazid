import { useState, useEffect } from "react";
import Preloader from './../components/ui/Preloader';

export const useFetchBlog = (url) => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState([]);

  const getBlog = async () =>{
    const response = await fetch(url);
    const blog = await response.json();
    setBlog(blog);
    setLoading(false);
  };
  useEffect(()=>{
    getBlog()
  }, [url]);
  return {blog, loading}
}