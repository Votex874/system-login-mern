export const register = newUser => {
  return fetch('/users/register', {
    method: 'POST',
    body: { 
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    }
  })
  .then(res => console.log('Registered!'))
  .catch(err => console.log(err, 'err'))
}

export const login = user => {
  return fetch('/users/login', {
    method: 'POST',
    body: JSON.stringify(user)
  })
  .then(res => {
    localStorage.setItem('usertoken', res.data)
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}