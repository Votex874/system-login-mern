import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()

    this.state = {
      fitst_name: '',
      last_name: '',
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.Submit.bind(this)
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const User = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }

    register(user).then(res => {
        this.props.history.push('/login')
    })
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <form noValidate onSubmit={this.onSubmit}>
              <h1>Please sign in</h1>
              <div>
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange} ></input>
              </div>
              <div>
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange} ></input>
              </div>
              <button type="submit" >Sign in</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register