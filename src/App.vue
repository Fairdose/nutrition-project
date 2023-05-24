<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <Header></Header>
  <div id="app-body">
    <router-view name="MainView" :key="$route"></router-view>
  </div>
</template>
