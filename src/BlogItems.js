import React from 'react'
import { useFetch } from './custom-hooks/useFetch'
import { useNavigate } from 'react-router-dom'

export const BlogItems = ({id, title, body, author}) => {



    const  navigate = useNavigate()


    return (
        
        <div className='blog-items' onClick={()=> navigate(`/blogs/${id}`) }>
            <h3>{title}</h3>
            <p>Written By {author}</p>

        </div>
    )
}
