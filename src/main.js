// frontend/src/main.js

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import router
import "./assets/main.css";
createApp(App).use(router).mount("#app"); // Use router
