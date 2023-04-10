// frontend/src/router.js

import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import MangaDetail from "@/views/MangaDetail.vue";
import ReadChapter from "@/views/ReadChapter.vue";
import UploadManga from "@/views/UploadManga.vue";
import UploadChapter from "@/views/UploadChapter.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mangas/:id",
    name: "MangaDetail",
    component: MangaDetail,
    props: true,
  },
  {
    path: "/mangas/:id/chapters/:chapterId",
    name: "ReadChapter",
    component: ReadChapter,
    props: true,
  },
  {
    path: "/upload-manga",
    name: "UploadManga",
    component: UploadManga,
  },
  {
    path: "/upload-chapter",
    name: "UploadChapter",
    component: UploadChapter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
