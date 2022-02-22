import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import GlobalDetails from '../views/GlobalDetails.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
  },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
  },
  {
    path: '/trackerDetails',
    meta: { title: 'Global Details' },
    component: GlobalDetails,
  },
  { path: '/:path(.*)', component: NotFound },
]
