<!-- frontend/src/components/Navbar.vue -->

<template>
  <header class="bg-blue-600 w-full z-10">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-white text-4xl font-extrabold">
          THẾ GIỚI TIÊN HIỆP
        </router-link>
        <ul class="flex items-center space-x-4">
          <li>
            <router-link
              to="/"
              class="text-white text-xl font-extrabold hover:text-blue-300 transition-colors duration-300"
            >
              Trang Chủ
            </router-link>
          </li>
          <li>
            <router-link
              to="/upload-manga"
              class="text-white text-xl font-extrabold hover:text-blue-300 transition-colors duration-300"
            >
              Upload Truyện
            </router-link>
          </li>
          <li>
            <router-link
              to="/upload-chapter"
              class="text-white text-xl font-extrabold hover:text-blue-300 transition-colors duration-300"
            >
              Upload Chương
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
