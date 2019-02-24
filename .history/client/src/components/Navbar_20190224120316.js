import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {

  logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push('/')
  }

  render(){
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/login' className="nav-link"> Login </Link>
        </li>
        <li className="nav-item">
          <Link to='/register' className="nav-link"> Register </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/profile' className="nav-link"> User </Link>
        </li>
        <li className="nav-item">
          <a  onClick={this.logOut} className="nav-link"> Logout </a>
        </li>
      </ul>
    )

    return (
      <nav className="">
        <button 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span>

          </span>
        </button>
        <div id="navbar1">
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink }
        </div>
      </nav>
    )
  }
}


export default withRouter(Navbar)