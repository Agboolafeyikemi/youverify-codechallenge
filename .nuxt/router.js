import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5cd380f8 = () => interopDefault(import('../pages/agents.vue' /* webpackChunkName: "pages/agents" */))
const _5d2268ce = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _043f5d88 = () => interopDefault(import('../pages/tasks.vue' /* webpackChunkName: "pages/tasks" */))
const _2204d0a0 = () => interopDefault(import('../pages/teams.vue' /* webpackChunkName: "pages/teams" */))
const _0db3a302 = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
const _6f6c6e68 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/agents",
    component: _5cd380f8,
    name: "agents"
  }, {
    path: "/settings",
    component: _5d2268ce,
    name: "settings"
  }, {
    path: "/tasks",
    component: _043f5d88,
    name: "tasks"
  }, {
    path: "/teams",
    component: _2204d0a0,
    name: "teams"
  }, {
    path: "/users",
    component: _0db3a302,
    name: "users"
  }, {
    path: "/",
    component: _6f6c6e68,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
