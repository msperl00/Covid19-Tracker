import Home from '../views/Home.vue'
import Documentation from '../views/Documentation.vue'
import NotFound from '../views/NotFound.vue'
import GlobalDetails from '../views/GlobalDetails.vue'
import Form from '../views/Form.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/Documentation',
    meta: { title: 'Documentation' },
    component: Documentation,
  },
  {
    path: '/aboutTracker',
    meta: { title: 'Form' },
    component: Form,
  },
  {
    path: '/trackerDetails',
    meta: { title: 'Global Details' },
    component: GlobalDetails,
  },
  { path: '/:path(.*)', component: NotFound },
]
