import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const sample_blog_items = [
    {
        id: 4,
        title: "test blog 4",
        author: 1,
        created_at: "2022-08-24T12:17:32.770957+05:30",
        updated_at: "2022-08-24T12:17:32.770957+05:30",
        stars: 6
    },
    {
        id: 3,
        title: "test blog 3",
        author: 1,
        created_at: "2022-08-24T12:16:57.440201+05:30",
        updated_at: "2022-08-24T12:16:57.440201+05:30",
        stars: 6
    },
    {
        id: 1,
        title: "test blog1",
        author: 1,
        created_at: "2022-08-24T12:11:29.194174+05:30",
        updated_at: "2022-08-24T12:11:29.194174+05:30",
        stars: 3
    },
    {
        id: 5,
        title: "test blog 5",
        author: 1,
        created_at: "2022-08-24T12:55:43.539631+05:30",
        updated_at: "2022-08-24T12:55:43.539631+05:30",
        stars: 2
    },
    {
        id: 2,
        title: "test blog 2",
        author: 1,
        created_at: "2022-08-24T12:15:36.065418+05:30",
        updated_at: "2022-08-24T12:15:36.065418+05:30",
        stars: 1
    },
    {
      id: 999,
      title: "test blog 999",
      author: 2,
      created_at: "2022-08-24T12:15:36.065418+05:30",
      updated_at: "2022-08-24T12:15:36.065418+05:30",
      stars: 0
  }
  ];

const blog_to_html = (blogItems)=>{
    var blogView = []
    blogItems.forEach((blog)=>{
        blogView.push(
            <a href={`http://localhost:3000/blog/${blog.id}`} className="list-group-item list-group-item-action" key={blog.id}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{blog.title}</h5>
                    <small>{blog.created_at}</small>
                    <small>{blog.stars}★</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small>{blog.author}</small>
            </a>
        )
    })
    return blogView
}

const sample_blog_html = blog_to_html(sample_blog_items)

const Home = ()=>{
    const [blogs,setBlogs] = useState(sample_blog_html)
    const firstRender = useRef(true);
    const blog_get = ()=>{
        axios({
            method:"get",
            url:`/blog`,
            headers: { "Content-Type": "application/json" },
        })
        // axios.get(`http://127.0.0.1:8000/blog/${id}`)
        .then(function (response){
            console.log("reched here")
            let data = response.data
            console.log("data = = = ",data)
            console.log("res = = =",response)
            let html_data = blog_to_html(data);
            setBlogs(html_data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    useEffect(()=>{
        if(firstRender.current){
            firstRender.current = false
            blog_get();
        }
    })
    return(
        <div className="list-group" style={{paddingTop:"55px"}}>
            {blogs}
        </div>
    )
}
export default Home