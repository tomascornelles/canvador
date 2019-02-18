import page from 'page'

import { home } from './pages/home.js'
import { login } from './pages/login.js'
import { dm } from './pages/dm.js'
import { pj } from './pages/pj.js'
import { notfound } from './pages/notfound.js'

page('/', home)
page('/login', login)
page('/dm', dm)
page('/pj', pj)
page('/pj/:pj', pj)
page('*', notfound)
page()
