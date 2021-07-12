import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogsInfo.css';

const BlogsInfo = () => {
    const [info, setInfo] = useState([]);
    const { selectId } = useParams();
    console.log(selectId);

    useEffect(() => {
        fetch('https://afternoon-springs-08165.herokuapp.com/getBlogs')
        .then( res => res.json())
        .then( data => {
            // console.log(data);
            setInfo(data);
        })
    }, []);
    let selectedBlogs = info.find(selectInfo => selectInfo._id === selectId);
    console.log(selectedBlogs);
    return (
        <div className="blogs-info">
            <img src={selectedBlogs?.image} alt="" />
            <div className="blog-content">
                <h3>{selectedBlogs?.title}</h3>
                <p> {selectedBlogs?.description}</p>
            </div>
        </div>
    );
};

export default BlogsInfo;