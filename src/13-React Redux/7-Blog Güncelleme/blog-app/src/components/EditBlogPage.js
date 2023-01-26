import React from 'react'
import BlogForm from './BlogForm'
import {connect} from 'react-redux';
import {editBlog} from '../actions/blogs';

const EditBlogPage = (props) => {
    return (
        <div>
            <h1>Edit Page</h1> 
            <BlogForm 
                blog={props.blog}
                onSubmit = {(blog) => {
                    props.dispatch(editBlog(props.blog.id, blog));
                    props.history.push('/blogs');
                }}
            />
        </div>
    )
}

const mapStateToProps = (state,props) => {
    return {
        blog: state.blogs.find((b) => {
            return b.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditBlogPage);
