const blogState = []

const blogReducer = (state = blogState, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return [
                ...state,
                action.blog
            ]
        case "REMOVE_BLOG":
            return state.filter(({ id }) => {
                return id !== action.id;
            })
        case "EDIT_BLOG":
            return state.map((blog) => {
                if(blog.id === action.id) {
                    return {
                        ...blog,
                        ...action.updates
                    }
                } else {
                    return blog;
                }
            })
        default:
            return state;
    }
}

export default blogReducer;