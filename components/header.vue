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
        <i
          :class="`${rotate} sidebarIcon text-darkPrimary el-icon-back cursor-pointer`"
          @click="isToggleSidenav"
        ></i>
      </div>
      <div class="header-action hidden md:block">
        <el-input
          placeholder="Search for anything here"
          v-model="inputSearch"
          class="input-with-select"
          suffix-icon="el-icon-search"
        >
          <el-select v-model="select" slot="prepend" placeholder="All">
            <el-option label="All" value="1"></el-option>
          </el-select>
        </el-input>
      </div>
    </div>
    <div>
      <div class="flex items-center">
        <div class="hidden md:block relative p-2 rounded-lg bg-primaryLight">
          <Notification />
          <span
            class="
              flex
              justify-center
              items-center
              rounded-full
              bg-redDark
              h-4
              w-4
              absolute
              top-0
              right-0
              text-white text-center
            "
          >
            <span class="text-white text-xs">2</span>
          </span>
        </div>
        <img
          class="hidden md:block ml-5 rounded-full"
          src="/user-1.png"
          alt="user"
        />
        <el-dropdown class="ml-5">
          <span class="el-dropdown-link">
            Solomon<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item>Notification</el-dropdown-item>
            <el-dropdown-item>Settings</el-dropdown-item>
            <el-dropdown-item divided>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../assets/images/Logo.vue";
import Sidenavicon from "../assets/icons/sidenavicon.vue";
import Notification from "../assets/icons/notify-icon.vue";
export default {
  components: {
    Logo,
    Sidenavicon,
    Notification,
  },
  data() {
    return {
      rotate: false,
      inputSearch: "",
      select: "",
    };
  },
  methods: {
    isToggleSidenav() {
      this.rotate = !this.rotate;
      this.$emit("isToggleSidenav");
    },
  },
};
</script>
<style>
#header .header-action .el-input-group__prepend {
  border: 1px solid white;
  border-right-width: 0px;
}
#header .el-select {
  width: 94px;
}

.sidebarIcon.true {
  transition: all 0.45s;
  transform: rotate(180deg);
}

.sidebarIcon.false {
  transition: all 0.45s;
  transform: rotate(0deg);
}

#header .el-input-group {
  height: 58px;
  width: 890px;
  background: #f1f1f1;
}

#header .el-input__inner {
  height: 58px;
  background: #f1f1f1;
  padding: 0 24px 0 14px;
  border: none;
  border-left: 1px solid #e6e6e6;
}
#header .el-select .el-input__inner {
  border-left: 1px solid white;
}

#header .el-input__suffix {
  right: 17px;
}

#header .el-dropdown {
  color: #023a59;
}
</style>
