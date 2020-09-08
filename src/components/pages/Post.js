import React,{useState, useEffect} from 'react'
import { getPosts } from '../../services/ApiCall'

import Detail from './PostDetails'
import Pagination from '../Pagination'

function Post(){
  const [data, setData] = useState([])

  const populsteList = async () => {
    const response = await getPosts()

    setData(response.data)
  }
  
  const handleOnDeleted = (id) => {
    const undeleted = data.filter((post) => (post.id !== id))
    setData(undeleted)
  }

  useEffect(() => {
    populsteList()
  }, []);
  return (
    <div className="container my-5 mb-5">
      <h4 className="mt-5 mb-4">List Data</h4>
      <a className="btn btn-primary my-4" href="post/new">Create Post</a>
      <Pagination />
      {
        data.map((el) => <Detail post={el}  onDeleted={handleOnDeleted} />)
      }
    </div>
  )
}

export default Post