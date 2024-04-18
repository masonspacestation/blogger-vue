<script setup>
import { onMounted, computed } from "vue";
import { blogsService } from "../services/BlogsService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import BlogCard from "../components/BlogCard.vue";
import BlogModal from "../components/BlogModal.vue";

const blogs = computed(() => AppState.blogs)
const activeBlog = computed(() => AppState.activeBlog)
onMounted(() => {
  getBlogs()
})

async function getBlogs() {
  try {
    await blogsService.getBlogs()
  }
  catch (error) {
    Pop.toast('Could not get blogs', 'error');
  }
}
</script>

<template>
  <div class="container">
    <section class="row mt-3">
      <div v-for="blog in blogs" :key="blog.id" class="col-12">
        <BlogCard :blog="blog" />
      </div>
    </section>
  </div>
  <BlogModal />
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
