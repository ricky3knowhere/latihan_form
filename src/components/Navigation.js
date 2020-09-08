import React from 'react'
import { Link } from 'react-router-dom'

const routes = [
  ['Home', '/', true],
  ['Post',  '/post'],
  // ['Create New', '/post/new']
]

function Navigation(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="nav mr-auto">
        { routes.map(
          ([text, path, exact ], idx) => (
            <li key={idx + 1} className="nav-item active">
              <Link className="nav-link" to={path} exact={exact ? 'true' : 'false'} >{text}</Link>
            </li>
          )
        )
        }
      </ul>
    </nav>
    )
}

export default Navigation