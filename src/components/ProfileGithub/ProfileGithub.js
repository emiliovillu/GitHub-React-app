import React, { Component } from 'react'

const ProfileGithub = (props) => {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <div className='row'>
          <div className='col-sm-4'>
            <img width='200' className='img-circle' src={props.avatar_url} />
          </div>
          <div className='col-sm-8'>
            <h1 id='title'>{props.name}</h1>
            <ul className='container'>
              <li className='list-unstyled'>Repos <strong>{props.public_repos}</strong></li>
              <li className='list-unstyled'>Followers <strong>{props.followers}</strong></li>
              <li className='list-unstyled'>Following <strong>{props.following}</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileGithub
