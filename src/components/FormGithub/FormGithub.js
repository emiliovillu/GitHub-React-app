import React, { Component } from 'react'
class FormGithub extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSumit = this.handleSumit.bind(this)
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSumit (e) {
    e.preventDefault()
    this.props.getProfile(this.state.value)
  }

  render () {
    return (
      <form onSubmit={this.handleSumit}>
        <div className='form-group'>
          <input onChange={this.handleChange} type='text' value={this.state.value} className='form-control' placeholder='Enter username...' />
        </div>
        <button type='submit' className='btn btn-primary'>Find User</button>
      </form>
    )
  }
}

export default FormGithub
