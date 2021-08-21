import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const useFetchBlogContent = (url) => {
  const {slug} = useParams()
  const [loading, setLoading] = useState(false);
  const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    setLoading(true)
    async function getBlogPost(){
      try{
        const response = await fetch(`${url}/${slug}`)
        const data = await response.json();
        if(data){
          // const  {
          //   title, 
          //   author, 
          //   date, 
          //   readTime, 
          //   avatar, 
          //   img, 
          //   description, 
          //   content
          // } = data
          setBlogPost(data)
        }
        else{
          setBlogPost(null)
        }
        setLoading(false)
      }
      catch (error){
        setLoading(false)
      }
    }
    getBlogPost()
  }, [slug]);
  return {blogPost, loading}
}