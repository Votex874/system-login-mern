export const register = newUser => {
  return fetch('/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)
  })
  .then(res => console.log('Registered!'))
  .catch(err => console.log(err, 'err'))
}

export const login = user => {
  return fetch('/users/login', {
    method: 'POST',
    body: {
      email: user.email,
      password: user.password
    }
  })
    .then(res => {
      console.log(typeof res)
      console.log(res)
      localStorage.setItem('usertoken', res.data)
      return res.data
    })
  .catch(err => {
    console.log(err) 
  })
}