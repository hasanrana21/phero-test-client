import React, { useState } from 'react';
import './Post.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Post = () => {
    const [image, setImage] = useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const postedData = {
            title: data.title,
            description: data.description,
            image: image,
        }

        fetch('https://afternoon-springs-08165.herokuapp.com/postBlog', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(postedData),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    };

    const handleImage = event => {
        console.log(event.target.files[0]);
        const postImage = new FormData();
        postImage.set('key', 'd743345ed836835ea8ba69731659d88a')
        postImage.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', postImage)
          .then(function (response) {
            console.log(response.data.data.display_url);
            setImage(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="post-section">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="image">Blog Image</label>
                <input name="image" type="file" onChange={handleImage} />

                <label htmlFor="title">Blog Title</label>
                <input name="title" {...register('title')} />
                
                <label htmlFor="description">Blog Description</label>
                <input name="description" {...register('description')} />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default Post;