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
}