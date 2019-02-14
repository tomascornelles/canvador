import page from 'page'

import { home } from './home.js'
import { dm } from './dm.js'
import { pj } from './pj.js'

page('/', home)
page('/dm', dm)
page('/:pj', pj)
// page('*', notfound)
page()
