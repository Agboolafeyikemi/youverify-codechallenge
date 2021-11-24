<template>
  <div class="items-center flex justify-between w-full" id="header">
    <div>
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
    </div>
    <div class="flex items-center">
      <div
        class="
          w-8
          h-8
          flex
          items-center
          justify-center
          mr-4
          rounded-full
          shadow-md
        "
      >
        <Sidenavicon
          :class="rotate ? 'toggleSidenavIconTrue' : 'toggleSidenavIconFalse'"
          @click="toggleSidebar"
        />
      </div>
    </div>
    <div class="header-action hidden md:block">
      <input class="input-with-select" placeholder="Search for anything here" />
    </div>
  </div>
</template>

<script>
import Logo from "../assets/images/Logo.vue";
import Sidenavicon from "../assets/icons/sidenavicon.vue";
export default {
  components: {
    Logo,
    Sidenavicon,
  },
  data() {
    return {
      rotate: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.rotate = !this.rotate;
      this.$emit("isToggleSidebar");
      console.log(rotate, "rotate");
    },
  },
};
</script>
<style>
.toggleSidenavIconTrue {
  transition: all 0.45s;
  transform: rotate(180deg);
  cursor: pointer;
}

.toggleSidenavIconFalse {
  transition: all 0.45s;
  transform: rotate(0deg);
  cursor: pointer;
}
</style>
