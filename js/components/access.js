
export const access = {
  login: (user, pass) => {
    window.sessionStorage.setItem('user', user)
  },
  logout: (user) => {
    window.sessionStorage.removeItem('user')
  },
  isLogged: () => {
    console.log((!window.sessionStorage.getItem('user')))
    if (!window.sessionStorage.getItem('user')) window.location.replace('/login')
  }
}
