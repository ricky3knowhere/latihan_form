import axios from 'axios'


const api = axios.create({
  baseURL: 'http://localhost:3003'
})

function getPosts(){
  return api.get('/posts')
}
function createData(data){
  return api.post('/posts', data )
}

function deletePost(id){
  return api.delete(`/posts/${id}`)
}

function getPost(id){
  return api.get(`/posts/${id}`)
}

export {
  getPosts,
  createData,
  deletePost,
  getPost
}