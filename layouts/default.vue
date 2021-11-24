<template>
  <el-container>
    <el-header height="72px" class="flex items-center px-8">
      <Header @isToggleSidebar="toggleSidebar" />
    </el-header>
    <el-container>
      <transition name="slide">
        <el-aside :class="`${active} bg-secondary text-white`">
          <Sidenav />
        </el-aside>
      </transition>
      <el-main class="p-0" style="padding: 0px">
        <Nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../components/header.vue";
import Sidenav from "../components/sidenav.vue";

export default {
  components: {
    Header,
    Sidenav,
  },
  data() {
    return {
      active: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.active = !this.active;
    },
  },
};
</script>
<style>
.el-aside {
  /* display: none; */
  width: 0 !important;
  transition: 0.5s;
}

.el-aside.true {
  /* display: block; */
  width: 250px !important;
  transition: 0.5s;
}

body {
  font-family: "BR Sonoma" !important;
}
.slide-enter-active {
  transition: all 0.7s ease;
}

.slide-leave-active {
  transition: all 0.7s ease;
}

.slide-enter,
.slide-leave-active {
  transform: translateX(100%);
}
</style>
