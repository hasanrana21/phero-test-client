import React from 'react';
import './BlogsDetails.css';
import { Link } from "react-router-dom";

const BlogsDetails = (props) => {
    const { image, title, _id } = props.blog;
    return (
            <div className="col-md-3 blog-card">
                <Link to={`/blogsInfo/${_id}`}>
                    <img src={image} alt=""/>
                    <h3>{title}</h3>
                </Link>
            </div>
    );
};

export default BlogsDetails;