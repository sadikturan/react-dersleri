import database from '../firebase/firebaseConfig';

export const addBlog = (blog) => ({
    type: "ADD_BLOG",
    blog
})

export const addBlogToDatabase = (blogData = {}) => {
    return (dispatch) => {
        const { title='', description='',dateAdded=0 } = blogData;
        const blog = {title,description,dateAdded};

        database.ref("blogs").push(blog).then((res) => {
            dispatch(addBlog({
                id: res.key,
                ...blog
            }))
        })
    }
}

export const removeBlog = ({ id }) => (
    {
        type: "REMOVE_BLOG",
        id: id
    }
)

export const editBlog = (id,updates) => ({
    type: "EDIT_BLOG",
    id,
    updates
})