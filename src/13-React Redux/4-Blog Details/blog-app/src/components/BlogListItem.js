import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({ id,title }) => {
    return (
        <>
            <li>
                {title} - <Link to= {`/blogs/${id}`}>Details</Link>
            </li>
        </>
    )
}

export default BlogListItem
