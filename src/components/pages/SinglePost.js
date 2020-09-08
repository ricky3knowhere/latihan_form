import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../../services/ApiCall'

function SiglePost(){
  const params = useParams()

  const [data, setData] = useState([]);
  useEffect(() => {
    getPost(params.id).then(
      (data) => {setData(data.data)
      }
    )
  }, []);
  return (
    <div>
      <h6>ID : {data.id}</h6>
      <h6>Title : {data.title}</h6>
      <h6>Body : {data.body}</h6>

    </div>
  )
}

export default SiglePost