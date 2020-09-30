import React from 'react'

const BlogDetailsPage = ({match}) => {
    return (
        <div>
            Blog Details: {match.params.id}
        </div>
    )
}

export default BlogDetailsPage
