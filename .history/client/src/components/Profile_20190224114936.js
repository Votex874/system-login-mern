import React, { Component } from 'react'
import jwt_decode from 'jwt_decode'

class Profile extends Component{
  constructor(){
    super()

    this.state = {
      fisrt_name: '',
      last_name: '',
      email: ''
    }
  }

  componentDidMount = () => {
    const token = localStorage.usertoken
    const decode = jwt_decode(token)
    this.setState({
      first_name: decode.first_name,
      last_name: decode.last_name,
      email: decode.email
    })
  }

  render(){
    return (
      <div className="container">
        <div>
          <div>
            <h1>PROFILE</h1>
          </div>
        </div>
      </div>

    )
  }
}