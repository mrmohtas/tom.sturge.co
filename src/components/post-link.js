import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} {post.timeToRead}min{post.timeToRead > 1 ? 's' : ''} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink