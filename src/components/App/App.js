import React, { Component } from 'react'
import $ from 'jquery'
import './App.css'
import ProfileGithub from '../ProfileGithub/ProfileGithub'
import FormGithub from '../FormGithub/FormGithub'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: {}
    }
    this.getProfile = this.getProfile.bind(this)
  }

  async getProfile (userName) {
    const url = `http://api.github.com/users/${userName}`
    $.ajax({url})
      .then(profileDataFromGithub => {
        this.setState({
          profile: profileDataFromGithub
        })
      })
  }

  render () {
    return (
      <div className='container'>
        <ProfileGithub
          avatar_url={this.state.profile.avatar_url}
          name={this.state.profile.name}
          public_repos={this.state.profile.public_repos}
          followers={this.state.profile.followers}
          following={this.state.profile.following}
        />
        <FormGithub getProfile={this.getProfile} />
      </div>
    )
  }
}

export default App
