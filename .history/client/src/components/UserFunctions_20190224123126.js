export const register = newUser => {
  return fetch('http://localhost:5000/users/register', {
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
  console.log(JSON.stringify(user))
  return fetch('http://localhost:5000/users/login', {
    method: 'POST',
    body: JSON.stringify(user)
  })
  .then(res => {
    console.log(res)
    localStorage.setItem('usertoken', res.data)
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}