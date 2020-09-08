import React, { useState } from "react";
import { createData } from '../../services/ApiCall'
import { useHistory } from 'react-router-dom'

function Create() {
  const  [data, setData] = useState({ title: '', body: ''})
  const history = useHistory()

  async function create(){
    const response = await createData(data)
    if(response.status === 201){
      history.push(`/post/${response.data.id}`)
    }
  }

  function onChangeTitle(e){
    setData((data) => {
      data.title = e.target.value
      return data
    })
  }

  function onChangeBody(e){
    setData((data) => {
      data.body = e.target.value
      return data
    })
  }
  return (
    <div>
      <h4 className="mt-5 mb-4">Form Create</h4>
      <form>
        {/* Userid: <input name="userId"/><br /> */}
        <div class="form-group">
          <label for="title">Title</label>
          <input className="form-control" name="title" id="title" onChange={onChangeTitle} />
        </div>
        <div class="form-group">
          <label for="body">Body</label>
          <input className="form-control" name="body" onChange={onChangeBody} />
        </div>
        <button type="button" onClick={create} className="btn btn-primary btn-sm">Insert</button>
      </form>
    </div>
  )
}

export default Create