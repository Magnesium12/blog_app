import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

var blogDetailedView = {
    "id": 4,
    "title": "test blog 4",
    "author": 1,
    "content": "safds dadasd",
    "created_at": "2022-08-24T12:17:32.770957+05:30",
    "updated_at": "2022-08-24T12:17:32.770957+05:30",
    "stars": 6
  }



const BlogDetail = ()=>{
    // let [searchParams, setSearchParams] = useSearchParams();
    // var id = parseInt(searchParams.get("id"))
    const {id} = useParams();
    const [blogView,setBlogView] = useState(blogDetailedView)
    const firstRender = useRef(true);
    const blog_det_view = (id)=>{
        axios({
            method:"get",
            url:`/blog/${id}`,
            headers: { "Content-Type": "application/json" },
        })
        // axios.get(`http://127.0.0.1:8000/blog/${id}`)
        .then(function (response){
            console.log("reched here")
            let data = response.data
            console.log("data = = = ",data)
            console.log("res = = =",response)
            setBlogView(data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    useEffect(()=>{
        if(firstRender.current){
            firstRender.current = false
            if(id==undefined){
                id = 3;
            }
            blog_det_view(id);
        }
    })
    return(
        <div style={{paddingTop:"55px",paddingLeft:"60px"}} id="blog-det-view">
            <h1>{blogView.title}</h1>
            <h5>by {blogView.author}</h5>
            <i>{blogView.created_at}</i>
            <br></br>
            <b>{blogView.stars}★</b>
            <hr></hr>
            <p>{blogView.content}</p>
            <i>Last updated at: {blogView.updated_at}</i>
        </div>
    )
  }

  export default BlogDetail