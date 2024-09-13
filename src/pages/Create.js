import React, { useState } from 'react';
import Blogs from '../data/db';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        
        let first = Blogs.length
        let uniqueId = first + 1

        let a = title,
            b = body,
            c = date;

        Blogs.push({ id: uniqueId, title: a, body: b, date: c })

        history('/')
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const blog = { title, body, date };
    //     console.log(blog1)
    // }

    const demoSubmit = () => {
        let first = Blogs.length
        console.log(first)
    }

    return (
        <div className="create">
            <h2 onClick={demoSubmit}>Add New Blog</h2>
            <form onSubmit={handleSubmit} >
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Date Created:</label>
                <input type="date" onChange={(e) => setDate(e.target.value)}></input>
                <button type='submit' >Add Blog</button>
            </form>
            <Footer />
        </div>
    );

}

export default Create;