import { useState, useEffect } from "react";

export const useFetchBlog = (url) => {
  const [loading, setLoading] = useState(true);
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