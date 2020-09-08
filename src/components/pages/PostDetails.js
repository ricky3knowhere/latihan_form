import React from 'react'
import { deletePost } from '../../services/ApiCall'
import { Link } from 'react-router-dom'

function PostDetails({post, onDeleted}) {

  
  const clickDelete = async () => {
    const response = await deletePost(post.id)
    if(response.status === 200){
      onDeleted(post.id)
    }
  }
 

  return (
    <div class="card mb-2">
      <div class="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <Link to={`/post/${post.id}`} className="btn btn-success btn-sm mr-2" >Detail</Link> 
        <button className="btn btn-danger btn-sm" onClick={clickDelete}>Delete</button>
      </div>
    </div>
  )
}

export default PostDetails