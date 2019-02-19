import page from 'page'

import { home } from './pages/home.js'
import { login } from './pages/login.js'
import { logout } from './pages/logout.js'
import { dm } from './pages/dm.js'
import { pj } from './pages/pj.js'
import { notfound } from './pages/notfound.js'

page('/', home)
page('/login', login)
page('/logout', logout)
page('/dm', dm)
page('/:pj', pj)
page('*', notfound)
page()
