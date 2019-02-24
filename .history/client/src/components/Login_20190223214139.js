import React, { Component } from 'react'
import {login} from './UserFunctions'

class Login extends Component {
  constructor(){
    super()

    this.state = {
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onChange = this.onChange.bind(this)
  }
}