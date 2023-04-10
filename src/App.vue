<!-- frontend/src/App.vue -->

<template>
  <div class="min-h-screen bg-gray-100">
    <navbar></navbar>
    <router-view class="container mx-auto px-4"></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
/* Add any global CSS styles here */
</style>
