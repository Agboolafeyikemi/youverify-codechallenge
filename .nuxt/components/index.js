export { default as Agent } from '../../components/Agent.vue'
export { default as Task } from '../../components/Task.vue'
export { default as Agents } from '../../components/agents.vue'
export { default as Agentss } from '../../components/agentss.vue'
export { default as Header } from '../../components/header.vue'
export { default as Sidenav } from '../../components/sidenav.vue'
export { default as Tasks } from '../../components/tasks.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
