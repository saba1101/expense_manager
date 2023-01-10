<script setup>
import globalData from "@/scripts/data.js"
import Sidebar from "@/components/Layout/Sidebar.vue"
import Balance from '@/components/Preview/Balance.vue'
import Card from '@/components/Preview/Card.vue'

const global = globalData()
</script>

<template>
  <div class="global_content_wrapper">
    <div class="sidebar_placeholder">
      <Sidebar
        :data="global.sidebar_items.value"
      />
    </div>
    <div class="preview_placeholder">
      <Balance  style="margin: 25px 25px; width: 424px"/>
      <Card :balance="'552.00'" style="margin: 25px 25px; width: 424px" />
    </div>
    <div class="content_placeholder">

    </div>
  </div>
</template>

<style lang="scss" scoped>
.global_content_wrapper{
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 7.5625rem 30rem auto;

  .sidebar_placeholder{

  }

  .preview_placeholder{

  }

  .content_placeholder{

  }
}
</style>
