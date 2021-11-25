<template>
  <el-container>
    <el-header height="72px" class="flex items-center px-8">
      <Header @isToggleSidenav="toggleSidenav" />
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
    toggleSidenav() {
      this.active = !this.active;
    },
  },
};
</script>
<style>
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
.el-aside {
  width: 0 !important;
  transition: 0.5s;
}

.el-aside.true {
  width: 250px !important;
  transition: 0.5s;
}
</style>
