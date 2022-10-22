import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {

    const {id} = useParams();
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs/"+id);
    const history = useNavigate();

    const handleDelete = ()=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method:"DELETE"
        }).then(
            history("/")
        );
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blogs && (
                <article>
                <h2>{blogs.title}</h2>
                <p>Written by {blogs.author}</p>
                <div>{blogs.body}</div>
                <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetail;