import blogs from '../data/db';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function BlogDetails(){
const params = useParams();
const id =params.id;
const [blog]= useState(blogs[id-1])
console.warn(blog)

    return(
          <div className="blog-preview">
          <h2>{blog.title}</h2>
          
          <p>{ blog.body}</p>
          <br></br>
          <p>{blog.date}</p>
          
          </div>
    );
}export default BlogDetails;


 
