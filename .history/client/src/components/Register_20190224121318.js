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
  }

  onChange = e => {
    console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const user = {
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
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" placeholder="Enter First Name" value={this.state.first_name} onChange={this.onChange} ></input>
              </div>
              <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" placeholder="Enter Last Name" value={this.state.last_name} onChange={this.onChange} ></input>
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange} ></input>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange} ></input>
              </div>
              <button type="submit" >Register</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register