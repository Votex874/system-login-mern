export const register = newUser => {
  return fetch('user/register', {
    method: 'POST',
    body: { 
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    }
  })
  .then(res => {
    console.log('Registered!')
  })
}

export const login = user => {
  return fetch('user/login', {
    method: 'POST',
    body: {
      email: user.email,
      password: user.password
    }
  })
  .then(res => {
    localStorage.setItem('usertoken', res.data)
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}