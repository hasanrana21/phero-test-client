import React, { useEffect, useState } from 'react';
import './Blogs.css';
import BlogsDetails from '../BlogsDetails/BlogsDetails';
import BlogsInfo from '../../Shared/BlogsInfo/BlogsInfo';

const Blogs = () => {
    const [blogsPost, setBlogsPost] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-springs-08165.herokuapp.com/getBlogs')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBlogsPost(data);
        })
    }, [])
    return (
        <div className="row blog-section">
            {
                blogsPost.map((blog, index) => <BlogsDetails blog={blog} key={index}></BlogsDetails>)
            }
        </div>
    );
};

export default Blogs;