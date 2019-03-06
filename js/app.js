import page from 'page'

import { home } from './pages/home.js'
import { login } from './pages/login.js'
import { logout } from './pages/logout.js'
import { gm } from './pages/gm.js'
import { pj } from './pages/pj.js'
import { user } from './pages/user.js'
import { notfound } from './pages/notfound.js'

page('/', home)
page('/login', login)
page('/logout', logout)
page('/404', notfound)
page('/pj/gm', gm)
page('/pj/:pj', pj)
page('/user/:user', user)
page()
