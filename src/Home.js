import React from 'react'

const Home = props => {
  const allUsers = props.users.map((user) => {
    return <li>{user}</li>
  })
  return (
    <div>
      <h1>Home</h1>
      <p>{props.description}</p>
      <ul>
        {allUsers}
      </ul>
    </div>
  )
}

export default Home
