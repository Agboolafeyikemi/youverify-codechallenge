<template>
  <div class="" id="agents">
    <el-tabs :stretch="stretch" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="first" label="All">
        <div v-for="i in 4" :key="i">
          <Agent />
        </div>
      </el-tab-pane>
      <el-tab-pane name="second">
        <span slot="label" class="flex items-center">
          <div class="mr-1 h-2 w-2 rounded-full bg-green-500"></div>
          <span>Online</span>
        </span>
        <div v-for="i in 2" :key="i">
          <Agent />
        </div>
      </el-tab-pane>
      <el-tab-pane name="third">
        <span slot="label" class="flex items-center">
          <div class="mr-1 h-2 w-2 rounded-full bg-red-500"></div>
          <span>Offline</span>
        </span>
        <div v-for="i in 2" :key="i">
          <Agent />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Agent from "@/components/agent.vue";
export default {
  components: {
    Agent,
  },
  data() {
    return {
      activeName: "first",
      stretch: true,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
#agents .el-tabs__nav-scroll {
  padding: 0px 20px;
}

#agents .el-tabs__item {
  padding: 0px 20px 0px 0px;
  color: #c4c4c4;
  outline: none;
}

#agents .el-tabs__item.is-active {
  color: #023a59;
}

#agents .el-tabs__active-bar {
  background-color: #023a59;
}
</style>
