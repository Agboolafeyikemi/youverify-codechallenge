<template>
  <div class="">
    <div class="bg-primaryDark py-5 px-8">
      <h1 class="font-bold text-secondary">
        Cheta And <wbr /> Daughters Limited
      </h1>
      <span class="text-secondary">RC123456789</span>
    </div>

    <div>
      <nav class="mt-8">
        <ul class="text-secondary">
          <NuxtLink class="py-3 px-8 mb-4 flex items-center" to="/">
            <Dashboard />
            <span class="ml-5">Dashboard</span>
          </NuxtLink>
          <NuxtLink class="py-3 px-8 mb-4 flex items-center" to="/agents">
            <Agents />
            <span class="ml-5">Agents</span>
          </NuxtLink>
          <NuxtLink class="py-3 px-8 mb-4 flex items-center" to="/tasks">
            <Task />
            <span class="ml-5">Task</span>
          </NuxtLink>
          <NuxtLink class="py-3 px-8 mb-4 flex items-center" to="/teams">
            <Teams />
            <span class="ml-5">Teams</span>
          </NuxtLink>
          <NuxtLink class="py-3 px-8 mb-4 flex items-center" to="/users">
            <Users />
            <span class="ml-5">Users</span>
          </NuxtLink>
          <NuxtLink class="py-3 px-8 mb-4 flex items-center" to="/settings">
            <Settings />
            <span class="ml-5">Settings</span>
          </NuxtLink>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Agents from "../assets/icons/agents-icon.vue";
import Dashboard from "../assets/icons/office-icon.vue";
import Settings from "../assets/icons/settings-icons.vue";
import Task from "../assets/icons/task-icon.vue";
import Teams from "../assets/icons/teams-icon.vue";
import Users from "../assets/icons/users-icon.vue";
export default {
  components: {
    Agents,
    Dashboard,
    Settings,
    Task,
    Teams,
    Users,
  },
};
</script>

<style>
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: white;
  background: #46b2c8;
}
.test {
  width: 85%;
  font-family: BR Sonoma;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #c2e2e9;
}
</style>
